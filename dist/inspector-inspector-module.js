(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inspector-inspector-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/BehaviorSubject.js ***!
  \***********************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]; });


//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/do.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/do.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/do */ "./node_modules/rxjs-compat/_esm5/operator/do.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.do = _operator_do__WEBPACK_IMPORTED_MODULE_1__["_do"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._do = _operator_do__WEBPACK_IMPORTED_MODULE_1__["_do"];
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/do.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/do.js ***!
  \*******************************************************/
/*! exports provided: _do */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_do", function() { return _do; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function _do(nextOrObserver, error, complete) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(nextOrObserver, error, complete)(this);
}
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/topojson/index.js":
/*!****************************************!*\
  !*** ./node_modules/topojson/index.js ***!
  \****************************************/
/*! exports provided: bbox, feature, mesh, meshArcs, merge, mergeArcs, neighbors, quantize, transform, untransform, topology, filter, filterAttached, filterAttachedWeight, filterWeight, planarRingArea, planarTriangleArea, presimplify, quantile, simplify, sphericalRingArea, sphericalTriangleArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson/node_modules/topojson-client/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["bbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["feature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["mesh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["meshArcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["mergeArcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["neighbors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["quantize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["transform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["untransform"]; });

/* harmony import */ var topojson_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! topojson-server */ "./node_modules/topojson/node_modules/topojson-server/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topology", function() { return topojson_server__WEBPACK_IMPORTED_MODULE_1__["topology"]; });

/* harmony import */ var topojson_simplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! topojson-simplify */ "./node_modules/topojson/node_modules/topojson-simplify/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAttached", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["filterAttached"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAttachedWeight", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["filterAttachedWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterWeight", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["filterWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarRingArea", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["planarRingArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarTriangleArea", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["planarTriangleArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presimplify", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["presimplify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["quantile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["simplify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphericalRingArea", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["sphericalRingArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphericalTriangleArea", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["sphericalTriangleArea"]; });






/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/index.js ***!
  \*********************************************************************/
/*! exports provided: bbox, feature, mesh, meshArcs, merge, mergeArcs, neighbors, quantize, transform, untransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/bbox */ "./node_modules/topojson/node_modules/topojson-client/src/bbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return _src_bbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/feature */ "./node_modules/topojson/node_modules/topojson-client/src/feature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return _src_feature__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/mesh */ "./node_modules/topojson/node_modules/topojson-client/src/mesh.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return _src_mesh__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return _src_mesh__WEBPACK_IMPORTED_MODULE_2__["meshArcs"]; });

/* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/merge */ "./node_modules/topojson/node_modules/topojson-client/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_3__["mergeArcs"]; });

/* harmony import */ var _src_neighbors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/neighbors */ "./node_modules/topojson/node_modules/topojson-client/src/neighbors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return _src_neighbors__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/topojson/node_modules/topojson-client/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/transform */ "./node_modules/topojson/node_modules/topojson-client/src/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _src_transform__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_untransform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/untransform */ "./node_modules/topojson/node_modules/topojson-client/src/untransform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return _src_untransform__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/bbox.js":
/*!************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/bbox.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ "./node_modules/topojson/node_modules/topojson-client/src/transform.js");


/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var t = Object(_transform__WEBPACK_IMPORTED_MODULE_0__["default"])(topology.transform), key,
      x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

  function bboxPoint(p) {
    p = t(p);
    if (p[0] < x0) x0 = p[0];
    if (p[0] > x1) x1 = p[0];
    if (p[1] < y0) y0 = p[1];
    if (p[1] > y1) y1 = p[1];
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  topology.arcs.forEach(function(arc) {
    var i = -1, n = arc.length, p;
    while (++i < n) {
      p = t(arc[i], i);
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }
  });

  for (key in topology.objects) {
    bboxGeometry(topology.objects[key]);
  }

  return [x0, y0, x1, y1];
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/bisect.js":
/*!**************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/bisect.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/feature.js":
/*!***************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/feature.js ***!
  \***************************************************************************/
/*! exports provided: default, feature, object */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverse */ "./node_modules/topojson/node_modules/topojson-client/src/reverse.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ "./node_modules/topojson/node_modules/topojson-client/src/transform.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature(topology, o); })}
      : feature(topology, o);
});

function feature(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) Object(_reverse__WEBPACK_IMPORTED_MODULE_0__["default"])(points, n);
  }

  function point(p) {
    return transformPoint(p);
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/identity.js":
/*!****************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/identity.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/merge.js":
/*!*************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/merge.js ***!
  \*************************************************************************/
/*! exports provided: default, mergeArcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return mergeArcs; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/topojson/node_modules/topojson-client/src/feature.js");
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stitch */ "./node_modules/topojson/node_modules/topojson-client/src/stitch.js");



function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area); // Note: doubled area!
}

/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  return Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, mergeArcs.apply(this, arguments));
});

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      groups = [];

  objects.forEach(geometry);

  function geometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "Polygon": extract(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(extract); break;
    }
  }

  function extract(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring) {
    return planarRingArea(Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [],
          neighbors = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = Object(_stitch__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    })
  };
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/mesh.js":
/*!************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/mesh.js ***!
  \************************************************************************/
/*! exports provided: default, meshArcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return meshArcs; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/topojson/node_modules/topojson-client/src/feature.js");
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stitch */ "./node_modules/topojson/node_modules/topojson-client/src/stitch.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  return Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, meshArcs.apply(this, arguments));
});

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: Object(_stitch__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/neighbors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/neighbors.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ "./node_modules/topojson/node_modules/topojson-client/src/bisect.js");


/* harmony default export */ __webpack_exports__["default"] = (function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = Object(_bisect__WEBPACK_IMPORTED_MODULE_0__["default"])(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = Object(_bisect__WEBPACK_IMPORTED_MODULE_0__["default"])(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/quantize.js":
/*!****************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/quantize.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ "./node_modules/topojson/node_modules/topojson-client/src/bbox.js");
/* harmony import */ var _untransform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./untransform */ "./node_modules/topojson/node_modules/topojson-client/src/untransform.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology, transform) {
  if (topology.transform) throw new Error("already quantized");

  if (!transform || !transform.scale) {
    if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
    box = topology.bbox || Object(_bbox__WEBPACK_IMPORTED_MODULE_0__["default"])(topology);
    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};
  } else {
    box = topology.bbox;
  }

  var t = Object(_untransform__WEBPACK_IMPORTED_MODULE_1__["default"])(transform), box, key, inputs = topology.objects, outputs = {};

  function quantizePoint(point) {
    return t(point);
  }

  function quantizeGeometry(input) {
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
      case "MultiPoint": output = {type: "MultiPoint", coordinates: input.coordinates.map(quantizePoint)}; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function quantizeArc(input) {
    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
    output[0] = t(input[0], 0);
    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points
    output.length = j;
    return output;
  }

  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);

  return {
    type: "Topology",
    bbox: box,
    transform: transform,
    objects: outputs,
    arcs: topology.arcs.map(quantizeArc)
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/reverse.js":
/*!***************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/reverse.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/stitch.js":
/*!**************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/stitch.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/transform.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/transform.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/topojson/node_modules/topojson-client/src/identity.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transform) {
  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__["default"];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/untransform.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-client/src/untransform.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/topojson/node_modules/topojson-client/src/identity.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transform) {
  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__["default"];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2,
        n = input.length,
        output = new Array(n),
        x1 = Math.round((input[0] - dx) / kx),
        y1 = Math.round((input[1] - dy) / ky);
    output[0] = x1 - x0, x0 = x1;
    output[1] = y1 - y0, y0 = y1;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/index.js ***!
  \*********************************************************************/
/*! exports provided: topology */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/topology */ "./node_modules/topojson/node_modules/topojson-server/src/topology.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topology", function() { return _src_topology__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/bounds.js":
/*!**************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/bounds.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the bounding box of the specified hash of GeoJSON objects.
/* harmony default export */ __webpack_exports__["default"] = (function(objects) {
  var x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  function boundGeometry(geometry) {
    if (geometry != null && boundGeometryType.hasOwnProperty(geometry.type)) boundGeometryType[geometry.type](geometry);
  }

  var boundGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(boundGeometry); },
    Point: function(o) { boundPoint(o.coordinates); },
    MultiPoint: function(o) { o.coordinates.forEach(boundPoint); },
    LineString: function(o) { boundLine(o.arcs); },
    MultiLineString: function(o) { o.arcs.forEach(boundLine); },
    Polygon: function(o) { o.arcs.forEach(boundLine); },
    MultiPolygon: function(o) { o.arcs.forEach(boundMultiLine); }
  };

  function boundPoint(coordinates) {
    var x = coordinates[0],
        y = coordinates[1];
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  function boundLine(coordinates) {
    coordinates.forEach(boundPoint);
  }

  function boundMultiLine(coordinates) {
    coordinates.forEach(boundLine);
  }

  for (var key in objects) {
    boundGeometry(objects[key]);
  }

  return x1 >= x0 && y1 >= y0 ? [x0, y0, x1, y1] : undefined;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/cut.js":
/*!***********************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/cut.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./join */ "./node_modules/topojson/node_modules/topojson-server/src/join.js");


// Given an extracted (pre-)topology, cuts (or rotates) arcs so that all shared
// point sequences are identified. The topology can then be subsequently deduped
// to remove exact duplicate arcs.
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var junctions = Object(_join__WEBPACK_IMPORTED_MODULE_0__["default"])(topology),
      coordinates = topology.coordinates,
      lines = topology.lines,
      rings = topology.rings,
      next,
      i, n;

  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i],
        lineMid = line[0],
        lineEnd = line[1];
    while (++lineMid < lineEnd) {
      if (junctions.has(coordinates[lineMid])) {
        next = {0: lineMid, 1: line[1]};
        line[1] = lineMid;
        line = line.next = next;
      }
    }
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i],
        ringStart = ring[0],
        ringMid = ringStart,
        ringEnd = ring[1],
        ringFixed = junctions.has(coordinates[ringStart]);
    while (++ringMid < ringEnd) {
      if (junctions.has(coordinates[ringMid])) {
        if (ringFixed) {
          next = {0: ringMid, 1: ring[1]};
          ring[1] = ringMid;
          ring = ring.next = next;
        } else { // For the first junction, we can rotate rather than cut.
          rotateArray(coordinates, ringStart, ringEnd, ringEnd - ringMid);
          coordinates[ringEnd] = coordinates[ringStart];
          ringFixed = true;
          ringMid = ringStart; // restart; we may have skipped junctions
        }
      }
    }
  }

  return topology;
});

function rotateArray(array, start, end, offset) {
  reverse(array, start, end);
  reverse(array, start, start + offset);
  reverse(array, start + offset, end);
}

function reverse(array, start, end) {
  for (var mid = start + ((end-- - start) >> 1), t; start < mid; ++start, --end) {
    t = array[start], array[start] = array[end], array[end] = t;
  }
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/dedup.js":
/*!*************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/dedup.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hash_hashmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hash/hashmap */ "./node_modules/topojson/node_modules/topojson-server/src/hash/hashmap.js");
/* harmony import */ var _hash_point_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hash/point-equal */ "./node_modules/topojson/node_modules/topojson-server/src/hash/point-equal.js");
/* harmony import */ var _hash_point_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hash/point-hash */ "./node_modules/topojson/node_modules/topojson-server/src/hash/point-hash.js");




// Given a cut topology, combines duplicate arcs.
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var coordinates = topology.coordinates,
      lines = topology.lines, line,
      rings = topology.rings, ring,
      arcCount = lines.length + rings.length,
      i, n;

  delete topology.lines;
  delete topology.rings;

  // Count the number of (non-unique) arcs to initialize the hashmap safely.
  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i]; while (line = line.next) ++arcCount;
  }
  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i]; while (ring = ring.next) ++arcCount;
  }

  var arcsByEnd = Object(_hash_hashmap__WEBPACK_IMPORTED_MODULE_0__["default"])(arcCount * 2 * 1.4, _hash_point_hash__WEBPACK_IMPORTED_MODULE_2__["default"], _hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"]),
      arcs = topology.arcs = [];

  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i];
    do {
      dedupLine(line);
    } while (line = line.next);
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i];
    if (ring.next) { // arc is no longer closed
      do {
        dedupLine(ring);
      } while (ring = ring.next);
    } else {
      dedupRing(ring);
    }
  }

  function dedupLine(arc) {
    var startPoint,
        endPoint,
        startArcs, startArc,
        endArcs, endArc,
        i, n;

    // Does this arc match an existing arc in order?
    if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) {
      for (i = 0, n = startArcs.length; i < n; ++i) {
        startArc = startArcs[i];
        if (equalLine(startArc, arc)) {
          arc[0] = startArc[0];
          arc[1] = startArc[1];
          return;
        }
      }
    }

    // Does this arc match an existing arc in reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (reverseEqualLine(endArc, arc)) {
          arc[1] = endArc[0];
          arc[0] = endArc[1];
          return;
        }
      }
    }

    if (startArcs) startArcs.push(arc); else arcsByEnd.set(startPoint, [arc]);
    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }

  function dedupRing(arc) {
    var endPoint,
        endArcs,
        endArc,
        i, n;

    // Does this arc match an existing line in order, or reverse order?
    // Rings are closed, so their start point and end point is the same.
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }

    // Otherwise, does this arc match an existing ring in order, or reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }

    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }

  function equalLine(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, ++ib) if (!Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[ia], coordinates[ib])) return false;
    return true;
  }

  function reverseEqualLine(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, --jb) if (!Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[ia], coordinates[jb])) return false;
    return true;
  }

  function equalRing(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    var ka = findMinimumOffset(arcA),
        kb = findMinimumOffset(arcB);
    for (var i = 0; i < n; ++i) {
      if (!Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[ia + (i + ka) % n], coordinates[ib + (i + kb) % n])) return false;
    }
    return true;
  }

  function reverseEqualRing(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    var ka = findMinimumOffset(arcA),
        kb = n - findMinimumOffset(arcB);
    for (var i = 0; i < n; ++i) {
      if (!Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[ia + (i + ka) % n], coordinates[jb - (i + kb) % n])) return false;
    }
    return true;
  }

  // Rings are rotated to a consistent, but arbitrary, start point.
  // This is necessary to detect when a ring and a rotated copy are dupes.
  function findMinimumOffset(arc) {
    var start = arc[0],
        end = arc[1],
        mid = start,
        minimum = mid,
        minimumPoint = coordinates[mid];
    while (++mid < end) {
      var point = coordinates[mid];
      if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
        minimum = mid;
        minimumPoint = point;
      }
    }
    return minimum - start;
  }

  return topology;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/delta.js":
