import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import { ParentalService } from '../services/ptree.service';

// (d3 as any).tip = d3Tip;

@Component({
  selector: 'app-worldmap-locator',
  templateUrl: './worldmap-locator.component.html',
  styleUrls: ['./worldmap-locator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorldmapLocatorComponent implements OnInit {
  private GEO_CITIES = '../../../assets/data-collections/geonames_cities100000.csv';
  private GEO_COUNTRIES = '../../../assets/data-collections/world-110m.v1.json';
  private GEO_COUNTRY_NAMES = '../../../assets/data-collections/world-110m-country-names.tsv';
  private detailRows = [];
  private container = {
    width: 1600,
    height: 800
  };
  private rScale;
  private xColumn = 'longitude';
  private yColumn = 'latitude';
  private rColumn = 'population';
  private peoplePerPixel = 5000;
  private projection;
  private margin = { top: 30, right: 0, bottom: 0, left: 0 };
  private mapX = this.container.width / 2;
  private mapY = this.container.height / 2;
  private scale = Math.max(this.container.width, this.container.height);
  private svg;
  private toolTip;
  private path;
  private graticule;
  private popBreakpoint = [1000000, 2000000, 5000000];
  public openPopSelect = false;
  public activePopulation = 2;
  private color = d3.schemeCategory10;
  private cityDefs;

  constructor(private parentalService: ParentalService) {}

  ngOnInit() {
    this.parentalService.globalTreeSubject.subscribe(data => {
      this.setSubjectData(data);
    });
    this.initWorldChart();
  }

  setPopulationBreakpoint(index) {
    this.activePopulation = index;
    this.openPopSelect = false;
    this.callRenderCircles(this);
  }

  setSubjectData(res) {
    this.detailRows = res;
    console.log('setSubjectData this.detailRows ', this.detailRows[0]);
  }

  parseTreeData() {
    this.detailRows.forEach((d, i) => {});
  }

  // Set up projection config

  initWorldChart() {
    const parent = this;

    this.projection = d3
      .geoMercator()
      .center([0, 0])
      .scale(250)
      .translate([this.mapX, this.mapY]);

    this.path = d3.geoPath().projection(this.projection);
    this.graticule = d3.geoGraticule();

    this.svg = d3
      .select('#world-body')
      .append('svg')
      .attr('width', this.container.width - this.margin.left - this.margin.right)
      .attr('height', this.container.height + this.margin.top + this.margin.bottom);

    // svg
    //   .append('defs')
    //   .append('path')
    //   .datum({ type: 'Sphere' })
    //   .attr('id', 'sphere')
    //   .attr('d', path);

    this.svg
      .append('use')
      .attr('class', 'stroke')
      .attr('href', '#sphere');

    this.svg
      .append('use')
      .attr('class', 'fill')
      .attr('href', '#sphere');

    this.svg
      .append('path')
      .datum(this.graticule)
      .attr('class', 'graticule')
      .attr('d', this.path);

    this.renderWorld(parent);
  }

  // Render world projection

  renderWorld(parent) {
    const promises = [];
    promises.push(d3.json(this.GEO_COUNTRIES), d3.tsv(this.GEO_COUNTRY_NAMES));

    Promise.all(promises).then(values => {
      const world = values[0];
      const countryNames = values[1];
      const countries = topojson.feature(world, world.objects.countries).features;

      parent.toolTip = d3Tip();
      parent.toolTip
        .attr('class', 'd3-tip')
        .offset([-40, 0])
        .html(function(d) {
          //  console.log('tip d ', d);
          return d.name;
        });

      parent.svg.call(parent.toolTip);

      parent.svg
        .selectAll('.country')
        .data(countries)
        .enter()
        .insert('path', '.graticule')
        .attr('class', 'country')
        .attr('d', parent.path)
        .style('stroke', 'white')
        .style('stroke-width', 1)
        .style('opacity', 0.8)
        .on('mouseover', function(d) {
          countryNames.filter(f => {
            if (d.id === f.id) {
              //  console.log('tip d ', f.name);
              parent.toolTip.show(f, this);
            }
          });
          d3.select(this)
            .style('opacity', 1)
            .style('stroke', 'white')
            .style('stroke-width', 3);
        })
        .on('mouseout', function(d) {
          parent.toolTip.hide(d, this);

          d3.select(this)
            .style('opacity', 0.8)
            .style('stroke', 'white')
            .style('stroke-width', 1);
        });

      const populationFormat = d3.format(',');

      function type(d) {
        d.latitude = +d.latitude;
        d.longitude = +d.longitude;
        d.population = +d.population;
        return d;
      }

      d3.csv(parent.GEO_CITIES).then(d => {
        this.cityDefs = d;
        this.callRenderCircles(parent);

        // type(d);
        // parent.renderCircles(d, parent);
      });

      parent.rScale = d3.scaleSqrt();
    });
  }

  callRenderCircles(parent) {
    // console.log('callRenderCircles ', this.cityDefs);
    type(this.cityDefs);

    function type(d) {
      d.latitude = +d.latitude;
      d.longitude = +d.longitude;
      d.population = +d.population;
      return d;
    }

    this.renderCircles(parent);
  }

  // Render sub- world elements
  renderCircles(parent) {
    console.log('renderCircles ', this.detailRows);
    // console.log('renderCircles ', this.popBreakpoint[this.activePopulation]);
    {
      const tempPop = this.popBreakpoint[this.activePopulation];
      const fData = this.cityDefs.filter(function(d) {
        // if (d.name === 'Bellevue') {
        // }
        return d.population > tempPop || d.name === 'Bellevue';
      });

      this.detailRows.forEach((d, i) => {
        console.log(getCity(d));
      });

      function getCity(d) {
        fData.filter((el, index, a) => {
          //  console.log(d.extra[0]);
          return d.extra[1] === el.name;
        });
      }

      //  console.log('fData ', fData);
      parent.rScale.domain([
        0,
        d3.max(fData, function(d) {
          return d[parent.rColumn];
        })
      ]);
      // Compute the size of the biggest circle as a function of peoplePerPixel.
      const peopleMax = parent.rScale.domain()[1];
      const rMin = 0;
      const rMax = Math.sqrt(peopleMax / (parent.peoplePerPixel * Math.PI));
      parent.rScale.range([rMin, rMax]);

      const circles = parent.svg.selectAll('circle').data(fData);
      circles
        .enter()
        .append('svg:circle')
        .attr('cx', function(d) {
          return parent.projection([d[parent.xColumn], d[parent.yColumn]])[0];
        })
        .attr('cy', function(d) {
          return parent.projection([d[parent.xColumn], d[parent.yColumn]])[1];
        })
        .attr('r', function(d) {
          return parent.rScale(d[parent.rColumn]);
        })
        .on('mouseover', function(d) {
          parent.toolTip.show(d);
        })
        .on('mouseout', function(d) {
          parent.toolTip.hide(d);
        });
      circles.exit().remove();
    }
  }

  zoomed() {
    // container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); // not in d3 v4
    // container.style("stroke-width", 1.5 / d3.event.transform.k + "px");
    // this.container.attr('transform', d3.event.transform); // updated for d3 v4
  }
}
