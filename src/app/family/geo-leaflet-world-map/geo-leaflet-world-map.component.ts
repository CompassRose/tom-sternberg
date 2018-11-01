import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';
import * as d3GeoTile from '../../../assets/d3.geo.tile';
import { timeFormat } from 'd3-time-format';
import * as topojson from 'topojson';

import * as statesData from '../../../assets/data-collections/us-states';
import * as L from 'leaflet';
// import * as geoJson from 'geojson';

import { MapService } from '../services/map.service';

@Component({
  selector: 'north-america-map',
  templateUrl: './geo-leaflet-world-map.component.html',
  styleUrls: ['./geo-leaflet-world-map.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MapService]
})
export class GeoLeafletMapComponent implements OnInit {
  private svg;
  private mymap;
  private statesData: any = statesData.statesData;
  private geojson;
  private baseLayer;
  private MAPBOX_URL =
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidG9tYy1zIiwiYSI6ImNqYXZrZDJoMjBldzQyd25nYzBtZmhxN3UifQ.VOtF64YHkki1372CAQ30ug';

  constructor(private mapService: MapService) {}

  ngOnInit() {
    const southWest = L.latLng(-90, -180);
    const northEast = L.latLng(90, 180);
    this.baseLayer = {};
    this.baseLayer = L.tileLayer(this.MAPBOX_URL, {
      attribution:
        'Map data &copy; ' +
        '<a href="http://openstreetmap.org">OpenStreetMap</a>contributors,' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 7,
      minZoom: 2,
      maxBounds: L.latLngBounds(southWest, northEast),
      maxBoundsViscosity: 1.0,
      noWrap: true,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoidG9tYy1zIiwiYSI6ImNqYXZrZDJoMjBldzQyd25nYzBtZmhxN3UifQ.VOtF64YHkki1372CAQ30ug'
    });

    this.mymap = {};
    this.mymap = L.map('leaf-map').setView([51.505, -0.09], 3);
    this.setStates();
  }

  setStates() {
    this.geojson = L.geoJSON(this.statesData, {
      style: this.style,
      onEachFeature: this.onEachFeature
    });
    this.baseLayer.addTo(this.mymap);
    this.geojson.addTo(this.mymap);
  }

  onEachFeature(feature, layer) {
    layer.on({
      mouseover: function(d) {
        const list =
          '<dl><dt>State:</dt>' +
          '<dd>' +
          feature.properties.name +
          '</dd>' +
          '<dt>Population Density</dt>' +
          '<dd>' +
          feature.properties.density +
          '</dd>';
        layer.bindPopup(list);

        layer.setStyle({
          weight: 1,
          dashArray: '',
          fillOpacity: 0.65
        });
      },
      mouseout: function(d) {
        layer.setStyle({
          weight: 2,
          opacity: 1,
          dashArray: '3',
          fillOpacity: 0.4
        });
      }
    });
  }

  style(feature) {
    const densityValue = feature.properties.density;
    let polyColor: string;

    if (densityValue > 500) {
      polyColor = '#BD0026';
    } else if (densityValue > 200) {
      polyColor = '#E31A1C';
    } else if (densityValue > 100) {
      polyColor = '#FC4E2A';
    } else if (densityValue > 50) {
      polyColor = '#FD8D3C';
    } else if (densityValue > 20) {
      polyColor = '#FEB24C';
    } else if (densityValue > 10) {
      polyColor = '#FED976';
    } else {
      polyColor = '#FFEDA0';
    }

    return {
      fillColor: polyColor,
      weight: 2,
      opacity: 1,
      color: '#5F9EA0',
      dashArray: '3',
      fillOpacity: 0.4
    };
  }

  private resetHighlight(e) {
    // geoJson.resetStyle(e.target);
  }

  private zoomToFeature(e) {
    this.mymap.fitBounds(e.target.getBounds());
  }

  private clearMap() {
    console.log('clearChart n-a map');
    d3.select('#na-map .chart')
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
}