/*!*************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/delta.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Given an array of arcs in absolute (but already quantized!) coordinates,
// converts to fixed-point delta encoding.
// This is a destructive operation that modifies the given arcs!
/* harmony default export */ __webpack_exports__["default"] = (function(arcs) {
  var i = -1,
      n = arcs.length;

  while (++i < n) {
    var arc = arcs[i],
        j = 0,
        k = 1,
        m = arc.length,
        point = arc[0],
        x0 = point[0],
        y0 = point[1],
        x1,
        y1;

    while (++j < m) {
      point = arc[j], x1 = point[0], y1 = point[1];
      if (x1 !== x0 || y1 !== y0) arc[k++] = [x1 - x0, y1 - y0], x0 = x1, y0 = y1;
    }

    if (k === 1) arc[k++] = [0, 0]; // Each arc must be an array of two or more positions.

    arc.length = k;
  }

  return arcs;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/extract.js":
/*!***************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/extract.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Extracts the lines and rings from the specified hash of geometry objects.
//
// Returns an object with three properties:
//
// * coordinates - shared buffer of [x, y] coordinates
// * lines - lines extracted from the hash, of the form [start, end]
// * rings - rings extracted from the hash, of the form [start, end]
//
// For each ring or line, start and end represent inclusive indexes into the
// coordinates buffer. For rings (and closed lines), coordinates[start] equals
// coordinates[end].
//
// For each line or polygon geometry in the input hash, including nested
// geometries as in geometry collections, the `coordinates` array is replaced
// with an equivalent `arcs` array that, for each line (for line string
// geometries) or ring (for polygon geometries), points to one of the above
// lines or rings.
/* harmony default export */ __webpack_exports__["default"] = (function(objects) {
  var index = -1,
      lines = [],
      rings = [],
      coordinates = [];

  function extractGeometry(geometry) {
    if (geometry && extractGeometryType.hasOwnProperty(geometry.type)) extractGeometryType[geometry.type](geometry);
  }

  var extractGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(extractGeometry); },
    LineString: function(o) { o.arcs = extractLine(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(extractLine); },
    Polygon: function(o) { o.arcs = o.arcs.map(extractRing); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(extractMultiRing); }
  };

  function extractLine(line) {
    for (var i = 0, n = line.length; i < n; ++i) coordinates[++index] = line[i];
    var arc = {0: index - n + 1, 1: index};
    lines.push(arc);
    return arc;
  }

  function extractRing(ring) {
    for (var i = 0, n = ring.length; i < n; ++i) coordinates[++index] = ring[i];
    var arc = {0: index - n + 1, 1: index};
    rings.push(arc);
    return arc;
  }

  function extractMultiRing(rings) {
    return rings.map(extractRing);
  }

  for (var key in objects) {
    extractGeometry(objects[key]);
  }

  return {
    type: "Topology",
    coordinates: coordinates,
    lines: lines,
    rings: rings,
    objects: objects
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/geometry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/geometry.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Given a hash of GeoJSON objects, returns a hash of GeoJSON geometry objects.
// Any null input geometry objects are represented as {type: null} in the output.
// Any feature.{id,properties,bbox} are transferred to the output geometry object.
// Each output geometry object is a shallow copy of the input (e.g., properties, coordinates)!
/* harmony default export */ __webpack_exports__["default"] = (function(inputs) {
  var outputs = {}, key;
  for (key in inputs) outputs[key] = geomifyObject(inputs[key]);
  return outputs;
});

function geomifyObject(input) {
  return input == null ? {type: null}
      : (input.type === "FeatureCollection" ? geomifyFeatureCollection
      : input.type === "Feature" ? geomifyFeature
      : geomifyGeometry)(input);
}

function geomifyFeatureCollection(input) {
  var output = {type: "GeometryCollection", geometries: input.features.map(geomifyFeature)};
  if (input.bbox != null) output.bbox = input.bbox;
  return output;
}

function geomifyFeature(input) {
  var output = geomifyGeometry(input.geometry), key; // eslint-disable-line no-unused-vars
  if (input.id != null) output.id = input.id;
  if (input.bbox != null) output.bbox = input.bbox;
  for (key in input.properties) { output.properties = input.properties; break; }
  return output;
}

function geomifyGeometry(input) {
  if (input == null) return {type: null};
  var output = input.type === "GeometryCollection" ? {type: "GeometryCollection", geometries: input.geometries.map(geomifyGeometry)}
      : input.type === "Point" || input.type === "MultiPoint" ? {type: input.type, coordinates: input.coordinates}
      : {type: input.type, arcs: input.coordinates}; // TODO Check for unknown types?
  if (input.bbox != null) output.bbox = input.bbox;
  return output;
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/hash/hashmap.js":
/*!********************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/hash/hashmap.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(size, hash, equal, keyType, keyEmpty, valueType) {
  if (arguments.length === 3) {
    keyType = valueType = Array;
    keyEmpty = null;
  }

  var keystore = new keyType(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
      valstore = new valueType(size),
      mask = size - 1;

  for (var i = 0; i < size; ++i) {
    keystore[i] = keyEmpty;
  }

  function set(key, value) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index] = value;
      if (++collisions >= size) throw new Error("full hashmap");
      matchKey = keystore[index = (index + 1) & mask];
    }
    keystore[index] = key;
    valstore[index] = value;
    return value;
  }

  function maybeSet(key, value) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index];
      if (++collisions >= size) throw new Error("full hashmap");
      matchKey = keystore[index = (index + 1) & mask];
    }
    keystore[index] = key;
    valstore[index] = value;
    return value;
  }

  function get(key, missingValue) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index];
      if (++collisions >= size) break;
      matchKey = keystore[index = (index + 1) & mask];
    }
    return missingValue;
  }

  function keys() {
    var keys = [];
    for (var i = 0, n = keystore.length; i < n; ++i) {
      var matchKey = keystore[i];
      if (matchKey != keyEmpty) keys.push(matchKey);
    }
    return keys;
  }

  return {
    set: set,
    maybeSet: maybeSet, // set if unset
    get: get,
    keys: keys
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/hash/hashset.js":
/*!********************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/hash/hashset.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(size, hash, equal, type, empty) {
  if (arguments.length === 3) {
    type = Array;
    empty = null;
  }

  var store = new type(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
      mask = size - 1;

  for (var i = 0; i < size; ++i) {
    store[i] = empty;
  }

  function add(value) {
    var index = hash(value) & mask,
        match = store[index],
        collisions = 0;
    while (match != empty) {
      if (equal(match, value)) return true;
      if (++collisions >= size) throw new Error("full hashset");
      match = store[index = (index + 1) & mask];
    }
    store[index] = value;
    return true;
  }

  function has(value) {
    var index = hash(value) & mask,
        match = store[index],
        collisions = 0;
    while (match != empty) {
      if (equal(match, value)) return true;
      if (++collisions >= size) break;
      match = store[index = (index + 1) & mask];
    }
    return false;
  }

  function values() {
    var values = [];
    for (var i = 0, n = store.length; i < n; ++i) {
      var match = store[i];
      if (match != empty) values.push(match);
    }
    return values;
  }

  return {
    add: add,
    has: has,
    values: values
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/hash/point-equal.js":
/*!************************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/hash/point-equal.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(pointA, pointB) {
  return pointA[0] === pointB[0] && pointA[1] === pointB[1];
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/hash/point-hash.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/hash/point-hash.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TODO if quantized, use simpler Int32 hashing?

var buffer = new ArrayBuffer(16),
    floats = new Float64Array(buffer),
    uints = new Uint32Array(buffer);

/* harmony default export */ __webpack_exports__["default"] = (function(point) {
  floats[0] = point[0];
  floats[1] = point[1];
  var hash = uints[0] ^ uints[1];
  hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
  return hash & 0x7fffffff;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/join.js":
/*!************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/join.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hash_hashset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hash/hashset */ "./node_modules/topojson/node_modules/topojson-server/src/hash/hashset.js");
/* harmony import */ var _hash_hashmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hash/hashmap */ "./node_modules/topojson/node_modules/topojson-server/src/hash/hashmap.js");
/* harmony import */ var _hash_point_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hash/point-equal */ "./node_modules/topojson/node_modules/topojson-server/src/hash/point-equal.js");
/* harmony import */ var _hash_point_hash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hash/point-hash */ "./node_modules/topojson/node_modules/topojson-server/src/hash/point-hash.js");





// Given an extracted (pre-)topology, identifies all of the junctions. These are
// the points at which arcs (lines or rings) will need to be cut so that each
// arc is represented uniquely.
//
// A junction is a point where at least one arc deviates from another arc going
// through the same point. For example, consider the point B. If there is a arc
// through ABC and another arc through CBA, then B is not a junction because in
// both cases the adjacent point pairs are {A,C}. However, if there is an
// additional arc ABD, then {A,D} != {A,C}, and thus B becomes a junction.
//
// For a closed ring ABCA, the first point A’s adjacent points are the second
// and last point {B,C}. For a line, the first and last point are always
// considered junctions, even if the line is closed; this ensures that a closed
// line is never rotated.
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var coordinates = topology.coordinates,
      lines = topology.lines,
      rings = topology.rings,
      indexes = index(),
      visitedByIndex = new Int32Array(coordinates.length),
      leftByIndex = new Int32Array(coordinates.length),
      rightByIndex = new Int32Array(coordinates.length),
      junctionByIndex = new Int8Array(coordinates.length),
      junctionCount = 0, // upper bound on number of junctions
      i, n,
      previousIndex,
      currentIndex,
      nextIndex;

  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = leftByIndex[i] = rightByIndex[i] = -1;
  }

  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i],
        lineStart = line[0],
        lineEnd = line[1];
    currentIndex = indexes[lineStart];
    nextIndex = indexes[++lineStart];
    ++junctionCount, junctionByIndex[currentIndex] = 1; // start
    while (++lineStart <= lineEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[lineStart]);
    }
    ++junctionCount, junctionByIndex[nextIndex] = 1; // end
  }

  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = -1;
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i],
        ringStart = ring[0] + 1,
        ringEnd = ring[1];
    previousIndex = indexes[ringEnd - 1];
    currentIndex = indexes[ringStart - 1];
    nextIndex = indexes[ringStart];
    sequence(i, previousIndex, currentIndex, nextIndex);
    while (++ringStart <= ringEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[ringStart]);
    }
  }

  function sequence(i, previousIndex, currentIndex, nextIndex) {
    if (visitedByIndex[currentIndex] === i) return; // ignore self-intersection
    visitedByIndex[currentIndex] = i;
    var leftIndex = leftByIndex[currentIndex];
    if (leftIndex >= 0) {
      var rightIndex = rightByIndex[currentIndex];
      if ((leftIndex !== previousIndex || rightIndex !== nextIndex)
        && (leftIndex !== nextIndex || rightIndex !== previousIndex)) {
        ++junctionCount, junctionByIndex[currentIndex] = 1;
      }
    } else {
      leftByIndex[currentIndex] = previousIndex;
      rightByIndex[currentIndex] = nextIndex;
    }
  }

  function index() {
    var indexByPoint = Object(_hash_hashmap__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates.length * 1.4, hashIndex, equalIndex, Int32Array, -1, Int32Array),
        indexes = new Int32Array(coordinates.length);

    for (var i = 0, n = coordinates.length; i < n; ++i) {
      indexes[i] = indexByPoint.maybeSet(i, i);
    }

    return indexes;
  }

  function hashIndex(i) {
    return Object(_hash_point_hash__WEBPACK_IMPORTED_MODULE_3__["default"])(coordinates[i]);
  }

  function equalIndex(i, j) {
    return Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(coordinates[i], coordinates[j]);
  }

  visitedByIndex = leftByIndex = rightByIndex = null;

  var junctionByPoint = Object(_hash_hashset__WEBPACK_IMPORTED_MODULE_0__["default"])(junctionCount * 1.4, _hash_point_hash__WEBPACK_IMPORTED_MODULE_3__["default"], _hash_point_equal__WEBPACK_IMPORTED_MODULE_2__["default"]), j;

  // Convert back to a standard hashset by point for caller convenience.
  for (i = 0, n = coordinates.length; i < n; ++i) {
    if (junctionByIndex[j = indexes[i]]) {
      junctionByPoint.add(coordinates[j]);
    }
  }

  return junctionByPoint;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/prequantize.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/prequantize.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(objects, bbox, n) {
  var x0 = bbox[0],
      y0 = bbox[1],
      x1 = bbox[2],
      y1 = bbox[3],
      kx = x1 - x0 ? (n - 1) / (x1 - x0) : 1,
      ky = y1 - y0 ? (n - 1) / (y1 - y0) : 1;

  function quantizePoint(input) {
    return [Math.round((input[0] - x0) * kx), Math.round((input[1] - y0) * ky)];
  }

  function quantizePoints(input, m) {
    var i = -1,
        j = 0,
        n = input.length,
        output = new Array(n), // pessimistic
        pi,
        px,
        py,
        x,
        y;

    while (++i < n) {
      pi = input[i];
      x = Math.round((pi[0] - x0) * kx);
      y = Math.round((pi[1] - y0) * ky);
      if (x !== px || y !== py) output[j++] = [px = x, py = y]; // non-coincident points
    }

    output.length = j;
    while (j < m) j = output.push([output[0][0], output[0][1]]);
    return output;
  }

  function quantizeLine(input) {
    return quantizePoints(input, 2);
  }

  function quantizeRing(input) {
    return quantizePoints(input, 4);
  }

  function quantizePolygon(input) {
    return input.map(quantizeRing);
  }

  function quantizeGeometry(o) {
    if (o != null && quantizeGeometryType.hasOwnProperty(o.type)) quantizeGeometryType[o.type](o);
  }

  var quantizeGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(quantizeGeometry); },
    Point: function(o) { o.coordinates = quantizePoint(o.coordinates); },
    MultiPoint: function(o) { o.coordinates = o.coordinates.map(quantizePoint); },
    LineString: function(o) { o.arcs = quantizeLine(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(quantizeLine); },
    Polygon: function(o) { o.arcs = quantizePolygon(o.arcs); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(quantizePolygon); }
  };

  for (var key in objects) {
    quantizeGeometry(objects[key]);
  }

  return {
    scale: [1 / kx, 1 / ky],
    translate: [x0, y0]
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-server/src/topology.js":
/*!****************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-server/src/topology.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounds */ "./node_modules/topojson/node_modules/topojson-server/src/bounds.js");
/* harmony import */ var _cut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cut */ "./node_modules/topojson/node_modules/topojson-server/src/cut.js");
/* harmony import */ var _dedup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dedup */ "./node_modules/topojson/node_modules/topojson-server/src/dedup.js");
/* harmony import */ var _delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delta */ "./node_modules/topojson/node_modules/topojson-server/src/delta.js");
/* harmony import */ var _extract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extract */ "./node_modules/topojson/node_modules/topojson-server/src/extract.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometry */ "./node_modules/topojson/node_modules/topojson-server/src/geometry.js");
/* harmony import */ var _hash_hashmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hash/hashmap */ "./node_modules/topojson/node_modules/topojson-server/src/hash/hashmap.js");
/* harmony import */ var _prequantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prequantize */ "./node_modules/topojson/node_modules/topojson-server/src/prequantize.js");









// Constructs the TopoJSON Topology for the specified hash of features.
// Each object in the specified hash must be a GeoJSON object,
// meaning FeatureCollection, a Feature or a geometry object.
/* harmony default export */ __webpack_exports__["default"] = (function(objects, quantization) {
  var bbox = Object(_bounds__WEBPACK_IMPORTED_MODULE_0__["default"])(objects = Object(_geometry__WEBPACK_IMPORTED_MODULE_5__["default"])(objects)),
      transform = quantization > 0 && bbox && Object(_prequantize__WEBPACK_IMPORTED_MODULE_7__["default"])(objects, bbox, quantization),
      topology = Object(_dedup__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_cut__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_extract__WEBPACK_IMPORTED_MODULE_4__["default"])(objects))),
      coordinates = topology.coordinates,
      indexByArc = Object(_hash_hashmap__WEBPACK_IMPORTED_MODULE_6__["default"])(topology.arcs.length * 1.4, hashArc, equalArc);

  objects = topology.objects; // for garbage collection
  topology.bbox = bbox;
  topology.arcs = topology.arcs.map(function(arc, i) {
    indexByArc.set(arc, i);
    return coordinates.slice(arc[0], arc[1] + 1);
  });

  delete topology.coordinates;
  coordinates = null;

  function indexGeometry(geometry) {
    if (geometry && indexGeometryType.hasOwnProperty(geometry.type)) indexGeometryType[geometry.type](geometry);
  }

  var indexGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(indexGeometry); },
    LineString: function(o) { o.arcs = indexArcs(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(indexArcs); },
    Polygon: function(o) { o.arcs = o.arcs.map(indexArcs); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(indexMultiArcs); }
  };

  function indexArcs(arc) {
    var indexes = [];
    do {
      var index = indexByArc.get(arc);
      indexes.push(arc[0] < arc[1] ? index : ~index);
    } while (arc = arc.next);
    return indexes;
  }

  function indexMultiArcs(arcs) {
    return arcs.map(indexArcs);
  }

  for (var key in objects) {
    indexGeometry(objects[key]);
  }

  if (transform) {
    topology.transform = transform;
    topology.arcs = Object(_delta__WEBPACK_IMPORTED_MODULE_3__["default"])(topology.arcs);
  }

  return topology;
});

function hashArc(arc) {
  var i = arc[0], j = arc[1], t;
  if (j < i) t = i, i = j, j = t;
  return i + 31 * j;
}

