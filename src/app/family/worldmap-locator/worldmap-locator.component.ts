import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as topojson from 'topojson';
import * as $ from 'jquery';
import * as d3 from 'd3';
import * as d3Projection from 'd3-geo-projection';
import d3Tip from 'd3-tip';

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

  private container;
  private rScale;
  private xColumn;
  private yColumn;
  private rColumn;
  private peoplePerPixel;
  private parent;
  private projection;
  private margin = { top: 30, right: 0, bottom: 0, left: 0 };
  private mapX: number;
  private mapY: number;
  private scale: number;

  constructor() {}

  ngOnInit() {
    console.log();
    const parent = this;
    const promises = [];
    const color = d3.schemeCategory10;
    this.xColumn = 'longitude';
    this.yColumn = 'latitude';
    this.rColumn = 'population';
    this.peoplePerPixel = 9000;

    this.container = {
      width: 1600,
      height: 800
    };
    this.scale = Math.max(this.container.width, this.container.height);
    this.mapX = this.container.width / 2;
    this.mapY = this.container.height / 2;

    this.projection = d3
      .geoMercator()
      .center([0, 0])
      .scale(250)
      .translate([this.mapX, this.mapY]);

    const path = d3.geoPath().projection(this.projection);

    const graticule = d3.geoGraticule();

    const svg = d3
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

    svg
      .append('use')
      .attr('class', 'stroke')
      .attr('href', '#sphere');

    svg
      .append('use')
      .attr('class', 'fill')
      .attr('href', '#sphere');

    svg
      .append('path')
      .datum(graticule)
      .attr('class', 'graticule')
      .attr('d', path);

    promises.push(d3.json(this.GEO_COUNTRIES), d3.tsv(this.GEO_COUNTRY_NAMES));

    Promise.all(promises).then(function(values) {
      const world = values[0];
      const countryNames = values[1];

      const countries = topojson.feature(world, world.objects.countries).features;

      const tip = d3Tip();
      tip
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          //  console.log('tip d ', d);
          return d.name;
        });

      svg.call(tip);

      svg
        .selectAll('.country')
        .data(countries)
        .enter()
        .insert('path', '.graticule')
        .attr('class', 'country')
        .attr('d', path)
        .style('stroke', 'white')
        .style('stroke-width', 1)
        .style('opacity', 0.8)
        .on('mouseover', function(d) {
          countryNames.filter(f => {
            if (d.id === f.id) {
              console.log('tip d ', f.name);
              tip.show(f, this);
            }
          });
          d3.select(this)
            .style('opacity', 1)
            .style('stroke', 'white')
            .style('stroke-width', 3);
        })
        .on('mouseout', function(d) {
          tip.hide(d, this);

          d3.select(this)
            .style('opacity', 0.8)
            .style('stroke', 'white')
            .style('stroke-width', 1);
        });

      const populationFormat = d3.format(',');

      d3.csv(parent.GEO_CITIES).then(d => {
        type(d);
        render(d, parent);
      });

      function type(d) {
        d.latitude = +d.latitude;
        d.longitude = +d.longitude;
        d.population = +d.population;
        return d;
      }

      parent.rScale = d3.scaleSqrt();

      function render(data, parent) {
        const fData = data.filter(function(d) {
          if (d.name === 'Bellevue') {
            // console.log('d.name ', d);
          }
          return d.population > 1000000 || d.name === 'Bellevue';
        });

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

        const circles = svg.selectAll('circle').data(fData);
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
            tip.show(d);
          })
          .on('mouseout', function(d) {
            tip.hide(d);
          });
        circles.exit().remove();
      }
    });
  }

  zoomed() {
    // container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); // not in d3 v4
    // container.style("stroke-width", 1.5 / d3.event.transform.k + "px");
    this.container.attr('transform', d3.event.transform); // updated for d3 v4
  }
}
