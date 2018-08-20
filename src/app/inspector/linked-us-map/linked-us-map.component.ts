import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import * as d3GeoTile from '../../../assets/d3.geo.tile';
import * as topojson from 'topojson';
import * as $ from 'jquery';
import { ChartConfigService } from '../services/chart-config.service';
import { MapService } from '../services/map.service';

@Component({
    selector: 'linked-map',
    templateUrl: './linked-us-map.component.html',
    styleUrls: ['./linked-us-map.component.scss'],
    providers: [MapService],
})
export class LinkedUSMapComponent implements OnInit {
    private mapFile;
    private sData;
    private pData;
    private stateDetails;

    private width: any;
    private height: any;

    private zoom = 5.35;
    private centered = null;
    private state = null;
    private mapX: number;
    private mapY: number;
    private scale: any;
    private svg;
    private tiles;
    private background;
    private mapGroup;
    private states;
    private places;
    private mercator: any;
    private albers: any;
    private mouse: any = { x: 0, y: 0 };
    private mapDetails;
    public filteredMapData;

    constructor(private mapService: MapService, private quoteService: ChartConfigService) {}

    ngOnInit() {
        // updates details filter
        this.quoteService.newQuoteSubject.subscribe(data => {
            this.mapDetails = data;
            console.log('map data ', data);
            this.stateDetails = this.quoteService.mapStateData(data);
            const stateDetail: any = [];
            this.stateDetails.forEach((d, i) => {
                if (d.key !== 'Unknown') {
                    stateDetail.push(d);
                }
            });
            this.stateDetails = stateDetail;
            console.log('map stateDetails ', this.stateDetails);
        });

        // this.quoteService.getCsvData().subscribe(res => {
        //   this.mapDetails = res;
        //   this.stateDetails = this.quoteService.mapStateData(res);
        //   const stateDetail: any = [];
        //   this.stateDetails.forEach((d, i) => {
        //     if (d.key !== 'Unknown') {
        //       stateDetail.push(d);
        //     }
        //   });
        //   this.stateDetails = stateDetail;
        //   // onsole.log("map stateDetails ", this.stateDetails);
        // });

        this.mapService.getMapData().subscribe(res => {
            this.mapFile = res;
            console.log('map shape data ', this.mapFile);
            this.setMapDrawElements();
        });
    }

    private setMapDrawElements() {
        this.sData = topojson.feature(this.mapFile, this.mapFile.objects.states).features;
        this.pData = topojson.feature(this.mapFile, this.mapFile.objects.places).features;
        // console.log("sData ", this.sData);
        // console.log("pData ", this.pData);
        this.initMouse(this);
        this.initTip(this);
        this.resize();
        // console.log("map shape sData ", this.sData);
        // console.log("map shape pData ", this.pData);
    }

    private initMouse(parent) {
        parent.mouse.x = 0;
        document.addEventListener(
            'mousemove',
            function(e) {
                parent.mouse.x =
                    (e.clientX || e.pageX) +
                    (document.body.scrollLeft || document.documentElement.scrollLeft);
                parent.mouse.y =
                    (e.clientY || e.pageY) +
                    (document.body.scrollTop || document.documentElement.scrollTop);
                // console.log("mouse.x ", parent.mouse.x);
            },
            false,
        );
    }

    private resize = function() {
        this.clearMap();
        this.width = $(window).width() - 330;
        // this.height = $(window).height() - 180;
        this.height = 800;

        this.mapX = this.width / 2;
        this.mapY = this.height / 2;
        this.scale = Math.max(this.width, this.height);
        // console.log("scale ", this.scale);
        // console.log("Size W ", this.width);
        // console.log("Size H ", this.height);

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
    };

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
            .attr('opacity', 0);

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