function equalArc(arcA, arcB) {
  var ia = arcA[0], ja = arcA[1],
      ib = arcB[0], jb = arcB[1], t;
  if (ja < ia) t = ia, ia = ja, ja = t;
  if (jb < ib) t = ib, ib = jb, jb = t;
  return ia === ib && ja === jb;
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/index.js ***!
  \***********************************************************************/
/*! exports provided: filter, filterAttached, filterAttachedWeight, filterWeight, planarRingArea, planarTriangleArea, presimplify, quantile, simplify, sphericalRingArea, sphericalTriangleArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/filter */ "./node_modules/topojson/node_modules/topojson-simplify/src/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _src_filter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_filterAttached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/filterAttached */ "./node_modules/topojson/node_modules/topojson-simplify/src/filterAttached.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAttached", function() { return _src_filterAttached__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_filterAttachedWeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/filterAttachedWeight */ "./node_modules/topojson/node_modules/topojson-simplify/src/filterAttachedWeight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAttachedWeight", function() { return _src_filterAttachedWeight__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_filterWeight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/filterWeight */ "./node_modules/topojson/node_modules/topojson-simplify/src/filterWeight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterWeight", function() { return _src_filterWeight__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_planar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/planar */ "./node_modules/topojson/node_modules/topojson-simplify/src/planar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarRingArea", function() { return _src_planar__WEBPACK_IMPORTED_MODULE_4__["planarRingArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarTriangleArea", function() { return _src_planar__WEBPACK_IMPORTED_MODULE_4__["planarTriangleArea"]; });

/* harmony import */ var _src_presimplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/presimplify */ "./node_modules/topojson/node_modules/topojson-simplify/src/presimplify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presimplify", function() { return _src_presimplify__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/quantile */ "./node_modules/topojson/node_modules/topojson-simplify/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _src_quantile__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_simplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/simplify */ "./node_modules/topojson/node_modules/topojson-simplify/src/simplify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return _src_simplify__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_spherical__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/spherical */ "./node_modules/topojson/node_modules/topojson-simplify/src/spherical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphericalRingArea", function() { return _src_spherical__WEBPACK_IMPORTED_MODULE_8__["sphericalRingArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphericalTriangleArea", function() { return _src_spherical__WEBPACK_IMPORTED_MODULE_8__["sphericalTriangleArea"]; });












/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/filter.js":
/*!****************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/filter.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prune */ "./node_modules/topojson/node_modules/topojson-simplify/src/prune.js");


/* harmony default export */ __webpack_exports__["default"] = (function(topology, filter) {
  var oldObjects = topology.objects,
      newObjects = {},
      key;

  if (filter == null) filter = filterTrue;

  function filterGeometry(input) {
    var output, arcs;
    switch (input.type) {
      case "Polygon": {
        arcs = filterRings(input.arcs);
        output = arcs ? {type: "Polygon", arcs: arcs} : {type: null};
        break;
      }
      case "MultiPolygon": {
        arcs = input.arcs.map(filterRings).filter(filterIdentity);
        output = arcs.length ? {type: "MultiPolygon", arcs: arcs} : {type: null};
        break;
      }
      case "GeometryCollection": {
        arcs = input.geometries.map(filterGeometry).filter(filterNotNull);
        output = arcs.length ? {type: "GeometryCollection", geometries: arcs} : {type: null};
        break;
      }
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function filterRings(arcs) {
    return arcs.length && filterExteriorRing(arcs[0]) // if the exterior is small, ignore any holes
        ? [arcs[0]].concat(arcs.slice(1).filter(filterInteriorRing))
        : null;
  }

  function filterExteriorRing(ring) {
    return filter(ring, false);
  }

  function filterInteriorRing(ring) {
    return filter(ring, true);
  }

  for (key in oldObjects) {
    newObjects[key] = filterGeometry(oldObjects[key]);
  }

  return Object(_prune__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "Topology",
    bbox: topology.bbox,
    transform: topology.transform,
    objects: newObjects,
    arcs: topology.arcs
  });
});

function filterTrue() {
  return true;
}

function filterIdentity(x) {
  return x;
}

function filterNotNull(geometry) {
  return geometry.type != null;
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/filterAttached.js":
/*!************************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/filterAttached.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var ownerByArc = new Array(topology.arcs.length), // arc index -> index of unique associated ring, or -1 if used by multiple rings
      ownerIndex = 0,
      key;

  function testGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(testGeometry); break;
      case "Polygon": testArcs(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(testArcs); break;
    }
  }

  function testArcs(arcs) {
    for (var i = 0, n = arcs.length; i < n; ++i, ++ownerIndex) {
      for (var ring = arcs[i], j = 0, m = ring.length; j < m; ++j) {
        var arc = ring[j];
        if (arc < 0) arc = ~arc;
        var owner = ownerByArc[arc];
        if (owner == null) ownerByArc[arc] = ownerIndex;
        else if (owner !== ownerIndex) ownerByArc[arc] = -1;
      }
    }
  }

  for (key in topology.objects) {
    testGeometry(topology.objects[key]);
  }

  return function(ring) {
    for (var j = 0, m = ring.length, arc; j < m; ++j) {
      if (ownerByArc[(arc = ring[j]) < 0 ? ~arc : arc] === -1) {
        return true;
      }
    }
    return false;
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/filterAttachedWeight.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/filterAttachedWeight.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterAttached__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterAttached */ "./node_modules/topojson/node_modules/topojson-simplify/src/filterAttached.js");
/* harmony import */ var _filterWeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterWeight */ "./node_modules/topojson/node_modules/topojson-simplify/src/filterWeight.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology, minWeight, weight) {
  var a = Object(_filterAttached__WEBPACK_IMPORTED_MODULE_0__["default"])(topology),
      w = Object(_filterWeight__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, minWeight, weight);
  return function(ring, interior) {
    return a(ring, interior) || w(ring, interior);
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/filterWeight.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/filterWeight.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson/node_modules/topojson-client/index.js");
/* harmony import */ var _planar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planar */ "./node_modules/topojson/node_modules/topojson-simplify/src/planar.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology, minWeight, weight) {
  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;

  if (weight == null) weight = _planar__WEBPACK_IMPORTED_MODULE_1__["planarRingArea"];

  return function(ring, interior) {
    return weight(Object(topojson_client__WEBPACK_IMPORTED_MODULE_0__["feature"])(topology, {type: "Polygon", arcs: [ring]}).geometry.coordinates[0], interior) >= minWeight;
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/heap.js":
/*!**************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/heap.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function compare(a, b) {
  return a[1][2] - b[1][2];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var heap = {},
      array = [],
      size = 0;

  heap.push = function(object) {
    up(array[object._ = size] = object, size++);
    return size;
  };

  heap.pop = function() {
    if (size <= 0) return;
    var removed = array[0], object;
    if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
    return removed;
  };

  heap.remove = function(removed) {
    var i = removed._, object;
    if (array[i] !== removed) return; // invalid request
    if (i !== --size) object = array[size], (compare(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
    return i;
  };

  function up(object, i) {
    while (i > 0) {
      var j = ((i + 1) >> 1) - 1,
          parent = array[j];
      if (compare(object, parent) >= 0) break;
      array[parent._ = i] = parent;
      array[object._ = i = j] = object;
    }
  }

  function down(object, i) {
    while (true) {
      var r = (i + 1) << 1,
          l = r - 1,
          j = i,
          child = array[j];
      if (l < size && compare(array[l], child) < 0) child = array[j = l];
      if (r < size && compare(array[r], child) < 0) child = array[j = r];
      if (j === i) break;
      array[child._ = i] = child;
      array[object._ = i = j] = object;
    }
  }

  return heap;
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/planar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/planar.js ***!
  \****************************************************************************/
/*! exports provided: planarTriangleArea, planarRingArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planarTriangleArea", function() { return planarTriangleArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planarRingArea", function() { return planarRingArea; });
function planarTriangleArea(triangle) {
  var a = triangle[0], b = triangle[1], c = triangle[2];
  return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1])) / 2;
}

function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area) / 2;
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/presimplify.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/presimplify.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson/node_modules/topojson-client/index.js");
/* harmony import */ var _heap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heap */ "./node_modules/topojson/node_modules/topojson-simplify/src/heap.js");
/* harmony import */ var _planar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planar */ "./node_modules/topojson/node_modules/topojson-simplify/src/planar.js");




function copy(point) {
  return [point[0], point[1], 0];
}

/* harmony default export */ __webpack_exports__["default"] = (function(topology, weight) {
  var point = topology.transform ? Object(topojson_client__WEBPACK_IMPORTED_MODULE_0__["transform"])(topology.transform) : copy,
      heap = Object(_heap__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (weight == null) weight = _planar__WEBPACK_IMPORTED_MODULE_2__["planarTriangleArea"];

  var arcs = topology.arcs.map(function(arc) {
    var triangles = [],
        maxWeight = 0,
        triangle,
        i,
        n;

    arc = arc.map(point);

    for (i = 1, n = arc.length - 1; i < n; ++i) {
      triangle = [arc[i - 1], arc[i], arc[i + 1]];
      triangle[1][2] = weight(triangle);
      triangles.push(triangle);
      heap.push(triangle);
    }

    // Always keep the arc endpoints!
    arc[0][2] = arc[n][2] = Infinity;

    for (i = 0, n = triangles.length; i < n; ++i) {
      triangle = triangles[i];
      triangle.previous = triangles[i - 1];
      triangle.next = triangles[i + 1];
    }

    while (triangle = heap.pop()) {
      var previous = triangle.previous,
          next = triangle.next;

      // If the weight of the current point is less than that of the previous
      // point to be eliminated, use the latter’s weight instead. This ensures
      // that the current point cannot be eliminated without eliminating
      // previously- eliminated points.
      if (triangle[1][2] < maxWeight) triangle[1][2] = maxWeight;
      else maxWeight = triangle[1][2];

      if (previous) {
        previous.next = next;
        previous[2] = triangle[2];
        update(previous);
      }

      if (next) {
        next.previous = previous;
        next[0] = triangle[0];
        update(next);
      }
    }

    return arc;
  });

  function update(triangle) {
    heap.remove(triangle);
    triangle[1][2] = weight(triangle);
    heap.push(triangle);
  }

  return {
    type: "Topology",
    bbox: topology.bbox,
    objects: topology.objects,
    arcs: arcs
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/prune.js":
/*!***************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/prune.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var oldObjects = topology.objects,
      newObjects = {},
      oldArcs = topology.arcs,
      oldArcsLength = oldArcs.length,
      oldIndex = -1,
      newIndexByOldIndex = new Array(oldArcsLength),
      newArcsLength = 0,
      newArcs,
      newIndex = -1,
      key;

  function scanGeometry(input) {
    switch (input.type) {
      case "GeometryCollection": input.geometries.forEach(scanGeometry); break;
      case "LineString": scanArcs(input.arcs); break;
      case "MultiLineString": input.arcs.forEach(scanArcs); break;
      case "Polygon": input.arcs.forEach(scanArcs); break;
      case "MultiPolygon": input.arcs.forEach(scanMultiArcs); break;
    }
  }

  function scanArc(index) {
    if (index < 0) index = ~index;
    if (!newIndexByOldIndex[index]) newIndexByOldIndex[index] = 1, ++newArcsLength;
  }

  function scanArcs(arcs) {
    arcs.forEach(scanArc);
  }

  function scanMultiArcs(arcs) {
    arcs.forEach(scanArcs);
  }

  function reindexGeometry(input) {
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(reindexGeometry)}; break;
      case "LineString": output = {type: "LineString", arcs: reindexArcs(input.arcs)}; break;
      case "MultiLineString": output = {type: "MultiLineString", arcs: input.arcs.map(reindexArcs)}; break;
      case "Polygon": output = {type: "Polygon", arcs: input.arcs.map(reindexArcs)}; break;
      case "MultiPolygon": output = {type: "MultiPolygon", arcs: input.arcs.map(reindexMultiArcs)}; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function reindexArc(oldIndex) {
    return oldIndex < 0 ? ~newIndexByOldIndex[~oldIndex] : newIndexByOldIndex[oldIndex];
  }

  function reindexArcs(arcs) {
    return arcs.map(reindexArc);
  }

  function reindexMultiArcs(arcs) {
    return arcs.map(reindexArcs);
  }

  for (key in oldObjects) {
    scanGeometry(oldObjects[key]);
  }

  newArcs = new Array(newArcsLength);

  while (++oldIndex < oldArcsLength) {
    if (newIndexByOldIndex[oldIndex]) {
      newIndexByOldIndex[oldIndex] = ++newIndex;
      newArcs[newIndex] = oldArcs[oldIndex];
    }
  }

  for (key in oldObjects) {
    newObjects[key] = reindexGeometry(oldObjects[key]);
  }

  return {
    type: "Topology",
    bbox: topology.bbox,
    transform: topology.transform,
    objects: newObjects,
    arcs: newArcs
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/quantile.js":
/*!******************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/quantile.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology, p) {
  var array = [];

  topology.arcs.forEach(function(arc) {
    arc.forEach(function(point) {
      if (isFinite(point[2])) { // Ignore endpoints, whose weight is Infinity.
        array.push(point[2]);
      }
    });
  });

  return array.length && quantile(array.sort(descending), p);
});

function quantile(array, p) {
  if (!(n = array.length)) return;
  if ((p = +p) <= 0 || n < 2) return array[0];
  if (p >= 1) return array[n - 1];
  var n,
      h = (n - 1) * p,
      i = Math.floor(h),
      a = array[i],
      b = array[i + 1];
  return a + (b - a) * (h - i);
}

function descending(a, b) {
  return b - a;
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/simplify.js":
/*!******************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/simplify.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology, minWeight) {
  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;

  // Remove points whose weight is less than the minimum weight.
  var arcs = topology.arcs.map(function(input) {
    var i = -1,
        j = 0,
        n = input.length,
        output = new Array(n), // pessimistic
        point;

    while (++i < n) {
      if ((point = input[i])[2] >= minWeight) {
        output[j++] = [point[0], point[1]];
      }
    }

    output.length = j;
    return output;
  });

  return {
    type: "Topology",
    transform: topology.transform,
    bbox: topology.bbox,
    objects: topology.objects,
    arcs: arcs
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/spherical.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/topojson/node_modules/topojson-simplify/src/spherical.js ***!
  \*******************************************************************************/
/*! exports provided: sphericalRingArea, sphericalTriangleArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sphericalRingArea", function() { return sphericalRingArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sphericalTriangleArea", function() { return sphericalTriangleArea; });
var pi = Math.PI,
    tau = 2 * pi,
    quarterPi = pi / 4,
    radians = pi / 180,
    abs = Math.abs,
    atan2 = Math.atan2,
    cos = Math.cos,
    sin = Math.sin;

function halfArea(ring, closed) {
  var i = 0,
      n = ring.length,
      sum = 0,
      point = ring[closed ? i++ : n - 1],
      lambda0, lambda1 = point[0] * radians,
      phi1 = (point[1] * radians) / 2 + quarterPi,
      cosPhi0, cosPhi1 = cos(phi1),
      sinPhi0, sinPhi1 = sin(phi1);

  for (; i < n; ++i) {
    point = ring[i];
    lambda0 = lambda1, lambda1 = point[0] * radians;
    phi1 = (point[1] * radians) / 2 + quarterPi;
    cosPhi0 = cosPhi1, cosPhi1 = cos(phi1);
    sinPhi0 = sinPhi1, sinPhi1 = sin(phi1);

    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    // See https://github.com/d3/d3-geo/blob/master/README.md#geoArea
    var dLambda = lambda1 - lambda0,
        sdLambda = dLambda >= 0 ? 1 : -1,
        adLambda = sdLambda * dLambda,
        k = sinPhi0 * sinPhi1,
        u = cosPhi0 * cosPhi1 + k * cos(adLambda),
        v = k * sdLambda * sin(adLambda);
    sum += atan2(v, u);
  }

  return sum;
}

function sphericalRingArea(ring, interior) {
  var sum = halfArea(ring, true);
  if (interior) sum *= -1;
  return (sum < 0 ? tau + sum : sum) * 2;
}

function sphericalTriangleArea(t) {
  return abs(halfArea(t, false)) * 2;
}


/***/ }),

/***/ "./src/app/inspector/details/details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/inspector/details/details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-backdrop mt-2\">\r\n  <a class=\"detail-row\" *ngFor=\"let row of detailRows | slice:0:100;\">\r\n    <div>{{row[\"Quote Date Created\"]}}</div>\r\n    <div>{{row[\"Sales Person\"]}}</div>\r\n    <div>{{row[\"Product\"]}}</div>\r\n    <div>${{row[\"Total Premium Sold\"]}}</div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/inspector/details/details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/inspector/details/details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n.detail-backdrop {\n  width: 100%;\n  background-color: white; }\n.detail-row {\n  width: 100%;\n  color: black;\n  display: flex;\n  text-align: left;\n  align-content: center;\n  justify-content: space-between;\n  padding: 5px;\n  border-bottom: 1px solid black; }\n.detail-row:hover {\n    background-color: rgba(255, 255, 0, 0.17); }\n"

/***/ }),

/***/ "./src/app/inspector/details/details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/inspector/details/details.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chart-config.service */ "./src/app/inspector/services/chart-config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(quoteService) {
        this.quoteService = quoteService;
        this.detailRows = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // updates details filter
        this.quoteService.newQuoteSubject.subscribe(function (data) {
            _this.detailRows = data;
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/inspector/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/inspector/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/inspector/drilldown/drilldown-common.scss":
/*!***********************************************************!*\
  !*** ./src/app/inspector/drilldown/drilldown-common.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/drilldown/drilldown.component.html":
/*!**************************************************************!*\
  !*** ./src/app/inspector/drilldown/drilldown.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"showTip\">\r\n  <app-custom-tooltip\r\n    [tiptitle]=\"toolTitle\"\r\n    [tipvalues]=\"toolValues\"\r\n    [tipPositionX]=\"tooltipPositionX\"\r\n    [tipPositionY]=\"tooltipPositionY\">\r\n  </app-custom-tooltip>\r\n</ng-container>\r\n<div class=\"row mt-2\">\r\n  <div *ngFor=\"let chart of allCharts; let $index = index;\"\r\n       [ngClass]=\"(chart.id=='timeline')?'col-md-8 mr-auto':'col-md-6 mr-auto'\">\r\n    <div class=\"panel shadow1 p-1\">\r\n      <div class=\"text-center display-sm p-1 f-weight-600 text-white\">{{chart.title }}</div>\r\n      <div id=\"{{chart.id}}\" class=\"widget shadow1\"\r\n           [ngClass]=\"tableActive ? 'scroller' : ''\">\r\n        <div class=\"chart\">\r\n          <app-bar-chart *ngIf=\"chart.chartType === 'bar'\"\r\n                         (resetEvent)=\"setCurrentChart($event, $index, chart.chartType)\"\r\n                         (tooltipEvent)=\"initToolEvent($event)\"\r\n                         (tooltipHide)=\"hideToolEvent($event)\"\r\n                         [attachNode]=\"chart.id\"\r\n                         [barData]=\"chart.data\"\r\n                         [totalVal]=\"chart.total\"\r\n                         [soldVal]=\"chart.sold\"\r\n                         [colorVal]=\"chart.color\"\r\n                         [isPremium]=\"chart.isPremium\">\r\n          </app-bar-chart>\r\n\r\n          <pie *ngIf=\"chart.chartType === 'pie'\"\r\n               (resetEvent)=\"setCurrentChart($event, $index, chart.chartType)\"\r\n               (tooltipEvent)=\"initToolEvent($event)\"\r\n               (tooltipHide)=\"hideToolEvent($event)\"\r\n               [attachNode]=\"chart.id\"\r\n               [pieData]=\"chart.data\"\r\n               [totalVal]=\"chart.total\"\r\n               [soldVal]=\"chart.sold\"\r\n               [isPremium]=\"chart.isPremium\">\r\n          </pie>\r\n          <app-line-chart *ngIf=\"chart.chartType === 'line'\"\r\n                          (resetEvent)=\"setCurrentChart($event, $index, chart.chartType)\"\r\n                          (tooltipEvent)=\"initToolEvent($event)\"\r\n                          (tooltipHide)=\"hideToolEvent($event)\"\r\n                          [attachNode]=\"chart.id\"\r\n                          [lineData]=\"chart.data\"\r\n                          [totalVal]=\"chart.total\"\r\n                          [soldVal]=\"chart.sold\"\r\n                          [colorVal]=\"chart.color\"\r\n                          [isPremium]=\"chart.isPremium\">\r\n          </app-line-chart>\r\n          <table-view *ngIf=\"chart.chartType === 'table'\"\r\n                      (resetEvent)=\"setCurrentChart($event, $index, chart.chartType)\"\r\n                      [attachNode]=\"chart.id\"\r\n                      [tableData]=\"chart.data\"\r\n                      [tableTitle]=\"chart.title\">\r\n          </table-view>\r\n          <single-combo *ngIf=\"chart.chartType === 'single'\"\r\n                        [attachNode]=\"chart.id\"\r\n                        [singleData]=\"chart.data\"\r\n                        [singleTitle]=\"chart.title\">\r\n          </single-combo>\r\n        </div>\r\n      </div>\r\n      <div class=\"controls\">\r\n        <div class=\"btn-group btn-group-sm mr-3\">\r\n          <button (click)=\"toggleTotalQuotes($index);\"\r\n                  type=\"button\"\r\n                  class=\"btn btn-indigo waves-light btn-sm\">\r\n            <i class=\"fa fa-comment-o\"></i>\r\n          </button>\r\n          <button (click)=\"toggleTotalPremium($index);\"\r\n                  type=\"button\"\r\n                  class=\"btn btn-indigo waves-light btn-sm\">\r\n            <i class=\"fa fa-usd\"></i>\r\n          </button>\r\n        </div>\r\n        <div class=\"btn-group btn-group-sm\">\r\n          <button type=\"button\" class=\"btn btn-indigo waves-light btn-sm  {{chart.id}}\"\r\n                  (click)=\"setChartType($index, 'bar', true)\"><i class=\"fa fa-bar-chart\"></i></button>\r\n          <button *ngIf=\"chart.id != 'timeline'\" type=\"button\" class=\"btn btn-indigo waves-light btn-sm {{chart.id}}\"\r\n                  (click)=\"setChartType($index, 'pie', true)\"><i class=\"fa fa-pie-chart\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-indigo waves-light btn-sm {{chart.id}}\" id=\"line-select\"\r\n                  (click)=\"setChartType($index, 'line', true)\"><i class=\"fa fa-line-chart\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-indigo waves-light btn-sm {{chart.id}}\" id=\"table-select\"\r\n                  (click)=\"setChartType($index, 'table', false)\"><i class=\"fa fa-th\"></i></button>\r\n        </div>\r\n        <div *ngIf=\"chart.id != 'organization'\">\r\n          <span class=\"display-xs text-white ml-2 mr-2\">Select Field:</span>\r\n          <select class=\"select-spec display-xs\" [ngModel]=\"chart.title\"\r\n                  (ngModelChange)=\"dropdownSelector($index, chart.chartType, $event);\"\r\n                  name=\"sel2\">\r\n            <option [value]=\"i\" *ngFor=\"let i of chart.columnData;\">{{i}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"panel shadow1 p-2\">\r\n\r\n      <ul class=\"filters-tabs nav nav-tabs nav-justified\" id=\"myTab\" role=\"tablist\">\r\n        <li class=\"nav-item mr-1\">\r\n          <a class=\"nav-link one\" id=\"filter-tab\" role=\"tab\" (click)=\"activateTabOne()\">\r\n            <div>Search Criteria<span *ngIf=\"filters.length > 0\" class=\"count-badge\">{{filters.length}}</span>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link two\" id=\"saved-tab\" (click)=\"activateTabTwo()\">\r\n            <div>Saved Searches<span *ngIf=\"filterSets.length > 0\" class=\"count-badge\"\r\n                                    id=\"savedCount\">{{filterSets.length}}</span>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content\" id=\"myTabContent\">\r\n        <div class=\"tab-pane one fade show\" id=\"search\" role=\"tabpanel\" aria-labelledby=\"search-tab\">\r\n          <div class=\"py-1 display-xs f-weight-600\">Saved Filters</div>\r\n          <div *ngIf=\"saveActive\" class=\"d-flex align-items-center justify-content-start w-100\">\r\n          </div>\r\n          <div *ngFor=\"let new of filters; let $idx = index;\" class=\"filterRow\">\r\n            <div>{{new.key}}</div>\r\n            <div>{{new.values}}</div>\r\n            <div>\r\n              <button class=\"btn btn-sm btn-danger remove pull-right\">\r\n                <i class=\"fa fa-times glyphicon-remove savebtn\" (click)=\"removeThisFilter(new, $idx)\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"controls\" *ngIf=\"filters.length\">\r\n            <button id=\"saveSearch\" class=\"btn btn-sm btn-primary savebtn\" (click)=\"saveFilterSet(filters);\">\r\n              <i class=\"fa fa-floppy-o mr-1\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-pane two fade\" id=\"saver\" role=\"tabpanel\" aria-labelledby=\"saver-tab\">\r\n          <div class=\"py-1  display-xs f-weight-600\">Saved Filter Sets</div>\r\n          <div *ngFor=\"let saved of filterSets; let $index = index;\"\r\n               class=\"d-flex flex-column display-xxs mb-1\" style=\"border: 1px solid rgba(0,0,0,0.2);\">\r\n            <div class=\"d-flex align-items-center p-1\">\r\n              <div *ngFor=\"let savedFilter of saved.filters;\" style=\"border-right: 1px solid rgba(0,0,0,0.2);\">\r\n                <div class=\"d-flex flex-column mx-1\">\r\n                  <div>{{savedFilter.key}}</div>\r\n                  <div>{{savedFilter.values}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"btn-group btn-group-sm ml-auto\">\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"loadFilterList( saved );\">\r\n                  <i class=\"fa fa-refresh\"></i></button>\r\n                <button class=\"btn btn-sm btn-danger\" (click)=\"removeFilterSet(saved, $index)\">\r\n                  <i class=\"fa fa-times glyphicon-remove\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/inspector/drilldown/drilldown.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/inspector/drilldown/drilldown.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n.panel {\n  background-color: #4554a3;\n  position: relative;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 4px;\n  border: 4px solid #4554a3; }\n.panel-header {\n  text-align: center;\n  color: white;\n  padding: 0 0 6px 0;\n  font-size: 14px; }\n.widget {\n  background-color: white;\n  position: relative;\n  border-radius: 3px 3px 0 0;\n  min-height: 287px;\n  overflow-x: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.63);\n  border-right: 1px solid rgba(0, 0, 0, 0.63);\n  border-top: 1px solid rgba(0, 0, 0, 0.63);\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05); }\n.select-spec {\n  width: 220px; }\n.btn.btn-sm {\n  font-size: 0.2rem;\n  padding: 0.4rem 0.7rem; }\n.scroller {\n  max-height: 240px;\n  overflow-y: auto; }\n.noscroller {\n  overflow-y: hidden; }\n.controls {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(3, 20, 73, 0.3);\n  border-top: solid 1px rgba(163, 163, 163, 0.35);\n  border-left: 1px solid rgba(0, 0, 0, 0.53);\n  border-right: 1px solid rgba(0, 0, 0, 0.53);\n  padding: 5px; }\n.controls i {\n    font-size: 15px; }\n.controls button:disabled i {\n    color: darkblue; }\n.controls label {\n    display: inline-block;\n    font-size: 10px;\n    margin-left: 20px; }\n.filterRow {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fafaff;\n  border: 0px solid rgba(0, 0, 0, 0.17);\n  font-size: 13px;\n  white-space: nowrap;\n  vertical-align: middle;\n  color: black; }\n.nav-tabs .nav-link {\n  color: #dce1e9;\n  background-color: transparent !important;\n  border-right: 1px solid;\n  border-left: 1px solid;\n  border-top: 1px solid;\n  border-color: rgba(49, 49, 98, 0.95);\n  border-bottom: 0px transparent; }\n.nav-tabs .nav-link:hover {\n    border-color: #52a3ff;\n    color: #bdc1c9; }\n.nav-tabs .nav-link {\n  border-radius: 5px 5px 0 0 !important; }\n.nav-tabs .nav-link.active {\n  color: black;\n  background-color: white !important; }\n.nav-tabs .nav-link.focus {\n  color: black;\n  background-color: white !important; }\n.tab-pane {\n  padding: 5px;\n  margin: -1px 1px;\n  background-color: white; }\n.shadow1 {\n  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.45); }\n.shadow2 {\n  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25); }\n.txt {\n  font-size: 13px; }\n"

/***/ }),

/***/ "./src/app/inspector/drilldown/drilldown.component.ts":
/*!************************************************************!*\
  !*** ./src/app/inspector/drilldown/drilldown.component.ts ***!
  \************************************************************/
/*! exports provided: DrilldownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrilldownComponent", function() { return DrilldownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_chart_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/chart-config.service */ "./src/app/inspector/services/chart-config.service.ts");
/* harmony import */ var _services_format_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/format.service */ "./src/app/inspector/services/format.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// TODO  Get rid of jQuery
var DrilldownComponent = /** @class */ (function () {
    function DrilldownComponent(quoteService, formatService) {
        this.quoteService = quoteService;
        this.formatService = formatService;
        this.color1 = ['#05d6ff', '#012172'];
        this.color2 = ['#00e75b', '#006f2e'];
        this.filters = [];
        this.filterSets = [];
        this.btnTypes = ['bar', 'pie', 'line', 'table'];
        this.allRows = [];
        this.dynamicData = [];
        this.tableActive = false;
        this.showTip = false;
        this.toolValues = [];
        this.allCharts = [
            {
                title: 'Sales Person',
                key: '',
                id: 'organization',
                chartType: 'bar',
                chartTypeInit: 'bar',
                total: 'Number of Quotes',
                sold: 'Number of Quotes Sold',
                isPremium: false,
                columnData: [],
                color: this.color1,
                data: []
            },
            {
                title: 'Billing Mode',
                key: '',
                id: 'variable',
                chartType: 'pie',
                chartTypeInit: 'pie',
                total: 'Number of Quotes',
                sold: 'Number of Quotes Sold',
                isPremium: false,
                columnData: [],
                color: this.color1,
                data: []
            },
            {
                title: 'Quote Year and Month Created',
                key: '',
                id: 'timeline',
                chartType: 'line',
                chartTypeInit: 'line',
                total: 'Number of Quotes',
                sold: 'Number of Quotes Sold',
                isPremium: false,
                columnData: [],
                color: this.color1,
                data: []
            }
        ];
    }
    DrilldownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quoteService.getCsvData().subscribe(function (rowData) {
            _this.allRows = rowData;
            _this.fields = _this.quoteService.getFields(_this.allCharts[1].id);
            _this.allCharts[1].columnData = _this.quoteService.initDropdown(_this.fields);
            _this.fields = _this.quoteService.getFields(_this.allCharts[2].id);
            _this.allCharts[2].columnData = _this.quoteService.initDropdown(_this.fields);
            _this.resetCharts();
        });
        this.activateTabOne();
    };
    DrilldownComponent.prototype.removeFilter = function (e, idx) {
        this.removeThisFilter(e, 0);
    };
    DrilldownComponent.prototype.initToolEvent = function (e) {
        this.showTip = true;
        this.tooltipPositionX = e.x + 60;
        this.tooltipPositionY = e.y;
        this.toolTitle = e.values.key;
        this.toolValues = e.values.values;
    };
    DrilldownComponent.prototype.hideToolEvent = function () {
        this.showTip = false;
    };
    // Set initial chart state and fill charts
    DrilldownComponent.prototype.resetCharts = function () {
        var _this = this;
        this.allCharts[0].chartType = 'bar';
        this.allCharts[0].title = 'Sales Person';
        this.allCharts[1].chartType = 'pie';
        this.allCharts[1].title = 'Billing Mode';
        this.allCharts[2].chartType = 'line';
        this.allCharts[2].title = 'Quote Year and Month Created';
        var processedRows = this.quoteService.mapDataRows(this.allRows);
        this.allRows = processedRows;
        this.dynamicData = processedRows;
        this.quoteService.getSubjectData(this.dynamicData);
        this.allCharts.forEach(function (d, i) {
            d.data = _this.quoteService.nestChartData(d.title, processedRows);
        });
        this.quoteService.getSubjectData(processedRows);
    };
    // Set chart specific buttons active/disabled
    DrilldownComponent.prototype.setChartBtnsState = function (activeChart, action) {
        for (var idx = 0; idx < 4; idx++) {
            var newId = '.' + this.btnTypes[idx] + '-btn' + '.' + activeChart.id;
            jquery__WEBPACK_IMPORTED_MODULE_8__(newId).prop('disabled', action);
        }
    };
    // From chart elements click to set filters
    DrilldownComponent.prototype.setCurrentChart = function (newData, index, setFilter) {
        console.log('setCurrentChart  ', this.allCharts[index], ' newData ', newData);
        this.setChartBtnsState(this.allCharts[index], true);
        var setFilterFormat = { key: this.allCharts[index].title, values: newData.key };
        this.allCharts[index].chartType = 'single';
        this.allCharts[index].key = newData.key;
        this.filters.push(setFilterFormat);
        var filteredList = this.returnFiltered('new');
        this.setChartData(filteredList);
        this.quoteService.getSubjectData(filteredList);
    };
    // Draws charts with updated data
    DrilldownComponent.prototype.setChartData = function (filteredResponse) {
        var _this = this;
        this.allCharts.forEach(function (v, i) {
            v.data = _this.quoteService.nestChartData(v.title, filteredResponse);
            if (v.key !== '') {
                v.chartType = 'single';
            }
            else if (v.data.length <= 1 && v.chartType !== 'single') {
                v.chartType = 'table';
            }
            else if (v.data.length > 2 && v.chartType !== 'single') {
                v.chartType = v.chartTypeInit;
            }
        });
        this.quoteService.setRowCount(filteredResponse);
    };
    // From saved list delete filter
    DrilldownComponent.prototype.removeThisFilter = function (item, i) {
        var _this = this;
        this.filters.splice(i, 1);
        this.allCharts.forEach(function (d, idx) {
            if (item.key === d.title) {
                _this.setChartBtnsState(d, false);
            }
            var filteredList = _this.returnFiltered('remove');
            if (_this.filters.length > 0) {
                _this.filters.forEach(function (el, index) {
                    if (d.title === item.key) {
                        d.key = '';
                        d.chartType = d.chartTypeInit;
                    }
                    else if (d.title === el.key) {
                        _this.setChartData(filteredList);
                    }
                });
            }
            else {
                if (d.title === item.key) {
                    d.key = '';
                    _this.setChartData(filteredList);
                }
                d.chartType = d.chartTypeInit;
            }
            _this.quoteService.getSubjectData(filteredList);
        });
    };
    // From timeline and variable charts dropdown selector
    DrilldownComponent.prototype.dropdownSelector = function (i, type, newValue) {
        // console.log(
        //     'dropdownSelector i ',
        //     this.allCharts[i].data.length,
        //     ' type ',
        //     type,
        //     'newValue ',
        //     newValue
        // );
        this.allCharts[i].data = this.quoteService.nestChartData(newValue, this.dynamicData);
        this.allCharts[i].title = newValue;
        var drawTypeVal;
        this.allCharts[i].id === 'timeline' ? (drawTypeVal = 170) : (drawTypeVal = 10);
        if (this.allCharts[i].data.length >= drawTypeVal) {
            console.log('this.allCharts[i].id ', this.allCharts[i].id);
            jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.one').removeClass('active');
            this.setChartType(i, 'table', false);
        }
        else {
            this.setChartType(i, this.allCharts[i].chartTypeInit, true);
        }
    };
    // From chart specific button presses
    DrilldownComponent.prototype.setChartType = function (i, type, saved) {
        console.log('setChartType ', type, ' saved ', saved);
        if (saved) {
            this.allCharts[i].chartTypeInit = type;
        }
        this.allCharts[i].chartType = type;
        type === 'table' ? (this.tableActive = true) : (this.tableActive = false);
    };
    DrilldownComponent.prototype.activateTabTwo = function () {
        jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.one').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('div.tab-pane.one').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.two').addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('div.tab-pane.two').addClass('active show');
    };
    DrilldownComponent.prototype.activateTabOne = function () {
        jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.two').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('div.tab-pane.two').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.one').addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('div.tab-pane.one').addClass('active show');
    };
    // From Saved list press event
    //////////////////////////////
    DrilldownComponent.prototype.saveFilterSet = function (searchValues) {
        // console.log('saveFilterSet searchValues ', searchValues);
        var filterSetter = [];
        // bootbox.prompt('Give your search criteria a name:', (name: any) => {
        // if (name) {
        filterSetter = JSON.parse(JSON.stringify(searchValues));
        this.filterSets.push({ filters: filterSetter });
        //  }
        // });
        console.log('saveFilterSet this.filterSets ', this.filterSets);
        var setLength = this.filterSets.length;
        // // need to find a better way of doing this
        jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.one').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('div.tab-pane.one').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.two').addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('div.tab-pane.two').addClass('active show');
    };
    DrilldownComponent.prototype.setKeysToFilter = function () {
        var _this = this;
        this.allCharts.forEach(function (d, idx) {
            _this.filters.forEach(function (f, i) {
                if (f.key === d.title) {
                    d.key = f.values;
                }
            });
            // console.log('setKeysToFilter d.title ', d.key);
        });
    };
    ////////////////////////////////////////////////////////
    // Load filter list
    DrilldownComponent.prototype.loadFilterList = function (target) {
        var _this = this;
        console.log('loadFilterList target ', target);
        this.filters = [];
        var filterSetter = [];
        this.filterSets.forEach(function (d, i) {
            filterSetter = JSON.parse(JSON.stringify(d.filters));
            _this.filters = filterSetter;
        });
        var filteredList;
        this.allCharts.forEach(function (d, idx) {
            d.data = [];
            filteredList = _this.returnFiltered('new');
            console.log('this.allCharts.forEach ', d);
        });
        this.setKeysToFilter();
        this.setChartData(filteredList);
        // Need to find a better way of doing this
        jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.one').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('div.tab-pane.one').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('a.nav-link.two').addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_8__('div.tab-pane.two').addClass('active show');
    };
    // update the dataset when a filter is added, removed, etc
    DrilldownComponent.prototype.returnFiltered = function (action) {
        var data = action === 'remove' ? this.allRows : this.dynamicData;
        this.filters.forEach(function (v, index) {
            data = data.filter(function (d) {
                return d[v.key] === v.values;
            });
        });
        // console.log('returnFiltered this.filters ', this.filters);
        this.dynamicData = data;
        return data;
    };
    // Removing Filters from saved box
    DrilldownComponent.prototype.removeFilterSet = function (filterset, i) {
        // console.log('removing... ', this.filterSets);
        this.filterSets.splice(i, 1);
        // console.log('removed... ', this.filterSets);
        if (this.filterSets.length === 0) {
            // console.log('No filterSets elements left... ');
            // $('a.nav-link.two').removeClass('active');
            // $('div.tab-pane.two').removeClass('active');
            //
            // $('a.nav-link.one').addClass('active');
            // $('div.tab-pane.one').addClass('active show');
        }
    };
    DrilldownComponent.prototype.toggleTotalQuotes = function (i) {
        this.allCharts[i].isPremium = false;
        this.allCharts[i].color = this.color1;
        this.allCharts[i].total = 'Number of Quotes';
        this.allCharts[i].sold = 'Number of Quotes Sold';
    };
    DrilldownComponent.prototype.toggleTotalPremium = function (i) {
        this.allCharts[i].isPremium = true;
        this.allCharts[i].color = this.color2;
        this.allCharts[i].total = 'Total Premium Quoted';
        this.allCharts[i].sold = 'Total Premium Sold';
    };
    DrilldownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drilldown',
            template: __webpack_require__(/*! ./drilldown.component.html */ "./src/app/inspector/drilldown/drilldown.component.html"),
            styles: [__webpack_require__(/*! ./drilldown.component.scss */ "./src/app/inspector/drilldown/drilldown.component.scss")],
            providers: [_services_format_service__WEBPACK_IMPORTED_MODULE_7__["FormatService"]]
        }),
        __metadata("design:paramtypes", [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_6__["ChartConfigService"], _services_format_service__WEBPACK_IMPORTED_MODULE_7__["FormatService"]])
    ], DrilldownComponent);
    return DrilldownComponent;
}());



