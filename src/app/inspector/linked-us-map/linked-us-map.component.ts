import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import * as d3GeoTile from '../../../assets/d3.geo.tile';
import * as topojson from 'topojson';
import * as $ from 'jquery';
import { ChartConfigService } from '../services/chart-config.service';
import { MapService } from '../services/map.service';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map, throttle } from 'rxjs/operators';
import { interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'linked-map',
  templateUrl: './linked-us-map.component.html',
  styleUrls: ['./linked-us-map.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MapService]
})
export class LinkedUSMapComponent implements OnInit {
  private mapFile;
  private sData;
  private pData;
  private stateDetails;
  private width: any;
  private height: any;
  private zoom = 4.35;
  private centered = null;
  private state = null;
  private mapX: number;
  private mapY: number;
  private scale: any;
  private svg;
  private tiles;
  private tile;
  private background;
  private mapGroup;
  private states;
  private places;
  private mercator: any;
  private albers: any;
  private mouse: any = { x: 0, y: 0 };
  private mapDetails;

  public showToolTip = false;
  public toolTitle: string;
  public toolValues: any[] = [];
  public tooltipPositionX;
  public tooltipPositionY;

  @Output()
  resetEvent = new EventEmitter<any>();
  @Output()
  tooltipEvent = new EventEmitter<any>();
  @Output()
  tooltipHide = new EventEmitter<any>();

  constructor(private mapService: MapService, private quoteService: ChartConfigService) {}

  ngOnInit() {
    this.quoteService.newQuoteSubject.subscribe(data => {
      this.mapDetails = data;
      this.stateDetails = this.mapService.mapStateData(data);
      const stateDetail: any = [];
      this.stateDetails.forEach((d, i) => {
        if (d.key !== 'Unknown') {
          stateDetail.push(d);
        }
      });
      this.stateDetails = stateDetail;
    });

    this.mapService.getMapData().subscribe(res => {
      this.mapFile = res;
      this.setMapDrawElements();
    });
  }

  private setMapDrawElements() {
    this.sData = topojson.feature(this.mapFile, this.mapFile.objects.states).features;
    this.pData = topojson.feature(this.mapFile, this.mapFile.objects.places).features;
    this.initMouse(this);
    this.resize();
  }

  private initMouse(parent) {
    const mouseMoves = fromEvent(document, 'mousemove').pipe(throttleTime(200));
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      parent.mouse.x = (evt.clientX || evt.pageX) + (document.body.scrollLeft || document.documentElement.scrollLeft);
      parent.mouse.y = (evt.clientY || evt.pageY) + (document.body.scrollTop || document.documentElement.scrollTop);
      // console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    });
  }

  private resize() {
    this.clearMap();
    this.width = 1600;
    this.height = 800;

    this.mapX = this.width / 2;
    this.mapY = this.height / 2;
    this.scale = Math.max(this.width, this.height);

    this.albers = d3
      .geoAlbers()
      .scale(this.scale - 70)
      .translate([this.mapX, this.mapY])
      .precision(0.1);

    this.mercator = d3
      .geoMercator()
      .center([-96, 38.3])
      .scale(this.scale)
      .translate([this.mapX, this.mapY]);

    this.tile = d3GeoTile().size([this.width, this.height]);

    this.setPath(this.mercator);
    this.drawSVG();
    this.drawStates(this, this.mercator);
  }

  private clearMap() {
    // console.log("clearChart usa map");
    d3.select('#us-map .chart')
      .select('svg')
      .remove();
  }

  // returns path descriptions based on supplied map projection (albers, mercator)
  private setPath(projection) {
    const path = d3
      .geoPath()
      .projection(projection)
      .pointRadius(2);
    return path;
  }