        // console.log("self.svg ", this.svg);
        // console.log("this.tiles ", this.tiles);
        // console.log("self.mapGroup ", this.mapGroup);
        // console.log("this.states ", this.states);
        // console.log("this.places ", this.places);
        console.log('self.background ', this.background);
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
                // console.log("numQuotes ", s);
                // console.log("typeof 2[0] ", typeof(s));
                const newVal = 'Number of Quotes';
                const numQuotes = s[0].value[newVal];
                // console.log("typeof numQuotes ", typeof(numQuotes));
                // console.log("numQuotes ", numQuotes);
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
                    .attr('stroke', '#47b187')
                    .attr('id', s)
                    .on('click', function(d, i) {
                        // console.log("state ", state);
                        parent.stateClick(d, i, state, this);
                    })
                    .on('mousemove', function(e) {
                        if (state) {
                            parent.selectArea(state.key, state.value, this, parent);
                        }
                    })
                    .on('mouseleave', function() {
                        parent.deselectArea();
                    });
            });

        this.states.selectAll('path').each(function(d, i) {
            let that = d3.select(this);
            let node = that.node();
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
            this.changeProjection(this.mercator, this);

            var centroid = this.setPath(this.mercator).centroid(d);

            var w = d.properties.zWidth;
            var h = d.properties.zHeight;

            var x = centroid[0];
            var y = centroid[1];

            var zoom = this.zoom;

            this.centered = d;
            this.state = d.id;

            var state = d.id;
            var center = d;
            var map_x = this.mapX;
            var map_y = this.mapY;

            var perW = w / this.width;
            var perH = h / this.height;

            var diff: any = Math.max(perW, perH);

            //console.log("perW ", perW);
            //console.log("perH ", perH);
            //console.log("diff ", diff);

            if (diff > 1) {
                zoom = zoom / diff;
            } else {
                diff = 1 - diff;
                diff = parseFloat(1 + diff);
                zoom = zoom * diff;
            }
            //console.log("this.zoom ", zoom);
        } else {
            this.changeProjection(this.albers, this);
            x = this.mapX;
            y = this.mapY;
            zoom = 1;
            this.centered = null;
            this.state = null;
        }
        //console.log("this.centered ", this.centered);
        // Should return active classed states ??
        this.mapGroup.selectAll('path').classed(
            'active',
            this.centered &&
                function(d) {
                    return d === center;
                },
        );

        this.mapGroup
            .transition()
            .duration(750)
            .attr(
                'transform',
                'translate(' +
                    map_x +
                    ',' +
                    map_y +
                    ')scale(' +
                    zoom +
                    ')translate(' +
                    -x +
                    ',' +
                    -y +
                    ')',
            )
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
                    }),
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
            // console.log("d ", d);
            return d.key === centered.properties.state;
        });
        setTimeout(() => {
            qTotal = qTotal[0].value['Number of Quotes'];
            cities = cities.sort(function(a, b) {
                return b.values['Number of Quotes'] - a.values['Number of Quotes'];
            });

            // console.log("cities ", cities);
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
                    // console.log("quotes ", quotes);

                    radius = percent > 10 ? 10 : percent;

                    const geo = d;
                    const newPar = parent;

                    d3.select(this)
                        .attr('class', 'place')
                        .attr('r', 0)
                        .attr('fill', 'rgba(15,20,170,0.3')
                        .attr('transform', function(d: any) {
                            return 'translate(' + parent.mercator(geo.geometry.coordinates) + ')';
                        })
                        .on('mousemove', function(d, i) {
                            parent.selectArea(geo.properties.name, geo.values, this, parent);
                        })
                        .transition()
                        .duration(1000)
                        .attr('r', radius);

                    // d3.select(this).append("text")
                    //   .attr("color", "black")
                    //   .attr("font-size",25)
                    //   // .attr('transform', function (d: any) {
                    //   //   return "translate(" + parent.mercator( geo.geometry.coordinates) + ")";
                    //   // })
                    //   .text("Hello");

                    // console.log("cName ", cName, " coord1 ", coord1, " coord2 ", coord2, " this ", this);
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
                    // console.log("parent.mapGroup ", parent.mapGroup);
                    parent.mapGroup.attr('opacity', 1);
                }
            });
    }

    // show tip on state or city hover
    private selectArea(stateKey, values, hoverNode, parent) {
        const node: any = $(hoverNode),
            css = node.attr('class');
        if (css.indexOf('active') > -1) {
            parent.hideTip();
        } else {
            parent.showTip(parent.mouse.x, parent.mouse.y, stateKey, values);
        }
    }

    // add html for holding rollover tip data
    private initTip(parent) {
        let chartTip = '<div class="chart-tip" id="chartTip"><table>';
        chartTip += '<thead><tr><th class="key" colspan="2"></th></tr></thead>';
        chartTip += '<tbody></tbody>';
        chartTip += '</table></div>';
        $('body').prepend(chartTip);
    }

    // update tip position and data
    private showTip(left, top, stateValues, values) {
        const tip = $('#chartTip'),
            keyTD = tip.find('.key'),
            valueTD = tip.find('.value'),
            moneyFormat = function(n, currency) {
                return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            },
            isTotal = function(key) {
                return key.indexOf('Total') !== -1;
            };
        // console.log("stateValues ", stateValues);
        keyTD.text(stateValues);
        valueTD.text(values.total);

        tip.find('tbody').empty();
        for (let i = 0; i < d3.keys(values).length; i++) {
            const key: any = d3.keys(values)[i],
                value = isTotal(key) ? moneyFormat(values[key], '$') : values[key];
            tip.find('tbody').append(
                '<tr><td>' + key + '</td><td class="text-right">' + value + '</td></tr>',
            );
        }

        const tipW = tip.width() + 30,
            tipH = tip.outerHeight(),
            winW = $(window).width(),
            winH = $(window).height(),
            wDiff = Math.ceil(winW - tipW),
            hDiff = Math.ceil(winH - tipH);

        if (Math.ceil(top - tipH) > 0) {
            top = top - tipH;
        }

        if (Math.ceil(left) >= wDiff) {
            left = left - tipW + 10;
        } else {
            left = left + 30;
        }

        tip.css({
            top: top + 'px',
            left: left + 'px',
        });

        tip.show();
    }

    // hide tip
    private deselectArea() {
        this.hideTip();
    }

    // hide the tip
    private hideTip() {
        const tip = $('#chartTip');
        tip.hide();
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

    // Get apppriate tiles from mapbox and insert them into tiles layer
    private loadTiles(zoom, x, y, parent) {
        let scale = this.mercator.scale();
        let long = this.mercator.center()[0],
            lat = this.mercator.center()[1];

        console.log('scale ', scale);

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

        console.log('Second scale ', scale);

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

// "http://" + ["a", "b", "c", "d"][Math.random() * 4 | 0]
// + ".tiles.mapbox.com/v3/x2gboye.jhe1npi6/"
// + d[2] + "/" + d[0] + "/" + d[1]
// + ".png?access_token=pk.eyJ1IjoieDJnYm95ZSIsImEiOiI1WXMtdDZVIn0.QUv1GWRAPHytz96Pdac4nw");