/***/ }),

/***/ "./src/app/inspector/drilldown/pie/pie.component.html":
/*!************************************************************!*\
  !*** ./src/app/inspector/drilldown/pie/pie.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div></div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/inspector/drilldown/pie/pie.component.scss":
/*!************************************************************!*\
  !*** ./src/app/inspector/drilldown/pie/pie.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/drilldown/pie/pie.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inspector/drilldown/pie/pie.component.ts ***!
  \**********************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chart-config.service */ "./src/app/inspector/services/chart-config.service.ts");
/* harmony import */ var _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/custom-tooltip/custom-tooltip.component */ "./src/app/shared/components/custom-tooltip/custom-tooltip.component.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PieChartComponent = /** @class */ (function () {
    function PieChartComponent(quoteService) {
        this.quoteService = quoteService;
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.colors = [
            'Blue ',
            'LimeGreen',
            'Red',
            'OrangeRed',
            'Indigo',
            'Yellow',
            'DarkMagenta',
            'Orange',
            'Crimson',
            'DeepSkyBlue',
            'DeepPink',
            'LightSeaGreen'
        ];
        this.radius = 0;
        this.resetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tooltipEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tooltipHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PieChartComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.data) {
            this.data = [];
            this.data = this.pieData;
            setTimeout(function () {
                _this.total = _this.totalVal;
                _this.sold = _this.soldVal;
                _this.isPrem = _this.isPremium;
                _this.initChart(_this);
                _this.drawLegend(_this);
                _this.initializeEvents(_this);
            }, 0);
        }
    };
    PieChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartType = 'pie';
        this.key = 'Billing Mode';
        this.total = 'Number of Quotes';
        this.sold = 'Number of Quotes Sold';
        setTimeout(function () {
            _this.data = _this.pieData;
            _this.container = _this.quoteService.sizeContainers('variable');
            if (_this.pieData) {
                _this.data = _this.pieData;
            }
            _this.chartInit();
            _this.initChart(_this);
            _this.drawLegend(_this);
            _this.initializeEvents(_this);
        }, 0);
    };
    // Call parent function to show tooltip
    PieChartComponent.prototype.showTooltip = function (values, x, y) {
        this.tooltipEvent.next({ values: values.data, x: x + 30, y: y });
    };
    // Call parent function to show tooltip
    PieChartComponent.prototype.hideTooltip = function () {
        this.tooltipHide.next();
    };
    PieChartComponent.prototype.chartInit = function () {
        var _this = this;
        this.pieData.forEach(function (d, i) {
            if (d.key === 'undefined') {
                _this.pieData.splice(i, 1);
            }
        });
    };
    // call parent function to reset to single on click
    PieChartComponent.prototype.resetPieChart = function (value) {
        this.resetEvent.next(value);
    };
    PieChartComponent.prototype.initChart = function (parent) {
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .select('svg')
            .remove();
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .select('table')
            .remove();
        this.container = this.quoteService.sizeContainers('variable');
        var svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .append('center')
            .append('svg')
            .attr('width', this.container.width - this.margin.left - this.margin.right)
            .attr('height', this.container.height + this.margin.top + this.margin.bottom)
            .attr('viewBox', '0, 0, ' +
            (this.container.width + this.margin.left + this.margin.right) +
            ', ' +
            (this.container.height + this.margin.top + this.margin.bottom))
            .append('g');
        svg.append('g').attr('class', 'legend');
        svg.append('g').attr('class', 'slices');
        svg.append('g').attr('class', 'labels');
        svg.append('g').attr('class', 'lines');
        this.radius = Math.min(this.container.width, this.container.height) / 2;
        var pie = d3__WEBPACK_IMPORTED_MODULE_3__["pie"]()
            .sort(null)
            .value(function (d) {
            return d.values[parent.total];
        });
        var arc = d3__WEBPACK_IMPORTED_MODULE_3__["arc"]()
            .outerRadius(this.radius * 0.8)
            .innerRadius(this.radius * 0.3)
            .cornerRadius(3)
            .padAngle(0.1);
        var outerArc = d3__WEBPACK_IMPORTED_MODULE_3__["arc"]()
            .innerRadius(this.radius * 0.9)
            .outerRadius(this.radius * 0.9);
        svg.attr('transform', 'translate(' + this.container.width / 1.8 + ',' + this.container.height / 1.55 + ')');
        var color = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]().range(this.colors);
        this.svg = svg;
        this.pie = pie;
        this.arc = arc;
        this.outerArc = outerArc;
        this.color = color;
        this.change(this.data, this);
        d3__WEBPACK_IMPORTED_MODULE_3__["select"](window).on('load', parent.change(this.data, parent));
    };
    PieChartComponent.prototype.change = function (data, parent) {
        var _this = this;
        var slice = this.svg
            .select('.slices')
            .selectAll('path.slice')
            .data(this.pie(this.data));
        slice
            .enter()
            .append('path')
            .attr('class', 'slice');
        slice
            .transition()
            .duration(0)
            .attrTween('d', function (d) {
            this._current = this._current || d;
            var interpolate = d3__WEBPACK_IMPORTED_MODULE_3__["interpolate"](this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return parent.arc(interpolate(t));
            };
        })
            .style('fill', function (d, i) {
            return parent.color(d.data.key);
        });
        this.arcGroup = slice;
        slice.exit().remove();
        var text = this.svg
            .select('.labels')
            .selectAll('text')
            .data(this.pie(this.data));
        text.enter()
            .append('text')
            .attr('transform', function (d) {
            d.innerRadius = 0;
            d.outerRadius = _this.radius;
            d.angle = (d.startAngle + d.endAngle) / 2;
            return ('rotate(' +
                ((d.angle * 180) / Math.PI - 90) +
                ')translate(' +
                (d.outerRadius - 10) +
                ')');
        })
            .attr('text-anchor', 'start')
            .attr('dy', '0.35em')
            .text(function (d, i) {
            return d.data.key;
        })
            .style('font-size', '12px')
            .style('fill', 'black')
            .style('font-weight', '600');
        function midAngle(d) {
            return d.startAngle + (d.endAngle - d.startAngle) / 2;
        }
        text.transition()
            .duration(500)
            .attrTween('transform', function (d) {
            // if (d.data.values[parent.total] > 20) {
            this._current = this._current || d;
            var interpolate = d3__WEBPACK_IMPORTED_MODULE_3__["interpolate"](this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = parent.outerArc.centroid(d2);
                pos[0] = parent.radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return 'translate(' + pos + ')';
            };
            // }
        })
            .text(function (d, i) {
            if (parent.isPrem) {
                return d.data.key + ':  ' + parent.setValueFormat(d.data.values[parent.total]);
            }
            else {
                return d.data.key + ':  ' + parent.setValueFormat(d.data.values[parent.sold]);
            }
        })
            .styleTween('text-anchor', function (d) {
            this._current = this._current || d;
            var interpolate = d3__WEBPACK_IMPORTED_MODULE_3__["interpolate"](this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? 'start' : 'end';
            };
        });
        text.exit().remove();
        var polyline = this.svg
            .select('.lines')
            .selectAll('polyline')
            .data(this.pie(this.data));
        polyline
            .enter()
            .append('polyline')
            .style('fill', 'none')
            .style('stroke', 'black')
            .style('opacity', 0.6)
            .style('stroke-width', '2px');
        polyline
            .transition()
            .duration(500)
            .attrTween('points', function (d) {
            this._current = this._current || d;
            var interpolate = d3__WEBPACK_IMPORTED_MODULE_3__["interpolate"](this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = parent.outerArc.centroid(d2);
                pos[0] = parent.radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [parent.arc.centroid(d2), parent.outerArc.centroid(d2), pos];
            };
        });
        polyline.exit().remove();
    };
    PieChartComponent.prototype.setValueFormat = function (params) {
        if (this.isPrem) {
            return '$' + params.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        }
        else {
            return params;
        }
    };
    PieChartComponent.prototype.initSettings = function (parent) {
        var radius = Math.min(this.container.width, this.container.height) / 2;
        var labelr = radius - 30;
        var arc = d3__WEBPACK_IMPORTED_MODULE_3__["arc"]()
            .outerRadius(radius)
            .innerRadius(0);
        // labels fit on the slices
        var arcLabel = function (arc) {
            var c = arc, x = c[0], y = c[1], h = Math.sqrt(x * x + y * y), // pythagorean theorem for hypotenuse
            labelX = (x / h) * labelr, labelY = (y / h) * labelr;
            return { x: labelX, y: labelY };
        };
        // TODO  moneyformat @pipe
        // const sum: number = d3.sum(parent.data, function(d: any) {
        //         //     const n = d.values[parent.total];
        //         //     const moneyFormat = function(n, currency) {
        //         //         console.log('moneyFormat ', moneyFormat);
        //         //         return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        //         //     };
        //         //     return d.values[parent.total];
        //         // });
        this.arc = arc;
        this.arcLabel = arcLabel;
        // this.sum = sum;
    };
    PieChartComponent.prototype.drawSVG = function (parent) {
        var radius = Math.min(this.container.width, this.container.height) / 2;
        var color = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]().range(this.color);
        var arc = d3__WEBPACK_IMPORTED_MODULE_3__["arc"]()
            .outerRadius(radius - 6)
            .innerRadius(radius - 80)
            .padAngle(0.04);
        var pie = d3__WEBPACK_IMPORTED_MODULE_3__["pie"]()
            .sort(null)
            .startAngle(1.1 * Math.PI)
            .endAngle(3.1 * Math.PI)
            .value(function (d) {
            return d.values[parent.total];
        });
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .select('svg')
            .remove();
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .select('table')
            .remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .append('center')
            .append('svg');
        this.svg = svg;
        var chart = svg.append('g').attr('class', 'pie');
        var arcGroup = chart
            .selectAll('.arc')
            .data(pie(this.data))
            .enter()
            .append('g')
            .attr('class', 'arc');
        var pieSlice = arcGroup
            .append('path')
            .style('fill', function (d) {
            return color(d.data.key);
        })
            .attr('class', 'slice')
            .transition()
            .delay(function (d, i) {
            return i * 200;
        })
            .duration(100)
            .attr('d', this.arc)
            .attrTween('d', function (d) {
            var i = d3__WEBPACK_IMPORTED_MODULE_3__["interpolate"](d.startAngle + 0.1, d.endAngle);
            return function (t) {
                d.endAngle = i(t);
                return arc(d);
            };
        });
        // label
        // let label = arcGroup
        //     .append('text')
        //     .attr('class', 'pieLabel')
        //     .attr('transform', function(d) {
        //         label = parent.arcLabel(parent.arc.centroid(d));
        //         return 'translate(' + label.x + ',' + label.y + ')';
        //     })
        //     .attr('text-anchor', 'middle');
        //
        // label
        //     .append('tspan')
        //     .attr('x', 0)
        //     .attr('dy', '1em')
        //     .attr('fill', 'red')
        //     .text(function(d: any) {
        //         if (Math.round((d.value / parent.sum) * 100) > 2) {
        //             if (parent.isPrem) {
        //                 const amount = Math.round(d.value),
        //                     M = amount / 1000000,
        //                     K = amount / 1000;
        //                 if (M >= 1) {
        //                     return '$' + M.toFixed(2) + 'M';
        //                 } else if (K >= 1) {
        //                     return '$' + Math.round(K) + 'K';
        //                 } else {
        //                     return '$' + amount;
        //                 }
        //             } else {
        //                 return d.value;
        //             }
        //         } else {
        //             return '';
        //         }
        //     });
        this.pie = pie;
        this.svg = svg;
        this.arcGroup = arcGroup;
    };
    PieChartComponent.prototype.drawLegend = function (parent) {
        var legend = this.svg
            .append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(' + 200 + ', -180)');
        var j = 0;
        var offset = 20;
        // key
        var key = legend
            .selectAll('.key')
            .data(this.pie(this.data))
            .enter()
            .append('g')
            .attr('class', 'key')
            .attr('transform', function (d, i) {
            var limit = Math.ceil(parent.container.height / offset);
            if (i >= limit) {
                j++;
                return 'translate(130, ' + offset * j + ')';
            }
            else {
                return 'translate(80, ' + offset * (i + 1) + ')';
            }
        });
        key.append('rect')
            .attr('height', offset)
            .attr('width', 180)
            .attr('x', -15)
            .attr('y', 0)
            .attr('class', 'legend-back');
        key.append('rect')
            .attr('height', 16)
            .attr('width', 16)
            .attr('fill', function (d) {
            return parent.color(d.data.key);
        });
        key.append('text')
            .attr('dy', '.9em')
            .attr('x', offset - 2)
            .text(function (d) {
            var key = d.data.key;
            var len = key.length;
            var limit = Math.ceil(parent.container.height / offset);
            // Ellypsis for lengths
            if (parent.data.length > limit) {
                j++;
                if (len > 10) {
                    key = key.substr(0, 10) + '...';
                }
            }
            return key;
        });
        this.legendKey = key;
    };
    PieChartComponent.prototype.initializeEvents = function (parent) {
        this.arcGroup
            .on('mousemove', function (d, i) {
            parent.showTooltip(d, parent.quoteService.mouse.x, parent.quoteService.mouse.y);
        })
            .on('mouseleave', function () {
            parent.hideTooltip();
        })
            .on('click', function (d) {
            parent.hideTooltip();
            var filter = { key: d.data.key, values: d.data.values };
            parent.resetPieChart(filter);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PieChartComponent.prototype, "pieData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "dropdownSelectors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "attachNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "isPremium", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "totalVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "soldVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "resetEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "tooltipEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "tooltipHide", void 0);
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pie',
            styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/inspector/drilldown/pie/pie.component.scss"), __webpack_require__(/*! ../drilldown-common.scss */ "./src/app/inspector/drilldown/drilldown-common.scss")],
            template: __webpack_require__(/*! ./pie.component.html */ "./src/app/inspector/drilldown/pie/pie.component.html"),
            providers: [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"], _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["CustomTooltipComponent"]]
            // encapsulation: ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"]])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/inspector/drilldown/single-combo/single-combo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/inspector/drilldown/single-combo/single-combo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"single-container\">\r\n  <div id=\"svgSingle\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/inspector/drilldown/single-combo/single-combo.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/inspector/drilldown/single-combo/single-combo.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/drilldown/single-combo/single-combo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/inspector/drilldown/single-combo/single-combo.component.ts ***!
  \****************************************************************************/
/*! exports provided: SingleComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComboComponent", function() { return SingleComboComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chart-config.service */ "./src/app/inspector/services/chart-config.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleComboComponent = /** @class */ (function () {
    function SingleComboComponent(quoteService) {
        this.quoteService = quoteService;
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.color = ['#3f51b5', '#00b862', '#ff5722', '#2196f3', '#eeeb0c', '#ff9800', '#ff4514'];
        this.initialized = false;
    }
    SingleComboComponent.prototype.ngOnChanges = function () {
        if (this.initialized) {
            this.key = this.singleTitle;
            this.isPrem = this.isPremium;
            this.data = this.singleData;
            this.chartInit();
        }
    };
    SingleComboComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.initialized) {
            this.margin = { top: 10, right: 40, bottom: 35, left: 40 };
            if (this.attachNode === 'organization') {
                this.container = this.quoteService.sizeContainers('organization');
            }
            else if (this.attachNode === 'variable') {
                this.container = this.quoteService.sizeContainers('variable');
            }
            else if (this.attachNode === 'timeline') {
                this.container = this.quoteService.sizeContainers('timeline');
            }
            setTimeout(function () {
                _this.data = _this.singleData;
                _this.key = _this.singleTitle;
                _this.isPrem = _this.isPremium;
                _this.chartInit();
            }, 0);
        }
        this.initialized = true;
    };
    SingleComboComponent.prototype.chartInit = function () {
        this.initChart(this);
        this.initSettings(this);
        this.drawSVG(this);
    };
    SingleComboComponent.prototype.initChart = function (parent) {
        var q = this.data[0].values['Number of Quotes'];
        var qS = this.data[0].values['Number of Quotes Sold'];
        var p = this.data[0].values['Total Premium Quoted'];
        var pS = this.data[0].values['Total Premium Sold'];
        this.premium = p;
        this.quotes = q;
        var data = {
            quotes: [],
            premium: [],
        };
        data.quotes.push(q - qS);
        data.quotes.push(qS);
        data.premium.push(p - pS);
        data.premium.push(pS);
        this.premiumData = data;
    };
    SingleComboComponent.prototype.initSettings = function (parent) {
        var radius = Math.min(this.container.width, this.container.height) / 4, labelr = radius - 40;
        var pie = d3__WEBPACK_IMPORTED_MODULE_2__["pie"]()
            .value(function (d) {
            return d;
        })
            .sort(null);
        var arc = d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .outerRadius(radius)
            .innerRadius(0);
        var arcLabel = function (arc) {
            var c = arc, x = c[0], y = c[1], h = Math.sqrt(x * x + y * y), // pythagorean theorem for hypotenuse
            labelX = (x / h) * labelr, labelY = (y / h) * labelr;
            return { x: labelX, y: labelY };
        };
        var table = jquery__WEBPACK_IMPORTED_MODULE_3__('#' + this.attachNode);
        this.radius = radius;
        this.pie = pie;
        this.arc = arc;
        this.arcLabel = arcLabel;
        this.table = table;
    };
    SingleComboComponent.prototype.drawSVG = function (parent) {
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#' + this.attachNode)
            .select('svg')
            .remove();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#' + this.attachNode)
            .select('table')
            .remove();
        var grid = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#' + this.attachNode)
            .append('center')
            .append('table')
            .attr('class', 'table table-hover');
        var headRow = grid.append('thead').append('tr');
        headRow
            .append('th')
            .attr('class', 'headerBold')
            .text(this.key);
        for (var i = 0; i < d3__WEBPACK_IMPORTED_MODULE_2__["keys"](this.data[0].values).length; i++) {
            var key = d3__WEBPACK_IMPORTED_MODULE_2__["keys"](this.data[0].values)[i];
            headRow
                .append('th')
                .attr('class', 'text-left')
                .attr('class', 'headerBold')
                .text(key.split('_').join(' '));
        }
        var tbody = grid.append('tbody').attr('class', 'borderedCell');
        var row = tbody
            .selectAll('tr')
            .data(this.data)
            .enter()
            .append('tr')
            .on('click', function (d) {
            // var filter = { key: self.key, value: d.key };
            // self.root.addFilter(filter, true);
            // if (self.id === 'prospects' || self.id === 'timeline') {
            //   self.parent.skipField();
            // }
        });
        row.append('td')
            .attr('class', 'text-left')
            .attr('class', 'dataRow')
            .style('fill', 'white')
            .text(function (d) {
            return d.key;
        });
        var _loop_1 = function (i) {
            var key = d3__WEBPACK_IMPORTED_MODULE_2__["keys"](this_1.data[0].values)[i], moneyFormat = function (n, currency) {
                return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            }, isTotal = function (key) {
                return key.indexOf('Total') !== -1;
            };
            row.append('td')
                .attr('class', 'dataRow text-left')
                .text(function (d) {
                return isTotal(key) ? moneyFormat(d.values[key], '$') : d.values[key];
            });
        };
        var this_1 = this;
        for (var i = 0; i < d3__WEBPACK_IMPORTED_MODULE_2__["keys"](this.data[0].values).length; i++) {
            _loop_1(i);
        }
        // Pie charts attach
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#' + this.attachNode)
            .append('svg')
            .attr('width', this.container.width + this.margin.left + this.margin.right)
            .attr('height', this.container.height - this.table.height())
            .attr('viewBox', '0, 0, ' +
            (this.container.width + this.margin.left + this.margin.right) +
            ', ' +
            (this.container.height - this.table.height()));
        var _loop_2 = function (j) {
            var isPrem = j === 0 ? false : true;
            var color = this_2.color;
            var chart = svg
                .append('g')
                .attr('class', 'pie')
                .attr('transform', function () {
                var x = parent.container.width / (2.5 - j) - parent.radius / 2;
                var y = parent.radius + 10;
                return 'translate(' + x + ',' + y + ')';
            });
            var g = chart
                .selectAll('.arc')
                .data(function () {
                var val = isPrem ? parent.premiumData.premium : parent.premiumData.quotes;
                return parent.pie(val);
            })
                .enter()
                .append('g')
                .attr('class', 'arc');
            // pie slice
            g.append('path')
                .attr('class', 'slice no-hover')
                .attr('fill', function (d, i) {
                return parent.color[i];
            })
                .attr('d', d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
                .outerRadius(0)
                .innerRadius(0))
                .transition()
                .duration(20)
                .attr('d', this_2.arc);
            // label % of quotes
            var label = g
                .append('text')
                .attr('class', 'pieLabel')
                .attr('transform', function (d) {
                var label = parent.arcLabel(parent.arc.centroid(d));
                return 'translate(' + label.x + ',' + label.y + ')';
            })
                .attr('text-anchor', 'middle')
                .text(function (d, i) {
                if (i === 1) {
                    var val = isPrem ? parent.premium : parent.quotes, percent = Math.round((d.value / val) * 100);
                    return percent + '%';
                }
                return '';
            });
            // Percent premium
            chart
                .append('text')
                .attr('class', 'title')
                .attr('x', -70)
                .attr('y', function () {
                return parent.radius + 25;
            })
                .text(function () {
                var t = isPrem ? 'Premium' : 'Quotes';
                return '% of ' + t + ' sold';
            });
        };
        var this_2 = this;
        // console.log('this.table.height() ', this.table.height());
        for (var j = 0; j < d3__WEBPACK_IMPORTED_MODULE_2__["keys"](this.premiumData).length; j++) {
            _loop_2(j);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleComboComponent.prototype, "singleData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleComboComponent.prototype, "attachNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleComboComponent.prototype, "isPremium", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleComboComponent.prototype, "singleTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleComboComponent.prototype, "hasChanged", void 0);
    SingleComboComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'single-combo',
            template: __webpack_require__(/*! ./single-combo.component.html */ "./src/app/inspector/drilldown/single-combo/single-combo.component.html"),
            styles: [__webpack_require__(/*! ./single-combo.component.scss */ "./src/app/inspector/drilldown/single-combo/single-combo.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"]])
    ], SingleComboComponent);
    return SingleComboComponent;
}());