  // create svg elements for the map
  private drawSVG() {
    const svg = d3
      .select('#us-map .chart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    const tiles = svg
      .append('g')
      .attr('id', 'tiles')
      .attr('opacity', 0);

    const background = svg
      .append('rect')
      .attr('class', 'background')
      .attr('width', this.width + 20)
      .attr('height', this.height + 20)
      .attr('opacity', 1);

    const mapGroup = svg
      .append('g')
      .attr('id', 'mapGroup')
      .attr('opacity', 0);

    const states = mapGroup.append('g').attr('id', 'states');

    const places = mapGroup.append('g').attr('id', 'places');

    this.svg = svg;
    this.tiles = tiles;
    this.background = background;
    this.mapGroup = mapGroup;
    this.states = states;
    this.places = places;
  }

  private drawStates(parent, mercator) {
    let stateData = this.sData;
    const qLen = this.mapDetails.length;
    const qStates = this.stateDetails;
    const stateArr = [];
    stateData = stateData.sort(function(a, b) {
      if (a.properties.state < b.properties.state) {
        return -1;
      }
      if (a.properties.state > b.properties.state) {
        return 1;
      }
      return 0;
    });

    stateData.forEach((v, i) => {
      const s = qStates.filter(function(d) {
        return d.key === v.properties.state;
      });
      if (s.length) {
        const newVal = 'Number of Quotes';
        const numQuotes = s[0].value[newVal];
        const percent = Math.round((numQuotes / qLen) * 100);
        stateArr.push(percent);
      }
    });

    stateArr.sort().reverse();
    const arr = stateArr.filter(function(elem, pos) {
      return stateArr.indexOf(elem) === pos;
    });
    this.states
      .selectAll('path')
      .data(stateData)
      .enter()
      .append('path')
      .each(function(d, i) {
        let c;
        let s = d.properties.state;
        let p = qStates.filter(function(d) {
          return d.key === s;
        });
        const state = p[0];
        // init states with values
        if (p.length) {
          const numQuotes = state.value['Number of Quotes'];
          const percent = Math.round((numQuotes / qLen) * 100);
          c = '#84e6b0';
        } else {
          c = '#c0f4d8';
        }
        d3.select(this)
          .attr('d', parent.setPath(mercator))
          .attr('class', function() {
            const quoted = p.length ? 'quoted' : '';
            return ('state ' + quoted) as any;
          })
          .attr('fill', c)
          .attr('stroke', '#387138')
          .attr('id', s)
          .on('click', function(d, i) {
            parent.stateClick(d, i, state, this);
          })
          .on('mousemove', function(e) {
            if (state) {
              // console.log('select-all values ', this.toolValues);
              parent.showTip = true;
              parent.tooltipPositionX = parent.mouse.x + 100;
              parent.tooltipPositionY = parent.mouse.y;
              parent.toolTitle = state.key;
              parent.toolValues = state.value;
            }
          })
          .on('mouseleave', function() {
            parent.showTip = false;
          });
      });

    this.states.selectAll('path').each(function(d, i) {
      const that = d3.select(this);
      const node = that.node();
      d.properties['zWidth'] = Math.ceil(node.getBoundingClientRect().width * parent.zoom);
      d.properties['zHeight'] = Math.ceil(node.getBoundingClientRect().height * parent.zoom);
    });
    parent.changeProjection(parent.albers, this);
  }

  // Zoom in/out when state with quotes is clicked
  private stateClick(d, i, hasQuote, parent) {
    $('#places').empty();
    this.hideTiles();

    if (d && this.centered !== d && hasQuote) {
      console.log('stateClick this.centered ', d, ' this ', this);
      this.changeProjection(this.mercator, this);

      const centroid = this.setPath(this.mercator).centroid(d);

      const w = d.properties.zWidth;
      const h = d.properties.zHeight;

      var x = centroid[0];
      var y = centroid[1];

      var zoom = this.zoom;

      this.centered = d;
      this.state = d.id;

      var state = d.id;
      var center = d;
      var map_x = this.mapX;
      var map_y = this.mapY;

      const perW = w / this.width;
      const perH = h / this.height;

      var diff: any = Math.max(perW, perH);

      if (diff > 1) {
        zoom = zoom / diff;
      } else {
        diff = 1 - diff;
        diff = parseFloat(1 + diff);
        zoom = zoom * diff;
      }
      // console.log("this.zoom ", zoom);
    } else {
      this.changeProjection(this.albers, this);
      x = this.mapX;
      y = this.mapY;
      zoom = 1;
      this.centered = null;
      this.state = null;
    }
    // console.log("this.centered ", this.centered);
    // Should return active classed states ??
    this.mapGroup.selectAll('path').classed(
      'active',
      this.centered &&
        function(e) {
          return e === center;
        }
    );

    this.mapGroup
      .transition()
      .duration(750)
      .attr('transform', 'translate(' + map_x + ',' + map_y + ')scale(' + zoom + ')translate(' + -x + ',' + -y + ')')
      .style('stroke-width', 2.5 / zoom + 'px')
      .attr('class', function() {
        return center && state ? 'centered' : '';
      })
      .on('end', () => {
        if (center && state) {
          this.drawCities(this, center, state);
          this.loadTiles(zoom, x, y, this);
          this.showTiles();
        }
      });
  }

  // for the selected state, find places in the map json that have quotes
  // in the csv and draw circles indication their location.
  // circle diameters are percentage of total quotes in state based.
  private drawCities(parent, centered, theState) {
    const data = this.pData,
      qStates = this.stateDetails;
    // array will store data for city points
    let cities = [];

    // get city data from topojson by selected state
    let pCities = data.filter(function(d) {
      return d.properties.stateid === theState;
    });

    // sort alphabetically
    pCities = pCities.sort(function(a, b) {
      if (a.properties.name < b.properties.name) {
        return -1;
      }
      if (a.properties.name > b.properties.name) {
        return 1;
      }
      return 0;
    });

    // nest quote data by State and City and rollup

    let qCities = d3
      .nest()
      .key(function(d) {
        return d['Prospect State'];
      })
      .key(function(d) {
        return d['Prospect City'];
      })
      .sortKeys(d3.ascending)
      .rollup(leaves => {
        return {
          'Number of Quotes': leaves.length,
          'Number of Quotes Sold': d3.sum(leaves, function(d) {
            return d['Number of Quotes Sold'];
          }),
          'Total Premium Quoted': d3.sum(leaves, function(d) {
            return d['Total Premium Quoted'];
          }),
          'Total Premium Sold': d3.sum(leaves, function(d) {
            return d['Total Premium Sold'];
          })
        } as any;
      })
      .entries(this.mapDetails);

    // filter quote data by selected state
    qCities = qCities.filter(function(d) {
      return d.key === centered.properties.state;
    });

    // drill down to cities in selected state
    qCities = qCities[0].values;

    // build cities array w/ cities that have quotes
    // add values (quote data) object to each city

    for (let i = 0; i < qCities.length; i++) {
      const key = qCities[i].key;
      for (let j = 0; j < pCities.length; j++) {
        const city = pCities[j].properties.name;
        if (city.toUpperCase() === key.toUpperCase()) {
          pCities[j].values = {};
          pCities[j].values = qCities[i].value;
          cities.push(pCities[j]);
        }
      }
    }

    // //get the total number of quotes in selected state
    qStates.pop('qStates ', qStates);
    let qTotal = qStates.filter(function(d) {
      return d.key === centered.properties.state;
    });
    setTimeout(() => {
      qTotal = qTotal[0].value['Number of Quotes'];
      cities = cities.sort(function(a, b) {
        return b.values['Number of Quotes'] - a.values['Number of Quotes'];
      });

      parent.places
        .selectAll('.place')
        .data(cities)
        .enter()
        .append('circle')
        .each(function(d: any, i) {
          let radius;
          const cName = d.properties.name;
          const mercCoords = parent.mercator(d.geometry.coordinates);
          const coord1 = mercCoords[0].toFixed(2);
          const coord2 = mercCoords[1].toFixed(2);
          const quotes = d.values['Number of Quotes'];
          const percent = Math.ceil((quotes / qTotal) * 100) * 2;

          radius = percent > 10 ? 10 : percent;

          const geo = d;
          const newPar = parent;

          d3.select(this)
            .attr('class', 'place')
            .attr('r', 0)
            .attr('fill', 'rgba(15,20,170,0.4')
            .attr('transform', function() {
              return 'translate(' + parent.mercator(geo.geometry.coordinates) + ')';
            })
            .transition()
            .duration(1000)
            .attr('r', radius);
        });
    }, 400);
  }

  // changes map projection (albers vs mercator)
  private changeProjection(projection, parent) {
    let n = 0;
    this.states
      .selectAll('path')
      .each(function() {
        n++;
      })
      .transition()
      .duration(0)
      .attr('d', this.setPath(projection))
      .on('end', function(d, i) {
        n--;
        if (n === 0) {
          parent.mapGroup.attr('opacity', 1);
        }
      });
  }

  // array of colors for the map
  public color() {
    let colors = [];
    colors = ['#eff3ff', '#c6dbef', '#9ecae1', '#6baed6', '#3182bd', '#08519c'];
    colors.reverse();
    return colors;
  }

  // Make map tiles visible
  private showTiles() {
    this.tiles
      .transition()
      .duration(250)
      .attr('opacity', 1.0);
  }

  // Hide map tiles
  private hideTiles() {
    this.tiles.attr('opacity', 0);
  }

  // Get appropriate tiles from mapbox and insert them into tiles layer
  private loadTiles(zoom, x, y, parent) {
    console.log('loadTiles  ', parent);

    let scale = this.mercator.scale();
    let long = this.mercator.center()[0],
      lat = this.mercator.center()[1];

    let projection = d3
      .geoMercator()
      .scale(scale)
      .translate([this.mapX, this.mapY]);

    let center = projection([long, lat]);
    const x1 = center[0];
    const y1 = center[1];

    let x2 = this.mapX - x,
      y2 = this.mapY - y;

    x2 = x1 - x2;
    y2 = y1 - y2;

    center = projection.invert([x2, y2]);
    long = center[0];
    lat = center[1];

    scale = scale * zoom;

    projection = d3
      .geoMercator()
      .scale(scale)
      .translate([this.mapX, this.mapY]);

    center = projection([long, lat]);
    x = center[0];
    y = center[1];
    const zScale = scale * 2 * Math.PI;
    const zTranslate = [this.width - x, this.height - y];

    const tiles = parent.tile.scale(zScale).translate(zTranslate)();

    const image = this.tiles
      .attr('transform', 'scale(' + tiles.scale + ')translate(' + tiles.translate + ')')
      .selectAll('image')
      .data(tiles, function(d) {
        return d;
      });

    image.exit().remove();

    image
      .enter()
      .append('image')
      .attr('xlink:href', function(d) {
        // console.log("xlink - href ", d[2]);
        // console.log("path ", "http://" + ["a", "b", "c", "d"][Math.random() * 4 | 0]
        //   + ".tiles.mapbox.com/v3/x2gboye.jhe1npi6/"
        //   + d[2] + "/" + d[0] + "/" + d[1]
        //   + ".png?access_token=pk.eyJ1IjoidG9tYy1zIiwiYSI6ImNqYXZrZDJoMjBldzQyd25nYzBtZmhxN3UifQ.VOtF64YHkki1372CAQ30ug");

        return (
          'http://' +
          ['a', 'b', 'c', 'd'][(Math.random() * 4) | 0] +
          '.tiles.mapbox.com/v3/x2gboye.jhe1npi6/' +
          d[2] +
          '/' +
          d[0] +
          '/' +
          d[1] +
          '.png?access_token=pk.eyJ1IjoidG9tYy1zIiwiYSI6ImNqYXZrZDJoMjBldzQyd25nYzBtZmhxN3UifQ.VOtF64YHkki1372CAQ30ug'
        );
      })
      .attr('width', 1)
      .attr('height', 1)
      .attr('x', function(d) {
        return d[0];
      })
      .attr('y', function(d) {
        return d[1];
      });
  }
}