/***/ }),

/***/ "./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chart-config.service */ "./src/app/inspector/services/chart-config.service.ts");
/* harmony import */ var _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/custom-tooltip/custom-tooltip.component */ "./src/app/shared/components/custom-tooltip/custom-tooltip.component.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarChartComponent = /** @class */ (function () {
    function BarChartComponent(quoteService) {
        this.quoteService = quoteService;
        this.resetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tooltipEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tooltipHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.container = {};
        this.barGroup = {};
        this.xAxis = {};
        this.yAxis = {};
        this.color = [];
        this.showTip = false;
    }
    BarChartComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            this.total = this.totalVal;
            this.sold = this.soldVal;
            this.data = this.barData;
            this.isPrem = this.isPremium;
            this.color = this.colorVal;
            this.chartInit();
        }
    };
    BarChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total = this.totalVal;
        this.sold = this.soldVal;
        this.isPrem = this.isPremium;
        this.color = this.colorVal;
        this.chartType = 'bar';
        setTimeout(function () {
            _this.data = _this.barData;
            if (_this.attachNode !== 'timeline') {
                _this.container = _this.quoteService.sizeContainers('organization');
            }
            else {
                _this.container = {};
                _this.container = _this.quoteService.sizeContainers('timeline');
            }
            _this.chartInit();
        }, 0);
    };
    // Call parent function to reset to single on click
    BarChartComponent.prototype.resetBarChart = function (filter) {
        this.resetEvent.next(filter);
    };
    // Call parent function to show tooltip
    BarChartComponent.prototype.showTooltip = function (values, x, y) {
        this.tooltipEvent.next({ values: values, x: x + 30, y: y });
    };
    // Call parent function to show tooltip
    BarChartComponent.prototype.hideTooltip = function () {
        this.tooltipHide.next();
    };
    BarChartComponent.prototype.chartInit = function () {
        var _this = this;
        this.barData.forEach(function (d, i) {
            if (d.key === 'undefined') {
                _this.barData.splice(i, 1);
            }
        });
        if (this.attachNode !== 'timeline') {
            this.sortData(this);
        }
        this.initSettings(this);
        this.drawSVG(this);
        this.drawRect(this.total, this.color[0], this);
        this.drawRect(this.sold, this.color[1], this);
        this.drawLegend(this.legend, 20, 0, this.color[0], this.total);
        this.drawLegend(this.legend, 20, 25, this.color[1], this.sold);
        this.initializeEvents(this);
    };
    // sort data descending
    BarChartComponent.prototype.sortData = function (element) {
        var thisData = [];
        thisData = element.data.sort(function (a, b) {
            return b.values[element.total] - a.values[element.total];
        });
    };
    // settings for the line chart layout (x/y axis, svg line definition)
    BarChartComponent.prototype.initSettings = function (parent) {
        var x = d3__WEBPACK_IMPORTED_MODULE_3__["scaleBand"]().rangeRound([0, this.container.width]);
        var y = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().range([this.container.height, 0]);
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_3__["axisBottom"](x)
            .tickFormat(function (d) {
            return d;
        })
            .scale(x);
        var yAxis = d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"](y)
            .tickFormat(function (d) {
            if (parent.isPrem) {
                var M = d / 1000000, K = d / 1000;
                if (M >= 1) {
                    return '$' + M + 'M';
                }
                else if (K >= 1) {
                    return '$' + K + 'K';
                }
                else {
                    return '$' + d;
                }
            }
            else {
                return d;
            }
        })
            .scale(y);
        x.domain(this.data.map(function (d) {
            return d.key;
        }));
        y.domain([
            0,
            d3__WEBPACK_IMPORTED_MODULE_3__["max"](this.data, function (d) {
                return d.values[parent.total];
            })
        ]);
        this.x = x;
        this.y = y;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    };
    BarChartComponent.prototype.drawSVG = function (parent) {
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .select('svg')
            .remove();
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .select('table')
            .remove();
        this.svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .append('center')
            .append('svg')
            .attr('id', 'bar-chart')
            .attr('width', this.container.width - this.margin.left - this.margin.right)
            .attr('height', this.container.height + this.margin.top + this.margin.bottom)
            .attr('viewBox', '0, 0, ' +
            (this.container.width + this.margin.left + this.margin.right) +
            ', ' +
            (this.container.height + this.margin.top + this.margin.bottom));
        var chart = this.svg
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        // create the y axis
        var axisY = chart.append('g').call(this.yAxis);
        axisY.select('path').attr('class', 'axis-path');
        axisY.selectAll('g.tick text').attr('class', 'axis-text');
        // create the x axis
        var axisX = chart
            .append('g')
            .attr('transform', 'translate(0,' + this.container.height + ')')
            .call(this.xAxis);
        axisX.select('path').attr('class', 'axis-path');
        axisX.selectAll('g.tick text').attr('class', 'axis-text');
        // lengthen odd Y axis label ticks for staggering labels
        axisX
            .selectAll('g.tick line')
            .attr('class', 'axis-tick')
            .attr('y2', function (d, i) {
            return i % 2 ? 14 : 5;
        })
            .attr('opacity', function (d, i) {
            var o;
            if (parent.data.length > 30) {
                o = i % 4 ? 0 : 1;
            }
            else {
                o = 1;
            }
            return o;
        });
        // stagger odd Y axis labels so labels don't overlap
        axisX
            .selectAll('g.tick text')
            .attr('class', 'axis-text')
            .attr('y', function (d, i) {
            return i % 2 ? 20 : 6;
        })
            .attr('opacity', function (d, i) {
            var o;
            if (parent.data.length > 30) {
                o = i % 4 ? 0 : 1;
            }
            else {
                o = 1;
            }
            return o;
        });
        chart
            .selectAll('line.horizontalGrid')
            .data(parent.y.ticks)
            .enter()
            .append('line')
            .attr('class', 'horizontalGrid')
            .attr('x1', 0)
            .attr('x2', this.container.width)
            .attr('y1', function (d) {
            return parent.y(d);
        })
            .attr('y2', function (d) {
            return parent.y(d);
        });
        var barGroup = chart
            .selectAll('.bar-group')
            .data(this.data)
            .enter()
            .append('g')
            .attr('class', 'bar-group')
            .attr('x', function (d) {
            return parent.x(d.key);
        })
            .attr('height', function (d) {
            return parent.container.height;
        })
            .attr('y', 0);
        // create a group for the chart legend
        var legend = this.svg
            .append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(' + this.margin.left + ', 0)');
        //  create a group for the chart key
        legend = legend
            .append('g')
            .attr('class', 'key')
            .attr('transform', 'translate(' + (this.container.width - 170) + ', -10)');
        legend
            .append('rect')
            .attr('height', 60)
            .attr('width', 215)
            .attr('x', -10)
            .attr('y', -10)
            .attr('class', 'legend-back');
        this.chart = chart;
        this.barGroup = barGroup;
        this.legend = legend;
    };
    // Draw chart rectangles -
    BarChartComponent.prototype.drawRect = function (values, color, parent) {
        this.barGroup
            .append('rect')
            .attr('class', 'bar')
            .attr('fill', color)
            .attr('opacity', 1)
            .attr('x', function (d) {
            return parent.x(d.key);
        })
            .attr('y', function (d) {
            return parent.y(0);
        })
            .attr('width', parent.x.bandwidth() * 0.95)
            .attr('height', 0)
            .transition()
            .duration(500)
            .attr('height', function (d) {
            return parent.container.height - parent.y(d.values[values]);
        })
            .attr('y', function (d) {
            return parent.y(d.values[values]);
        });
    };
    BarChartComponent.prototype.initializeEvents = function (parent) {
        this.barGroup
            .on('click', function (d, i) {
            var drilldownFilter = { key: d.key, values: d.values };
            parent.hideTooltip();
            parent.resetBarChart(drilldownFilter);
        })
            .on('mousemove', function (d, i) {
            // console.log('x ', parent.quoteService.mouse.x);
            parent.showTooltip(d, parent.quoteService.mouse.x, parent.quoteService.mouse.y);
        })
            .on('mouseleave', function () {
            parent.hideTooltip();
        });
    };
    BarChartComponent.prototype.drawLegend = function (legend, offsetX, offsetY, color, values) {
        legend
            .append('rect')
            .attr('height', 14)
            .attr('width', 14)
            .attr('x', 2)
            .attr('y', offsetY)
            .attr('fill', color);
        legend
            .append('text')
            .attr('dy', '.9em')
            .attr('x', offsetX)
            .attr('y', offsetY)
            .text(values);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BarChartComponent.prototype, "barData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "attachNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "isPremium", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "totalVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "soldVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "colorVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "resetEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "tooltipEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "tooltipHide", void 0);
    BarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-chart',
            template: __webpack_require__(/*! ./stacked-bar.component.html */ "./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.html"),
            styles: [__webpack_require__(/*! ./stacked-bar.component.scss */ "./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.scss")],
            providers: [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"], _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["CustomTooltipComponent"]]
        }),
        __metadata("design:paramtypes", [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"]])
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/inspector/drilldown/stacked-line/stacked-line.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/inspector/drilldown/stacked-line/stacked-line.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"svgLine\"></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/inspector/drilldown/stacked-line/stacked-line.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/inspector/drilldown/stacked-line/stacked-line.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/drilldown/stacked-line/stacked-line.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/inspector/drilldown/stacked-line/stacked-line.component.ts ***!
  \****************************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chart-config.service */ "./src/app/inspector/services/chart-config.service.ts");
/* harmony import */ var _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/custom-tooltip/custom-tooltip.component */ "./src/app/shared/components/custom-tooltip/custom-tooltip.component.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(quoteService) {
        this.quoteService = quoteService;
        this.colorVal = [];
        this.resetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tooltipEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tooltipHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.xAxis = {};
        this.yAxis = {};
        this.color = [];
    }
    LineChartComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            this.total = this.totalVal;
            this.sold = this.soldVal;
            this.data = this.lineData;
            this.isPrem = this.isPremium;
            this.color = this.colorVal;
            this.chartInit();
        }
    };
    LineChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total = this.totalVal;
        this.sold = this.soldVal;
        this.color = this.colorVal;
        this.chartType = 'line';
        this.key = 'Quote Year and Month Created';
        setTimeout(function () {
            _this.data = _this.lineData;
            _this.container = _this.quoteService.sizeContainers('svgLine');
            _this.chartInit();
        }, 0);
    };
    // Call parent function to reset to single on click
    LineChartComponent.prototype.resetLineChart = function (value, parent) {
        // parent.quoteService.hideTip();
        this.resetEvent.next(value);
    };
    // Call parent function to show tooltip
    LineChartComponent.prototype.showTooltip = function (values, x, y) {
        this.tooltipEvent.next({ values: values, x: x + 30, y: y });
    };
    // Call parent function to show tooltip
    LineChartComponent.prototype.hideTooltip = function () {
        this.tooltipHide.next();
    };
    // Remove empty data rows
    LineChartComponent.prototype.chartInit = function () {
        var _this = this;
        this.lineData.forEach(function (d, i) {
            if (d.key === 'undefined') {
                _this.lineData.splice(i, 1);
            }
        });
        this.initChart(this);
        this.drawSVG(this);
        this.drawLine(this.series1, this.line, this.sold, this.color[0], this);
        this.drawLine(this.series2, this.line2, this.total, this.color[1], this);
        this.drawLegend(this.legend, 20, 2, this.color[0], this.total);
        this.drawLegend(this.legend, 20, 22, this.color[1], this.sold);
        this.initializeEvents(this);
    };
    // Line interpolation options
    LineChartComponent.prototype.initChart = function (parent) {
        var curveArray = [
            { d3Curve: d3__WEBPACK_IMPORTED_MODULE_3__["curveLinear"], curveTitle: 'curveLinear' },
            { d3Curve: d3__WEBPACK_IMPORTED_MODULE_3__["curveStep"], curveTitle: 'curveStep' },
            { d3Curve: d3__WEBPACK_IMPORTED_MODULE_3__["curveStepBefore"], curveTitle: 'curveStepBefore' },
            { d3Curve: d3__WEBPACK_IMPORTED_MODULE_3__["curveStepAfter"], curveTitle: 'curveStepAfter' },
            { d3Curve: d3__WEBPACK_IMPORTED_MODULE_3__["curveBasis"], curveTitle: 'curveBasis' },
            { d3Curve: d3__WEBPACK_IMPORTED_MODULE_3__["curveCardinal"], curveTitle: 'curveCardinal' },
            { d3Curve: d3__WEBPACK_IMPORTED_MODULE_3__["curveMonotoneX"], curveTitle: 'curveMonotoneX' },
            { d3Curve: d3__WEBPACK_IMPORTED_MODULE_3__["curveCatmullRom"], curveTitle: 'curveCatmullRom' }
        ];
        var x = d3__WEBPACK_IMPORTED_MODULE_3__["scaleBand"]()
            .rangeRound([0, this.container.width])
            .paddingInner(0.05);
        var y = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().range([this.container.height, 5]);
        x.domain(this.data.map(function (d) {
            return d.key;
        }));
        y.domain([
            0,
            d3__WEBPACK_IMPORTED_MODULE_3__["max"](this.data, function (d) {
                return d.values[parent.total];
            })
        ]);
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_3__["axisBottom"](x)
            .tickFormat(function (d) {
            return parent.attachMode === 'timeline' ? parent.formatDate(d) : d;
        })
            .scale(x);
        var yAxis = d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"](y)
            .tickFormat(function (d) {
            if (parent.isPrem) {
                var M = d / 1000000, K = d / 1000;
                if (M >= 1) {
                    return '$' + M + 'M';
                }
                else if (K >= 1) {
                    return '$' + K + 'K';
                }
                else {
                    return '$' + d;
                }
            }
            else {
                return d;
            }
        })
            .scale(y);
        this.x = x;
        this.y = y;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    };
    // create the svg elements for the line chart
    LineChartComponent.prototype.drawSVG = function (parent) {
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .select('svg')
            .remove();
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .select('table')
            .remove();
        this.svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#' + this.attachNode)
            .append('center')
            .append('svg')
            .attr('id', 'line-chart')
            .attr('width', this.container.width - this.margin.left - this.margin.right)
            .attr('height', this.container.height + this.margin.top + this.margin.bottom)
            .attr('viewBox', '0, 0, ' +
            (this.container.width + this.margin.left + this.margin.right) +
            ', ' +
            (this.container.height + this.margin.top + this.margin.bottom));
        // create group for all line chart elements
        var chart = this.svg
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        // horizontal lines in the background bound to the y axis
        var hGrid = chart
            .selectAll('line.horizontalGrid')
            .data(this.y.ticks)
            .enter()
            .append('line')
            .attr('class', 'horizontalGrid')
            .attr('x1', 0)
            .attr('x2', this.container.width)
            .attr('y1', function (d) {
            return parent.y(d);
        })
            .attr('y2', function (d) {
            return parent.y(d);
        });
        // create the x axis
        var axisX = chart
            .append('g')
            .attr('transform', 'translate(0,' + this.container.height + ')')
            .call(this.xAxis);
        // X axis line and text
        axisX.select('path').attr('class', 'axis-path');
        // Y axis line and text
        var axisY = chart.append('g').call(this.yAxis);
        axisY.selectAll('g.tick text').attr('class', 'axis-text');
        axisY.select('path').attr('class', 'axis-path');
        axisY.selectAll('g.tick line').attr('class', 'axis-tick');
        // lengthen odd Y axis label ticks for staggering labels
        axisX
            .selectAll('g.tick line')
            .attr('class', 'axis-tick')
            .attr('y2', function (d, i) {
            return i % 32 ? 14 : 6;
        })
            .attr('opacity', function (d, i) {
            var o;
            if (parent.data.length > 30) {
                o = i % 16 ? 0 : 1;
            }
            else {
                o = 1;
            }
            return o;
        });
        // stagger odd Y axis labels so labels don't overlap
        axisX
            .selectAll('g.tick text')
            .attr('class', 'axis-text')
            .attr('y', function (d, i) {
            return i % 32 ? 20 : 8;
        })
            .attr('opacity', function (d, i) {
            var o;
            if (parent.data.length > 30) {
                o = i % 16 ? 0 : 1;
            }
            else {
                o = 1;
            }
            return o;
        });
        var lineStart = d3__WEBPACK_IMPORTED_MODULE_3__["area"]()
            .curve(d3__WEBPACK_IMPORTED_MODULE_3__["curveLinear"])
            .x(function (d) {
            return d.key;
        })
            .y(function (d) {
            return 0;
        });
        // define the line
        var line1 = d3__WEBPACK_IMPORTED_MODULE_3__["area"]()
            .curve(d3__WEBPACK_IMPORTED_MODULE_3__["curveLinear"])
            .x(function (d) {
            return parent.x(d.key);
        })
            .y(function (d) {
            return parent.y(d.values[parent.total]);
        });
        // define the line
        var line2 = d3__WEBPACK_IMPORTED_MODULE_3__["area"]()
            .curve(d3__WEBPACK_IMPORTED_MODULE_3__["curveLinear"])
            .x(function (d) {
            return parent.x(d.key);
        })
            .y(function (d) {
            return parent.y(d.values[parent.sold]);
        });
        //  create series for 1st line & points
        var series1 = chart.append('g').attr('class', 'series1');
        // create series for 2nd line & points
        var series2 = chart.append('g').attr('class', 'series2');
        // create events group, will hold elements for binding mouse events to
        var events = chart.append('g').attr('class', 'events');
        // create a group for the chart legend
        var legend = this.svg
            .append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(' + this.margin.left + ', 0)');
        // create a group for the chart key
        legend = legend
            .append('g')
            .attr('class', 'key')
            .attr('transform', 'translate(' + (this.container.width - 190) + ', -10)');
        legend
            .append('rect')
            .attr('height', 60)
            .attr('width', 215)
            .attr('x', -10)
            .attr('y', -10)
            .attr('class', 'legend-back');
        this.lineStart = lineStart;
        this.line = line1;
        this.line2 = line2;
        this.series1 = series1;
        this.series2 = series2;
        this.events = events;
        this.legend = legend;
    };
    LineChartComponent.prototype.drawLine = function (series, line, values, color, parent) {
        series
            .append('path')
            .datum(this.data)
            .style('fill', 'none')
            .style('stroke', color)
            .style('stroke-width', '2px')
            .attr('class', 'line')
            .transition()
            .duration(1000)
            .attr('d', line);
        series
            .selectAll('.point')
            .data(this.data)
            .enter()
            .append('circle')
            .attr('class', 'point')
            .attr('r', '0px')
            .attr('fill', color)
            .attr('fill-opacity', 0)
            .attr('cx', function (d) {
            return parent.x(d.key) + parent.x.bandwidth() / 2;
        })
            .attr('cy', line)
            .attr('r', '1px')
            .attr('fill', color)
            .attr('fill-opacity', 0)
            .transition()
            .duration(1000)
            .attr('cy', function (d) {
            return parent.y(d.values[values]);
        });
    };
    LineChartComponent.prototype.initializeEvents = function (parent) {
        parent.events
            .selectAll('.hover')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('class', 'hover')
            .attr('x', function (d) {
            return parent.x(d.key);
        })
            .attr('y', function (d) {
            return parent.y(d.values[parent.total]);
        })
            .attr('height', function (d) {
            return parent.container.height - parent.y(d.values[parent.total]);
        })
            .attr('width', parent.container.width)
            .attr('fill', 'white')
            .attr('fill-opacity', 0)
            .on('click', function (d) {
            var drilldownFilter = { key: d.key, values: d.values };
            parent.hideTooltip();
            parent.resetLineChart(drilldownFilter, parent);
        })
            .on('mousemove', function (d, i) {
            parent.showTooltip(d, parent.quoteService.mouse.x, parent.quoteService.mouse.y);
        })
            .on('mouseleave', function () {
            parent.hideTooltip();
        });
    };
    LineChartComponent.prototype.drawLegend = function (legend, offsetX, offsetY, color, values) {
        legend
            .append('rect')
            .attr('height', 14)
            .attr('width', 14)
            .attr('x', 2)
            .attr('y', offsetY)
            .attr('fill', color);
        legend
            .append('text')
            .attr('dy', '.9em')
            .attr('x', offsetX)
            .attr('y', offsetY)
            .text(values);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LineChartComponent.prototype, "lineData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "attachNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "isPremium", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "totalVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "soldVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "colorVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "dropdownSelectors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "resetEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "tooltipEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "tooltipHide", void 0);
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart',
            template: __webpack_require__(/*! ./stacked-line.component.html */ "./src/app/inspector/drilldown/stacked-line/stacked-line.component.html"),
            styles: [__webpack_require__(/*! ./stacked-line.component.scss */ "./src/app/inspector/drilldown/stacked-line/stacked-line.component.scss"), __webpack_require__(/*! ../drilldown-common.scss */ "./src/app/inspector/drilldown/drilldown-common.scss")],
            providers: [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"], _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["CustomTooltipComponent"]]
        }),
        __metadata("design:paramtypes", [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"]])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/inspector/drilldown/table-view/table-view.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/inspector/drilldown/table-view/table-view.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/inspector/drilldown/table-view/table-view.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/inspector/drilldown/table-view/table-view.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/drilldown/table-view/table-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/inspector/drilldown/table-view/table-view.component.ts ***!
  \************************************************************************/
/*! exports provided: TableViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableViewComponent", function() { return TableViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableViewComponent = /** @class */ (function () {
    function TableViewComponent() {
        this.resetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TableViewComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            this.data = this.tableData;
            this.id = this.attachNode;
            this.key = this.tableTitle;
            this.gridInit(this);
        }
    };
    TableViewComponent.prototype.ngOnInit = function () {
        this.data = this.tableData;
        this.id = this.attachNode;
        this.key = this.tableTitle;
        this.gridInit(this);
    };
    // Call parent function to reset to single on click
    TableViewComponent.prototype.resetBarChart = function (value) {
        this.resetEvent.next(value);
    };
    TableViewComponent.prototype.gridInit = function (parent) {
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#' + this.attachNode)
            .select('table')
            .remove();
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#' + this.attachNode)
            .select('svg')
            .remove();
        var grid = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#' + this.attachNode)
            .append('table')
            .attr('class', 'table table-hover');
        var headRow = grid
            .append('thead')
            .attr('class', 'headerBold')
            .append('tr');
        headRow
            .append('th')
            .attr('class', 'headerBold')
            .text(this.key);
        for (var i = 0; i < d3__WEBPACK_IMPORTED_MODULE_1__["keys"](parent.data[0].values).length; i++) {
            var key = d3__WEBPACK_IMPORTED_MODULE_1__["keys"](parent.data[0].values)[i];
            headRow
                .append('th')
                .attr('class', 'headerBold')
                .text(key.split('_').join(' '));
        }
        var tbody = grid.append('tbody');
        var row = tbody
            .selectAll('tr')
            .data(parent.data)
            .enter()
            .append('tr')
            .on('click', function (d) {
            var filter = { key: d.key, values: d.values };
            parent.resetBarChart(filter);
        });
        row.append('td')
            .attr('class', 'dataRow')
            .text(function (d) {
            var key = d.key;
            return key;
        });
        var _loop_1 = function (i) {
            var key = d3__WEBPACK_IMPORTED_MODULE_1__["keys"](this_1.data[0].values)[i], moneyFormat = function (n, currency) {
                return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            }, isTotal = function (key) {
                return key.indexOf('Total') !== -1;
            };
            row.append('td')
                .attr('class', 'text-right')
                .attr('class', 'dataRow')
                .text(function (d) {
                return isTotal(key) ? moneyFormat(d.values[key], '$') : d.values[key];
            });
        };
        var this_1 = this;
        for (var i = 0; i < d3__WEBPACK_IMPORTED_MODULE_1__["keys"](parent.data[0].values).length; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "tableData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "attachNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "tableTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TableViewComponent.prototype, "resetEvent", void 0);
    TableViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-view',
            template: __webpack_require__(/*! ./table-view.component.html */ "./src/app/inspector/drilldown/table-view/table-view.component.html"),
            styles: [__webpack_require__(/*! ./table-view.component.scss */ "./src/app/inspector/drilldown/table-view/table-view.component.scss")]
        })
    ], TableViewComponent);
    return TableViewComponent;
}());



/***/ }),

/***/ "./src/app/inspector/inspector-main/inspector-main.component.html":
/*!************************************************************************!*\
  !*** ./src/app/inspector/inspector-main/inspector-main.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"topheader\">\r\n  <div class=\"d-flex w-100 pt-4\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"active\">\r\n        <a routerLink=\"drilldown\" href=\"#home\">Drilldown<span class=\"sr-only\">(current)</span></a></li>\r\n      <li>\r\n        <a routerLink=\"details\" href=\"#page1\">Details\r\n          <span *ngIf=\"rowAmount\" class=\"count-badge\" [style.background-color]=\"rowCountColor\">{{rowAmount}}</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"map\" href=\"#page2\">Map</a></li>\r\n    </ul>\r\n    <button class=\"btn btn-sm help btn-primary display-md f-weight-600\" (click)=\"openModal();\">?</button>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/inspector/inspector-main/inspector-main.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/inspector/inspector-main/inspector-main.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n.fixed-nav {\n  background-color: blue; }\n.count-badge {\n  font-size: 12px;\n  font-weight: 600;\n  margin-left: 6px;\n  margin-top: -3px;\n  color: white;\n  border-radius: 3px;\n  padding: 2px 8px;\n  background-color: blue; }\n.axis-text {\n  font-family: 'Montserrat', sans-serif;\n  font-size: .65rem;\n  fill: black; }\n.axis-tick {\n  stroke: black; }\n.axis-path {\n  stroke: #eeeeee;\n  stroke-opacity: 1.0;\n  shape-rendering: geometricPrecision;\n  z-index: 110000; }\n.btn.btn-sm.help {\n  font-size: .9rem;\n  padding: 0.1rem 0.7rem; }\n.pieLabel {\n  fill: white;\n  font-weight: bold;\n  font-size: 14px; }\n.horizontalGrid {\n  shape-rendering: geometricPrecision;\n  stroke: rgba(191, 191, 191, 0.2);\n  stroke-width: 1px; }\n.legend {\n  top: 15px; }\n.legend .key text {\n  font-size: .7rem;\n  font-weight: bold;\n  fill: #000000; }\n.legend .key:hover {\n  cursor: pointer; }\n.legend-back {\n  fill: rgba(0, 0, 0, 0.06); }\n.borderedCell {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.31); }\n.headerBold {\n  color: black;\n  font-size: 12px;\n  font-weight: bold; }\n.dataRow {\n  color: black;\n  padding: .2rem .5rem !important;\n  font-size: 12px;\n  font-weight: normal;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/inspector/inspector-main/inspector-main.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/inspector/inspector-main/inspector-main.component.ts ***!
  \**********************************************************************/
/*! exports provided: InspectorMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorMainComponent", function() { return InspectorMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chart-config.service */ "./src/app/inspector/services/chart-config.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_ngb_transclude_modal_ngb_transclude_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/ngb-transclude-modal/ngb-transclude-modal.component */ "./src/app/shared/components/ngb-transclude-modal/ngb-transclude-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InspectorMainComponent = /** @class */ (function () {
    function InspectorMainComponent(quoteService, modalService) {
        this.quoteService = quoteService;
        this.modalService = modalService;
        this.modalButtons = {
            name: 'Close'
        };
        this.screenInstructions = {
            drilldownInstructions: [
                'The Inspector Drilldown screen shows sales information by Sales Person, Billing Mode and Time Period.',
                'Hover over chart elements for detailed information',
                'Click on one or more chart elements and filter for more specific details',
                'View your filters in the Search Criteria window',
                'Press Disk button to save filter groups to Saved Searches',
                'Load or delete Saved Searches',
                'Details and Map tabs reflect filtered values'
            ],
            detailInstructions: [
                'The Inspector Drilldown screen shows sales information by Sales Person, Billing Mode and Time Period.',
                'Hover over chart elements for detailed information',
                'Click on one or more chart elements and filter for more specific details',
                'View your filters in the Search Criteria window',
                'Press Disk button to save filter groups to Saved Searches',
                'Load or delete Saved Searches',
                'Details and Map tabs reflect filtered values'
            ],
            mapInstructions: [
                'The Inspector Drilldown screen shows sales information by Sales Person, Billing Mode and Time Period.',
                'Hover over chart elements for detailed information',
                'Click on one or more chart elements and filter for more specific details',
                'View your filters in the Search Criteria window',
                'Press Disk button to save filter groups to Saved Searches',
                'Load or delete Saved Searches',
                'Details and Map tabs reflect filtered values'
            ]
        };
    }
    InspectorMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_2__('#topheader .navbar-nav a').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#topheader .navbar-nav')
                .find('li.active')
                .removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_2__(this)
                .parent('li')
                .addClass('active');
        });
        setTimeout(function () {
            _this.quoteService.newQuoteSubject.subscribe(function (data) {
                _this.setRowData(data);
            });
        }, 300);
    };
    // Set flag for details tab row counts
    InspectorMainComponent.prototype.setRowData = function (arg) {
        if (arg.length > 6000) {
            this.rowCountColor = 'red';
        }
        else if (arg.length > 100 && arg.length <= 6000) {
            this.rowCountColor = 'blue';
        }
        else {
            this.rowCountColor = 'LimeGreen';
        }
        this.rowAmount = arg.length;
    };
    InspectorMainComponent.prototype.openModal = function () {
        console.log('Inspector Instructions');
        var modalRef = this.modalService.open(_shared_components_ngb_transclude_modal_ngb_transclude_modal_component__WEBPACK_IMPORTED_MODULE_4__["NgbdTranscludeModalComponent"], {
            size: 'lg',
            windowClass: 'modal-xxl'
        });
        modalRef.componentInstance.modalName = 'Inspector Instructions';
        modalRef.componentInstance.modalContent = this.screenInstructions;
        modalRef.componentInstance.modalButtons = this.modalButtons;
    };
    InspectorMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inspector-main',
            template: __webpack_require__(/*! ./inspector-main.component.html */ "./src/app/inspector/inspector-main/inspector-main.component.html"),
            styles: [__webpack_require__(/*! ./inspector-main.component.scss */ "./src/app/inspector/inspector-main/inspector-main.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"]]
        }),
        __metadata("design:paramtypes", [_services_chart_config_service__WEBPACK_IMPORTED_MODULE_1__["ChartConfigService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], InspectorMainComponent);
    return InspectorMainComponent;
}());



/***/ }),

/***/ "./src/app/inspector/inspector-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/inspector/inspector-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InspectorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorRoutingModule", function() { return InspectorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drilldown_drilldown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drilldown/drilldown.component */ "./src/app/inspector/drilldown/drilldown.component.ts");
/* harmony import */ var _inspector_main_inspector_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector-main/inspector-main.component */ "./src/app/inspector/inspector-main/inspector-main.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/inspector/details/details.component.ts");
/* harmony import */ var _linked_us_map_linked_us_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linked-us-map/linked-us-map.component */ "./src/app/inspector/linked-us-map/linked-us-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InspectorRoutingModule = /** @class */ (function () {
    function InspectorRoutingModule() {
    }
    InspectorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: 'inspect',
                        component: _inspector_main_inspector_main_component__WEBPACK_IMPORTED_MODULE_3__["InspectorMainComponent"],
                        children: [
                            { path: 'drilldown', component: _drilldown_drilldown_component__WEBPACK_IMPORTED_MODULE_2__["DrilldownComponent"] },
                            { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
                            { path: 'map', component: _linked_us_map_linked_us_map_component__WEBPACK_IMPORTED_MODULE_5__["LinkedUSMapComponent"] },
                        ],
                    },
                ]),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], InspectorRoutingModule);
    return InspectorRoutingModule;
}());



/***/ }),

/***/ "./src/app/inspector/inspector.module.ts":
/*!***********************************************!*\
  !*** ./src/app/inspector/inspector.module.ts ***!
  \***********************************************/
/*! exports provided: InspectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorModule", function() { return InspectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _drilldown_drilldown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drilldown/drilldown.component */ "./src/app/inspector/drilldown/drilldown.component.ts");
/* harmony import */ var _inspector_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inspector-routing.module */ "./src/app/inspector/inspector-routing.module.ts");
/* harmony import */ var _inspector_main_inspector_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inspector-main/inspector-main.component */ "./src/app/inspector/inspector-main/inspector-main.component.ts");
/* harmony import */ var _drilldown_stacked_bar_stacked_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drilldown/stacked-bar/stacked-bar.component */ "./src/app/inspector/drilldown/stacked-bar/stacked-bar.component.ts");
/* harmony import */ var _drilldown_pie_pie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drilldown/pie/pie.component */ "./src/app/inspector/drilldown/pie/pie.component.ts");
/* harmony import */ var _drilldown_stacked_line_stacked_line_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drilldown/stacked-line/stacked-line.component */ "./src/app/inspector/drilldown/stacked-line/stacked-line.component.ts");
/* harmony import */ var _drilldown_single_combo_single_combo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./drilldown/single-combo/single-combo.component */ "./src/app/inspector/drilldown/single-combo/single-combo.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details/details.component */ "./src/app/inspector/details/details.component.ts");
/* harmony import */ var _drilldown_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drilldown/table-view/table-view.component */ "./src/app/inspector/drilldown/table-view/table-view.component.ts");
/* harmony import */ var _linked_us_map_linked_us_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./linked-us-map/linked-us-map.component */ "./src/app/inspector/linked-us-map/linked-us-map.component.ts");
/* harmony import */ var _services_format_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/format.service */ "./src/app/inspector/services/format.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var InspectorModule = /** @class */ (function () {
    function InspectorModule() {
    }
    InspectorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _inspector_routing_module__WEBPACK_IMPORTED_MODULE_7__["InspectorRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot(),
            ],
            declarations: [
                _inspector_main_inspector_main_component__WEBPACK_IMPORTED_MODULE_8__["InspectorMainComponent"],
                _drilldown_drilldown_component__WEBPACK_IMPORTED_MODULE_6__["DrilldownComponent"],
                _drilldown_stacked_bar_stacked_bar_component__WEBPACK_IMPORTED_MODULE_9__["BarChartComponent"],
                _drilldown_pie_pie_component__WEBPACK_IMPORTED_MODULE_10__["PieChartComponent"],
                _drilldown_stacked_line_stacked_line_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"],
                _drilldown_single_combo_single_combo_component__WEBPACK_IMPORTED_MODULE_12__["SingleComboComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_13__["DetailsComponent"],
                _linked_us_map_linked_us_map_component__WEBPACK_IMPORTED_MODULE_15__["LinkedUSMapComponent"],
                _drilldown_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_14__["TableViewComponent"],
            ],
            providers: [_services_format_service__WEBPACK_IMPORTED_MODULE_16__["FormatService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
        })
    ], InspectorModule);
    return InspectorModule;
}());



/***/ }),

/***/ "./src/app/inspector/linked-us-map/linked-us-map.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/inspector/linked-us-map/linked-us-map.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"showTip\" class=\"mt-5\">\r\n  <app-custom-tooltip\r\n    [tiptitle]=\"toolTitle\"\r\n    [tipvalues]=\"toolValues\"\r\n    [tipPositionX]=\"tooltipPositionX\"\r\n    [tipPositionY]=\"tooltipPositionY\">\r\n  </app-custom-tooltip>\r\n</ng-container>\r\n<div id=\"us-map\">\r\n  <div class=\"mt-3\">\r\n    <div id=\"usmap\">\r\n      <div class=\"chart\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/inspector/linked-us-map/linked-us-map.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/inspector/linked-us-map/linked-us-map.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n"

/***/ }),

/***/ "./src/app/inspector/linked-us-map/linked-us-map.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/inspector/linked-us-map/linked-us-map.component.ts ***!
  \********************************************************************/
/*! exports provided: LinkedUSMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedUSMapComponent", function() { return LinkedUSMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _assets_d3_geo_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/d3.geo.tile */ "./src/assets/d3.geo.tile/index.js");
/* harmony import */ var _assets_d3_geo_tile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_d3_geo_tile__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var topojson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! topojson */ "./node_modules/topojson/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_chart_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chart-config.service */ "./src/app/inspector/services/chart-config.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/map.service */ "./src/app/inspector/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LinkedUSMapComponent = /** @class */ (function () {
    function LinkedUSMapComponent(mapService, quoteService) {
        this.mapService = mapService;
        this.quoteService = quoteService;
        this.zoom = 4.35;
        this.centered = null;
        this.state = null;
        this.mouse = { x: 0, y: 0 };
        this.showToolTip = false;
        this.toolValues = [];
        this.resetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tooltipEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tooltipHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LinkedUSMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quoteService.newQuoteSubject.subscribe(function (data) {
            _this.mapDetails = data;
            _this.stateDetails = _this.mapService.mapStateData(data);
            var stateDetail = [];
            _this.stateDetails.forEach(function (d, i) {
                if (d.key !== 'Unknown') {
                    stateDetail.push(d);
                }
            });
            _this.stateDetails = stateDetail;
        });
        this.mapService.getMapData().subscribe(function (res) {
            _this.mapFile = res;
            _this.setMapDrawElements();
        });
    };
    LinkedUSMapComponent.prototype.setMapDrawElements = function () {
        this.sData = topojson__WEBPACK_IMPORTED_MODULE_3__["feature"](this.mapFile, this.mapFile.objects.states).features;
        this.pData = topojson__WEBPACK_IMPORTED_MODULE_3__["feature"](this.mapFile, this.mapFile.objects.places).features;
        this.initMouse(this);
        this.resize();
    };
    LinkedUSMapComponent.prototype.initMouse = function (parent) {
        parent.mouse.x = 0;
        document.addEventListener('mousemove', function (e) {
            parent.mouse.x =
                (e.clientX || e.pageX) +
                    (document.body.scrollLeft || document.documentElement.scrollLeft);
            parent.mouse.y =
                (e.clientY || e.pageY) +
                    (document.body.scrollTop || document.documentElement.scrollTop);
        }, false);
    };
    LinkedUSMapComponent.prototype.resize = function () {
        this.clearMap();
        this.width = 1600;
        this.height = 800;
        this.mapX = this.width / 2;
        this.mapY = this.height / 2;
        this.scale = Math.max(this.width, this.height);
        this.albers = d3__WEBPACK_IMPORTED_MODULE_1__["geoAlbers"]()
            .scale(this.scale - 70)
            .translate([this.mapX, this.mapY])
            .precision(0.1);
        this.mercator = d3__WEBPACK_IMPORTED_MODULE_1__["geoMercator"]()
            .center([-96, 38.3])
            .scale(this.scale)
            .translate([this.mapX, this.mapY]);
        this.tile = _assets_d3_geo_tile__WEBPACK_IMPORTED_MODULE_2__().size([this.width, this.height]);
        this.setPath(this.mercator);
        this.drawSVG();
        this.drawStates(this, this.mercator);
    };
    LinkedUSMapComponent.prototype.clearMap = function () {
        // console.log("clearChart usa map");
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#us-map .chart')
            .select('svg')
            .remove();
    };
    // returns path descriptions based on supplied map projection (albers, mercator)
    LinkedUSMapComponent.prototype.setPath = function (projection) {
        var path = d3__WEBPACK_IMPORTED_MODULE_1__["geoPath"]()
            .projection(projection)
            .pointRadius(2);
        return path;
    };
    // create svg elements for the map
    LinkedUSMapComponent.prototype.drawSVG = function () {
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#us-map .chart')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        var tiles = svg
            .append('g')
            .attr('id', 'tiles')
            .attr('opacity', 0);
        var background = svg
            .append('rect')
            .attr('class', 'background')
            .attr('width', this.width + 20)
            .attr('height', this.height + 20)
            .attr('opacity', 1);
        var mapGroup = svg
            .append('g')
            .attr('id', 'mapGroup')
            .attr('opacity', 0);
        var states = mapGroup.append('g').attr('id', 'states');
        var places = mapGroup.append('g').attr('id', 'places');
        this.svg = svg;
        this.tiles = tiles;
        this.background = background;
        this.mapGroup = mapGroup;
        this.states = states;
        this.places = places;
    };
    LinkedUSMapComponent.prototype.drawStates = function (parent, mercator) {
        var stateData = this.sData;
        var qLen = this.mapDetails.length;
        var qStates = this.stateDetails;
        var stateArr = [];
        stateData = stateData.sort(function (a, b) {
            if (a.properties.state < b.properties.state) {
                return -1;
            }
            if (a.properties.state > b.properties.state) {
                return 1;
            }
            return 0;
        });
        stateData.forEach(function (v, i) {
            var s = qStates.filter(function (d) {
                return d.key === v.properties.state;
            });
            if (s.length) {
                var newVal = 'Number of Quotes';
                var numQuotes = s[0].value[newVal];
                var percent = Math.round((numQuotes / qLen) * 100);
                stateArr.push(percent);
            }
        });
        stateArr.sort().reverse();
        var arr = stateArr.filter(function (elem, pos) {
            return stateArr.indexOf(elem) === pos;
        });
        this.states
            .selectAll('path')
            .data(stateData)
            .enter()
            .append('path')
            .each(function (d, i) {
            var c;
            var s = d.properties.state;
            var p = qStates.filter(function (d) {
                return d.key === s;
            });
            var state = p[0];
            // init states with values
            if (p.length) {
                var numQuotes = state.value['Number of Quotes'];
                var percent = Math.round((numQuotes / qLen) * 100);
                c = '#84e6b0';
            }
            else {
                c = '#c0f4d8';
            }
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this)
                .attr('d', parent.setPath(mercator))
                .attr('class', function () {
                var quoted = p.length ? 'quoted' : '';
                return ('state ' + quoted);
            })
                .attr('fill', c)
                .attr('stroke', '#387138')
                .attr('id', s)
                .on('click', function (d, i) {
                parent.stateClick(d, i, state, this);
            })
                .on('mousemove', function (e) {
                if (state) {
                    // console.log('select-all values ', this.toolValues);
                    parent.showTip = true;
                    parent.tooltipPositionX = parent.mouse.x + 100;
                    parent.tooltipPositionY = parent.mouse.y;
                    parent.toolTitle = state.key;
                    parent.toolValues = state.value;
                }
            })
                .on('mouseleave', function () {
                parent.showTip = false;
            });
        });
        this.states.selectAll('path').each(function (d, i) {
            var that = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this);
            var node = that.node();
            d.properties['zWidth'] = Math.ceil(node.getBoundingClientRect().width * parent.zoom);
            d.properties['zHeight'] = Math.ceil(node.getBoundingClientRect().height * parent.zoom);
        });
        parent.changeProjection(parent.albers, this);
    };
    // Zoom in/out when state with quotes is clicked
    LinkedUSMapComponent.prototype.stateClick = function (d, i, hasQuote, parent) {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__('#places').empty();
        this.hideTiles();
        if (d && this.centered !== d && hasQuote) {
            console.log('stateClick this.centered ', d, ' this ', this);
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
            var diff = Math.max(perW, perH);
            if (diff > 1) {
                zoom = zoom / diff;
            }
            else {
                diff = 1 - diff;
                diff = parseFloat(1 + diff);
                zoom = zoom * diff;
            }
            // console.log("this.zoom ", zoom);
        }
        else {
            this.changeProjection(this.albers, this);
            x = this.mapX;
            y = this.mapY;
            zoom = 1;
            this.centered = null;
            this.state = null;
        }
        // console.log("this.centered ", this.centered);
        // Should return active classed states ??
        this.mapGroup.selectAll('path').classed('active', this.centered &&
            function (e) {
                return e === center;
            });
        this.mapGroup
            .transition()
            .duration(750)
            .attr('transform', 'translate(' +
            map_x +
            ',' +
            map_y +
            ')scale(' +
            zoom +
            ')translate(' +
            -x +
            ',' +
            -y +
            ')')
            .style('stroke-width', 2.5 / zoom + 'px')
            .attr('class', function () {
            return center && state ? 'centered' : '';
        })
            .on('end', function () {
            if (center && state) {
                _this.drawCities(_this, center, state);
                _this.loadTiles(zoom, x, y, _this);
                _this.showTiles();
            }
        });
    };
    // for the selected state, find places in the map json that have quotes
    // in the csv and draw circles indication their location.
    // circle diameters are percentage of total quotes in state based.
    LinkedUSMapComponent.prototype.drawCities = function (parent, centered, theState) {
        var data = this.pData, qStates = this.stateDetails;
        // array will store data for city points
        var cities = [];
        // get city data from topojson by selected state
        var pCities = data.filter(function (d) {
            return d.properties.stateid === theState;
        });
        // sort alphabetically
        pCities = pCities.sort(function (a, b) {
            if (a.properties.name < b.properties.name) {
                return -1;
            }
            if (a.properties.name > b.properties.name) {
                return 1;
            }
            return 0;
        });
        // nest quote data by State and City and rollup
        var qCities = d3__WEBPACK_IMPORTED_MODULE_1__["nest"]()
            .key(function (d) {
            return d['Prospect State'];
        })
            .key(function (d) {
            return d['Prospect City'];
        })
            .sortKeys(d3__WEBPACK_IMPORTED_MODULE_1__["ascending"])
            .rollup(function (leaves) {
            return {
                'Number of Quotes': leaves.length,
                'Number of Quotes Sold': d3__WEBPACK_IMPORTED_MODULE_1__["sum"](leaves, function (d) {
                    return d['Number of Quotes Sold'];
                }),
                'Total Premium Quoted': d3__WEBPACK_IMPORTED_MODULE_1__["sum"](leaves, function (d) {
                    return d['Total Premium Quoted'];
                }),
                'Total Premium Sold': d3__WEBPACK_IMPORTED_MODULE_1__["sum"](leaves, function (d) {
                    return d['Total Premium Sold'];
                })
            };
        })
            .entries(this.mapDetails);
        // filter quote data by selected state
        qCities = qCities.filter(function (d) {
            return d.key === centered.properties.state;
        });
        // drill down to cities in selected state
        qCities = qCities[0].values;
        // build cities array w/ cities that have quotes
        // add values (quote data) object to each city
        for (var i = 0; i < qCities.length; i++) {
            var key = qCities[i].key;
            for (var j = 0; j < pCities.length; j++) {
                var city = pCities[j].properties.name;
                if (city.toUpperCase() === key.toUpperCase()) {
                    pCities[j].values = {};
                    pCities[j].values = qCities[i].value;
                    cities.push(pCities[j]);
                }
            }
        }
        // //get the total number of quotes in selected state
        qStates.pop('qStates ', qStates);
        var qTotal = qStates.filter(function (d) {
            return d.key === centered.properties.state;
        });
        setTimeout(function () {
            qTotal = qTotal[0].value['Number of Quotes'];
            cities = cities.sort(function (a, b) {
                return b.values['Number of Quotes'] - a.values['Number of Quotes'];
            });
            parent.places
                .selectAll('.place')
                .data(cities)
                .enter()
                .append('circle')
                .each(function (d, i) {
                var radius;
                var cName = d.properties.name;
                var mercCoords = parent.mercator(d.geometry.coordinates);
                var coord1 = mercCoords[0].toFixed(2);
                var coord2 = mercCoords[1].toFixed(2);
                var quotes = d.values['Number of Quotes'];
                var percent = Math.ceil((quotes / qTotal) * 100) * 2;
                radius = percent > 10 ? 10 : percent;
                var geo = d;
                var newPar = parent;
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this)
                    .attr('class', 'place')
                    .attr('r', 0)
                    .attr('fill', 'rgba(15,20,170,0.4')
                    .attr('transform', function () {
                    return 'translate(' + parent.mercator(geo.geometry.coordinates) + ')';
                })
                    .transition()
                    .duration(1000)
                    .attr('r', radius);
            });
        }, 400);
    };
    // changes map projection (albers vs mercator)
    LinkedUSMapComponent.prototype.changeProjection = function (projection, parent) {
        var n = 0;
        this.states
            .selectAll('path')
            .each(function () {
            n++;
        })
            .transition()
            .duration(0)
            .attr('d', this.setPath(projection))
            .on('end', function (d, i) {
            n--;
            if (n === 0) {
                parent.mapGroup.attr('opacity', 1);
            }
        });
    };
    // array of colors for the map
    LinkedUSMapComponent.prototype.color = function () {
        var colors = [];
        colors = ['#eff3ff', '#c6dbef', '#9ecae1', '#6baed6', '#3182bd', '#08519c'];
        colors.reverse();
        return colors;
    };
    // Make map tiles visible
    LinkedUSMapComponent.prototype.showTiles = function () {
        this.tiles
            .transition()
            .duration(250)
            .attr('opacity', 1.0);
    };
    // Hide map tiles
    LinkedUSMapComponent.prototype.hideTiles = function () {
        this.tiles.attr('opacity', 0);
    };
    // Get appropriate tiles from mapbox and insert them into tiles layer
    LinkedUSMapComponent.prototype.loadTiles = function (zoom, x, y, parent) {
        console.log('loadTiles  ', parent);
        var scale = this.mercator.scale();
        var long = this.mercator.center()[0], lat = this.mercator.center()[1];
        var projection = d3__WEBPACK_IMPORTED_MODULE_1__["geoMercator"]()
            .scale(scale)
            .translate([this.mapX, this.mapY]);
        var center = projection([long, lat]);
        var x1 = center[0];
        var y1 = center[1];
        var x2 = this.mapX - x, y2 = this.mapY - y;
        x2 = x1 - x2;
        y2 = y1 - y2;
        center = projection.invert([x2, y2]);
        long = center[0];
        lat = center[1];
        scale = scale * zoom;
        projection = d3__WEBPACK_IMPORTED_MODULE_1__["geoMercator"]()
            .scale(scale)
            .translate([this.mapX, this.mapY]);
        center = projection([long, lat]);
        x = center[0];
        y = center[1];
        var zScale = scale * 2 * Math.PI;
        var zTranslate = [this.width - x, this.height - y];
        var tiles = parent.tile.scale(zScale).translate(zTranslate)();
        var image = this.tiles
            .attr('transform', 'scale(' + tiles.scale + ')translate(' + tiles.translate + ')')
            .selectAll('image')
            .data(tiles, function (d) {
            return d;
        });
        image.exit().remove();
        image
            .enter()
            .append('image')
            .attr('xlink:href', function (d) {
            // console.log("xlink - href ", d[2]);
            // console.log("path ", "http://" + ["a", "b", "c", "d"][Math.random() * 4 | 0]
            //   + ".tiles.mapbox.com/v3/x2gboye.jhe1npi6/"
            //   + d[2] + "/" + d[0] + "/" + d[1]
            //   + ".png?access_token=pk.eyJ1IjoidG9tYy1zIiwiYSI6ImNqYXZrZDJoMjBldzQyd25nYzBtZmhxN3UifQ.VOtF64YHkki1372CAQ30ug");
            return ('http://' +
                ['a', 'b', 'c', 'd'][(Math.random() * 4) | 0] +
                '.tiles.mapbox.com/v3/x2gboye.jhe1npi6/' +
                d[2] +
                '/' +
                d[0] +
                '/' +
                d[1] +
                '.png?access_token=pk.eyJ1IjoidG9tYy1zIiwiYSI6ImNqYXZrZDJoMjBldzQyd25nYzBtZmhxN3UifQ.VOtF64YHkki1372CAQ30ug');
        })
            .attr('width', 1)
            .attr('height', 1)
            .attr('x', function (d) {
            return d[0];
        })
            .attr('y', function (d) {
            return d[1];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LinkedUSMapComponent.prototype, "resetEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LinkedUSMapComponent.prototype, "tooltipEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LinkedUSMapComponent.prototype, "tooltipHide", void 0);
    LinkedUSMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'linked-map',
            template: __webpack_require__(/*! ./linked-us-map.component.html */ "./src/app/inspector/linked-us-map/linked-us-map.component.html"),
            styles: [__webpack_require__(/*! ./linked-us-map.component.scss */ "./src/app/inspector/linked-us-map/linked-us-map.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_services_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]]
        }),
        __metadata("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"], _services_chart_config_service__WEBPACK_IMPORTED_MODULE_5__["ChartConfigService"]])
    ], LinkedUSMapComponent);
    return LinkedUSMapComponent;
}());



/***/ }),

/***/ "./src/app/inspector/services/chart-config.service.ts":
/*!************************************************************!*\
  !*** ./src/app/inspector/services/chart-config.service.ts ***!
  \************************************************************/
/*! exports provided: ChartConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartConfigService", function() { return ChartConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mappings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mappings */ "./src/app/inspector/services/mappings.ts");
/* harmony import */ var _format_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./format.service */ "./src/app/inspector/services/format.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChartConfigService = /** @class */ (function () {
    function ChartConfigService(http, formatService) {
        this.http = http;
        this.formatService = formatService;
        this.mappingData = _mappings__WEBPACK_IMPORTED_MODULE_6__["MAPPING_DATA"];
        this.mouse = { x: 0, y: 0 };
        this.columnData = [];
        this.newQuoteSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.detailData);
        this.sizeContainers = function (target) {
            var pieChartWindow = document.getElementById(target);
            var chartWindow = pieChartWindow.getBoundingClientRect();
            return { width: Math.abs(chartWindow.width), height: 230 };
        };
        this.initMouse(this);
    }
    ChartConfigService.prototype.getSubjectData = function (newList) {
        this.newQuoteSubject.next(newList);
    };
    // Old hard coded csv response
    ChartConfigService.prototype.getCsvData = function () {
        var _this = this;
        return this.http
            .get('../../../assets/data-collections/Quotes.csv', { responseType: 'text' })
            .map(function (res) { return _this.mapInitialData(res); })
            .catch(this.handleError);
    };
    ChartConfigService.prototype.handleError = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + " - " + error.statusText
                : 'Server error';
        // console.error(errMsg); // log to console instead
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    // Initial chart states from raw data
    ChartConfigService.prototype.mapInitialData = function (res) {
        var dataRows = d3__WEBPACK_IMPORTED_MODULE_4__["csvParse"](res);
        this.columnData = dataRows.columns;
        this.rowData = dataRows.filter(function (el) {
            return el !== 'columns';
        });
        return this.rowData;
    };
    ChartConfigService.prototype.mapDataRows = function (dataRows) {
        var _this = this;
        var mapper = this.mappingData;
        var data = d3__WEBPACK_IMPORTED_MODULE_4__["entries"](dataRows);
        data = data.map(function (d, i) {
            var obj = {};
            mapper.quotes.forEach(function (item, index) {
                if (!item.count) {
                    obj[item.value] = _this.formatService.formatData(d, item);
                }
            });
            return obj;
        });
        return data;
    };
    // Rolls up chart data into usable format
    ChartConfigService.prototype.nestChartData = function (key, data) {
        var _this = this;
        var nest = d3__WEBPACK_IMPORTED_MODULE_4__["nest"]()
            .key(function (d) {
            return d[key];
        })
            .sortKeys(d3__WEBPACK_IMPORTED_MODULE_4__["ascending"])
            .rollup(function (leaves) {
            var obj = {}, rollup = _this.rollitup();
            rollup.forEach(function (v, i) {
                if (v.count) {
                    obj[v.value] = leaves.length;
                }
                else {
                    obj[v.value] = d3__WEBPACK_IMPORTED_MODULE_4__["sum"](leaves, function (d) {
                        return d[v.value];
                    });
                }
            });
            return obj;
        })
            .entries(data)
            .map(function (group, i) {
            if (!group.key) {
                // console.log("Chart group Gone Bad ", group.value);
            }
            return {
                key: group.key,
                values: group.value
            };
        });
        // console.log('Chart nest ', nest);
        return nest;
    };
    // get rollup fields as defined in mappings.js
    ChartConfigService.prototype.rollitup = function () {
        var rollup = [];
        this.mappingData.quotes.forEach(function (v) {
            if (v.rollup) {
                rollup.push(v);
            }
        });
        return rollup;
    };
    // get the right fields pertaining to this widget
    ChartConfigService.prototype.getFields = function (id) {
        var fields = this.mappingData;
        fields = fields.quotes.filter(function (d) {
            return d[id];
        });
        fields.sort(function (a, b) {
            if (a.value < b.value) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            return 0;
        });
        return fields;
    };
    // populate the widget's dropdown with the fields
    ChartConfigService.prototype.initDropdown = function (val) {
        return val.map(function (v) { return v.value; });
    };
    // update row count badge text
    ChartConfigService.prototype.setRowCount = function (details) {
        console.log('setRowCount ', details.length);
        this.detailData = details;
        var len = details.length;
        var badge = jquery__WEBPACK_IMPORTED_MODULE_5__('#rowCount');
        badge.text(len);
        badge.css('background', this.getRowCount().color);
    };
    // get row count
    ChartConfigService.prototype.getRowCount = function () {
        var count = jquery__WEBPACK_IMPORTED_MODULE_5__('#rowCount').text();
        var color = 'green';
        var message = '';
        if (count <= 1000) {
            color = 'green';
            message = '';
        }
        else if (count > 5000) {
            color = 'red';
            message = 'This could take a minute.';
        }
        else {
            color = '#f0ad4e';
            message = 'Should just be a few seconds.';
        }
        return { count: count, color: color, message: message };
    };
    ChartConfigService.prototype.initMouse = function (parent) {
        document.addEventListener('mousemove', function (e) {
            parent.mouse.x =
                (e.clientX || e.pageX) +
                    (document.body.scrollLeft || document.documentElement.scrollLeft);
            parent.mouse.y =
                (e.clientY || e.pageY) +
                    (document.body.scrollTop || document.documentElement.scrollTop);
            //  console.log('initMouse x ', parent.mouse.x, ' y ', parent.mouse.y);
        }, false);
    };
    ChartConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _format_service__WEBPACK_IMPORTED_MODULE_7__["FormatService"]])
    ], ChartConfigService);
    return ChartConfigService;
}());



/***/ }),

/***/ "./src/app/inspector/services/format.service.ts":
/*!******************************************************!*\
  !*** ./src/app/inspector/services/format.service.ts ***!
  \******************************************************/
/*! exports provided: FormatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatService", function() { return FormatService; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

var FormatService = /** @class */ (function () {
    function FormatService() {
    }
    // formats data according to rules specified in mappings.js
    FormatService.prototype.formatData = function (d, v) {
        if (v.type === 'money') {
            return parseFloat(d.value[v.value]);
        }
        else if (v.type === 'string') {
            return this.titleCase(d.value[v.value]);
        }
        else if (v.type === 'leadingZero') {
            return this.addLeadingZero(d.value[v.value]);
        }
        else if (v.type === 'date') {
            if (v.format === 'year') {
                // console.log("Format year ");
                return this.formatDate(d.value[v.key], 'year');
            }
            else if (v.format === 'yearMonth') {
                return this.formatDate(d.value[v.key], 'month');
            }
            else {
                return this.formatDate(d.value[v.value], 'day');
            }
        }
        else {
            return d.value[v.value];
        }
    };
    // formats date (m/d/yyyy -> yyyy-mm-dd)
    FormatService.prototype.formatDate = function (d, timeframe) {
        if (d) {
            var aDate = new Date(d);
            var parseDate = void 0;
            if (timeframe === 'year') {
                parseDate = d3__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]('%Y');
            }
            else if (timeframe === 'month') {
                parseDate = d3__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]('%m-%Y');
            }
            else {
                parseDate = d3__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]('%m-%d-%Y');
            }
            var date = parseDate(aDate);
            return date;
        }
        else {
            return '';
        }
    };
    // adds a leading 0 to a single digit number
    FormatService.prototype.addLeadingZero = function (num) {
        return parseInt(num) < 10 ? '0' + num : num;
    };
    // converts a string to Lower and then TitleCase.
    // Used for normalizing city names.
    FormatService.prototype.titleCase = function (s) {
        if (s) {
            return s.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
                return $1.toUpperCase();
            });
        }
        return '';
    };
    return FormatService;
}());



/***/ }),

/***/ "./src/app/inspector/services/map.service.ts":
/*!***************************************************!*\
  !*** ./src/app/inspector/services/map.service.ts ***!
  \***************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _format_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format.service */ "./src/app/inspector/services/format.service.ts");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _mappings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mappings */ "./src/app/inspector/services/mappings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BASE_URL = '../assets/data-collections/us.json';
var MapService = /** @class */ (function () {
    function MapService(_http, formatService) {
        this._http = _http;
        this.formatService = formatService;
        this.mappingData = _mappings__WEBPACK_IMPORTED_MODULE_6__["MAPPING_DATA"];
        this.nestMapData = function (key, data) {
            var _this = this;
            var tempMap = d3__WEBPACK_IMPORTED_MODULE_5__["nest"]()
                .key(function (d) {
                return d[key];
            })
                .sortKeys(d3__WEBPACK_IMPORTED_MODULE_5__["ascending"])
                .rollup(function (leaves) {
                var obj = {}, rollup = _this.rollitup();
                rollup.forEach(function (v, i) {
                    if (v.count) {
                        obj[v.value] = leaves.length;
                    }
                    else {
                        obj[v.value] = d3__WEBPACK_IMPORTED_MODULE_5__["sum"](leaves, function (d) {
                            return d[v.value];
                        });
                    }
                });
                return obj;
            })
                .entries(data);
            return tempMap;
        };
        this.mapDrawValue = 'Prospect State';
    }
    MapService.prototype.getMapData = function () {
        return this._http
            .get(BASE_URL)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    MapService.prototype.handleError = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + " - " + error.statusText
                : 'Server error';
        console.error(errMsg); // log to console instead
        return errMsg;
    };
    // Map State data for map screen
    MapService.prototype.mapStateData = function (dataRows) {
        var _this = this;
        var mapper = this.mappingData;
        var data = d3__WEBPACK_IMPORTED_MODULE_5__["entries"](dataRows);
        data = data.map(function (d) {
            var obj = {};
            mapper.quotes.forEach(function (item, index) {
                if (!item.count) {
                    obj[item.value] = _this.formatService.formatData(d, item);
                }
            });
            return obj;
        });
        return this.nestMapData(this.mapDrawValue, data);
    };
    // get rollup fields as defined in mappings.js
    MapService.prototype.rollitup = function () {
        var rollup = [];
        this.mappingData.quotes.forEach(function (v) {
            if (v.rollup) {
                rollup.push(v);
            }
        });
        return rollup;
    };
    // get the right fields pertaining to this widget
    MapService.prototype.getFields = function (id) {
        var fields = this.mappingData;
        fields = fields.quotes.filter(function (d) {
            return d[id];
        });
        fields.sort(function (a, b) {
            if (a.value < b.value) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            return 0;
        });
        return fields;
    };
    // getContinentData(): Observable<ChartData> {
    //     return this._http
    //         .get('./assets/north-america.json')
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }
    MapService.prototype.getCities = function () {
        return this._http.get('./assets/majorCities.csv');
        // .map((res) => this.mapMajorCityData(res))
        // .catch(this.handleError);
    };
    // getWorldMapData(): Observable<ChartData> {
    //     return this._http
    //         .get('./assets/world-countries.json')
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }
    MapService.prototype.mapMajorCityData = function (res) {
        console.log('mapMajorCityData ', res);
        // res.forEach((d,i)=>{
        //
        //
        // })
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _format_service__WEBPACK_IMPORTED_MODULE_2__["FormatService"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/inspector/services/mappings.ts":
/*!************************************************!*\
  !*** ./src/app/inspector/services/mappings.ts ***!
  \************************************************/
/*! exports provided: MAPPING_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAPPING_DATA", function() { return MAPPING_DATA; });
// let mappings = {
var MAPPING_DATA = {
    quotes: [
        {
            value: 'Number of Quotes',
            rollup: true,
            select: 'count',
            count: true,
        },
        {
            value: 'Number of Quotes Sold',
            select: 'count',
            rollup: true,
        },
        {
            value: 'Total Premium Quoted',
            type: 'money',
            select: 'amount',
            rollup: true,
        },
        {
            value: 'Total Premium Sold',
            type: 'money',
            select: 'amount',
            rollup: true,
        },
        {
            value: 'Quote Year Created',
            type: 'date',
            format: 'year',
            key: 'Quote Date Created',
            timeline: true,
            ignore: true,
        },
        {
            value: 'Quote Year and Month Created',
            type: 'date',
            format: 'yearMonth',
            key: 'Quote Date Created',
            timeline: true,
            selected: true,
            ignore: true,
        },
        {
            value: 'Quote Date Created',
            type: 'date',
            timeline: true,
        },
        {
            value: 'Sale Written Year',
            type: 'date',
            format: 'year',
            key: 'Sale Written Date Created',
            timeline: true,
            ignore: true,
        },
        {
            value: 'Sale Written Year and Month',
            type: 'date',
            format: 'yearMonth',
            key: 'Sale Written Date Created',
            timeline: true,
            ignore: true,
        },
        {
            value: 'Sale Written Date Created',
            type: 'date',
            timeline: true,
        },
        {
            value: 'Sale Written Week Of Year',
            type: 'string',
            format: 'leadingZero',
            timeline: true,
        },
        {
            value: 'Sale Written Day Of Month',
            type: 'string',
            format: 'leadingZero',
            timeline: true,
        },
        {
            value: 'Prospect Zip',
            variable: true,
        },
        {
            value: 'Prospect State',
            variable: true,
            map: true,
            mapLevel: 'state',
        },
        {
            value: 'Sales Person',
            organization: true,
            selected: true,
        },
        {
            value: 'Billing Mode',
            variable: true,
            selected: true,
        },
        {
            value: 'Line Of Business',
            variable: true,
        },
        {
            value: 'Product',
            variable: true,
        },
        {
            value: 'Prospect City',
            variable: true,
            type: 'string',
            format: 'titleCase',
            map: true,
            mapLevel: 'city',
        },
        {
            value: 'Most Recent Contact Source Type Prior To Quote',
            variable: true,
        },
        {
            value: 'Made Sale',
            variable: true,
        },
        {
            value: 'Most Recent Contact Source Prior To Quote',
            variable: true,
        },
        {
            value: 'Quote Comment',
        },
    ],
};


/***/ }),

/***/ "./src/assets/d3.geo.tile/index.js":
/*!*****************************************!*\
  !*** ./src/assets/d3.geo.tile/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");

module.exports = function() {
  var size = [960, 500],
    scale = 256,
    translate = [size[0] / 2, size[1] / 2],
    zoomDelta = 0;

  function tile() {
    var z = Math.max(Math.log(scale) / Math.LN2 - 8, 0),
      z0 = Math.round(z + zoomDelta),
      k = Math.pow(2, z - z0 + 8),
      origin = [(translate[0] - scale / 2) / k, (translate[1] - scale / 2) / k],
      tiles = [],
      cols = d3.range(Math.max(0, Math.floor(-origin[0])), Math.max(0, Math.ceil(size[0] / k - origin[0]))),
      rows = d3.range(Math.max(0, Math.floor(-origin[1])), Math.max(0, Math.ceil(size[1] / k - origin[1])));

    rows.forEach(function(y) {
      cols.forEach(function(x) {
        tiles.push([x, y, z0]);
      });
    });

    tiles.translate = origin;
    tiles.scale = k;

    return tiles;
  }

  tile.size = function(_) {
    if (!arguments.length) return size;
    size = _;
    return tile;
  };

  tile.scale = function(_) {
    if (!arguments.length) return scale;
    scale = _;
    return tile;
  };

  tile.translate = function(_) {
    if (!arguments.length) return translate;
    translate = _;
    return tile;
  };

  tile.zoomDelta = function(_) {
    if (!arguments.length) return zoomDelta;
    zoomDelta = +_;
    return tile;
  };

  return tile;
};


/***/ })

}]);
//# sourceMappingURL=inspector-inspector-module.js.map