(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_3ef546._.js", {

"[project]/src/components/map/map-selector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MapSelector": (()=>MapSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
;
;
;
;
// Configure default icon for Leaflet markers
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});
// Component that smoothly changes the map view when coordinates update
function ChangeMapView({ coords }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChangeMapView.useEffect": ()=>{
            map.flyTo(coords, map.getZoom(), {
                animate: true,
                duration: 1.5
            });
        }
    }["ChangeMapView.useEffect"], [
        coords,
        map
    ]);
    return null;
}
_s(ChangeMapView, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = ChangeMapView;
const MapSelector = ({ latitude, longitude, onChange })=>{
    _s1();
    var _s = __turbopack_refresh__.signature();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Fetch suggestions from the Nominatim API
    const fetchSuggestions = async ()=>{
        if (!query) {
            setSuggestions([]);
            return;
        }
        try {
            // Enhanced search with better parameters for US addresses
            const searchQuery = query.trim();
            const params = new URLSearchParams({
                format: 'json',
                q: searchQuery,
                countrycodes: 'us',
                addressdetails: '1',
                limit: '10',
                dedupe: '1'
            });
            const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`);
            const data = await response.json();
            // If no results with the full query, try a broader search
            if (data.length === 0 && searchQuery.includes(' ')) {
                const words = searchQuery.split(' ');
                if (words.length > 1) {
                    // Try without the street number first
                    const broaderQuery = words.slice(1).join(' ');
                    const broaderParams = new URLSearchParams({
                        format: 'json',
                        q: broaderQuery,
                        countrycodes: 'us',
                        addressdetails: '1',
                        limit: '10',
                        dedupe: '1'
                    });
                    const broaderResponse = await fetch(`https://nominatim.openstreetmap.org/search?${broaderParams}`);
                    const broaderData = await broaderResponse.json();
                    setSuggestions(broaderData);
                    return;
                }
            }
            setSuggestions(data);
        } catch (error) {
            console.error("Search error:", error);
            setSuggestions([]);
        }
    };
    // Debounce the search input so that it fetches after a short delay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapSelector.useEffect": ()=>{
            const timeoutId = setTimeout({
                "MapSelector.useEffect.timeoutId": ()=>{
                    if (query.length > 1) {
                        fetchSuggestions();
                    } else {
                        setSuggestions([]);
                    }
                }
            }["MapSelector.useEffect.timeoutId"], 300); // Reduced from 500ms to 300ms
            return ({
                "MapSelector.useEffect": ()=>clearTimeout(timeoutId)
            })["MapSelector.useEffect"];
        }
    }["MapSelector.useEffect"], [
        query
    ]);
    // Handle manual geocoding for exact addresses
    const handleManualGeocode = async ()=>{
        if (!query.trim()) return;
        try {
            const params = new URLSearchParams({
                format: 'json',
                q: query.trim(),
                countrycodes: 'us',
                addressdetails: '1',
                limit: '1'
            });
            const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`);
            const data = await response.json();
            if (data.length > 0) {
                const result = data[0];
                const lat = parseFloat(result.lat);
                const lon = parseFloat(result.lon);
                onChange(lat, lon, query.trim());
                setSuggestions([]);
            } else {
                // If no exact match, try to geocode the address anyway
                // This will help with addresses that might not be in the database
                console.log('No exact match found, but keeping the address as entered');
            }
        } catch (error) {
            console.error("Manual geocoding error:", error);
        }
    };
    // Handle user selecting a suggestion from the dropdown
    const handleSelectSuggestion = (suggestion)=>{
        const lat = parseFloat(suggestion.lat);
        const lon = parseFloat(suggestion.lon);
        setQuery(suggestion.display_name);
        setSuggestions([]);
        onChange(lat, lon, suggestion.display_name);
    };
    // Allow map clicks to update location
    function LocationMarker() {
        _s();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
            click (e) {
                onChange(e.latlng.lat, e.latlng.lng, query);
            }
        });
        return latitude && longitude ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
            position: [
                latitude,
                longitude
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/map/map-selector.tsx",
            lineNumber: 142,
            columnNumber: 36
        }, this) : null;
    }
    _s(LocationMarker, "Ld/tk8Iz8AdZhC1l7acENaOEoCo=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search location...",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value),
                                className: "input input-bordered flex-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/map/map-selector.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleManualGeocode,
                                className: "btn btn-primary",
                                disabled: !query.trim(),
                                children: "Find"
                            }, void 0, false, {
                                fileName: "[project]/src/components/map/map-selector.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/map/map-selector.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "absolute z-50 bg-white border border-gray-300 w-full max-h-60 overflow-auto mt-1",
                        children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                onClick: ()=>handleSelectSuggestion(suggestion),
                                className: "p-2 hover:bg-gray-200 cursor-pointer",
                                children: suggestion.display_name
                            }, index, false, {
                                fileName: "[project]/src/components/map/map-selector.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/map-selector.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/map-selector.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                center: [
                    latitude || 51.505,
                    longitude || -0.09
                ],
                zoom: 13,
                className: "w-full h-64 rounded z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                        attribution: "© OpenStreetMap contributors",
                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/map-selector.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChangeMapView, {
                        coords: [
                            latitude || 51.505,
                            longitude || -0.09
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/map-selector.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationMarker, {}, void 0, false, {
                        fileName: "[project]/src/components/map/map-selector.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/map-selector.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 grid grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        readOnly: true,
                        className: "input input-bordered",
                        value: `Lat: ${latitude.toFixed(4)}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/map-selector.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        readOnly: true,
                        className: "input input-bordered",
                        value: `Lng: ${longitude.toFixed(4)}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/map-selector.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/map-selector.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/map/map-selector.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
};
_s1(MapSelector, "Bgvy+/ZYaHzKRdmFTPPGRKjsons=");
_c1 = MapSelector;
var _c, _c1;
__turbopack_refresh__.register(_c, "ChangeMapView");
__turbopack_refresh__.register(_c1, "MapSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/winery-stepper/basic-info-step.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BasicInfoForm": (()=>BasicInfoForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$map$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/map/map-selector.tsx [app-client] (ecmascript)");
;
;
const BasicInfoForm = ({ formData, setFormData })=>{
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setFormData((prev)=>({
                ...prev,
                [name]: val
            }));
    };
    const handleNestedChange = (e, parent, field)=>{
        const { value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [parent]: {
                ...formData[parent],
                [field]: val
            }
        });
    };
    const updateLocation = (lat, lng, address)=>{
        setFormData((prev)=>({
                ...prev,
                location: {
                    ...prev.location,
                    latitude: lat,
                    longitude: lng,
                    address
                }
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-control",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "label",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "label-text",
                            children: "Winery Name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Winery name",
                        className: "input input-bordered",
                        value: formData.name,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-control",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "label",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "label-text",
                            children: "Description"
                        }, void 0, false, {
                            fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "description",
                        placeholder: "Description",
                        className: "textarea textarea-bordered",
                        value: formData.description,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label-text",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                placeholder: "Email",
                                className: "input input-bordered",
                                value: formData.contact_info.email,
                                onChange: (e)=>handleNestedChange(e, "contact_info", "email")
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label-text",
                                    children: "Phone"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "phone",
                                placeholder: "Phone",
                                className: "input input-bordered",
                                value: formData.contact_info.phone,
                                onChange: (e)=>handleNestedChange(e, "contact_info", "phone")
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label-text",
                                    children: "Website"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                name: "website",
                                placeholder: "Website",
                                className: "input input-bordered",
                                value: formData.contact_info.website,
                                onChange: (e)=>handleNestedChange(e, "contact_info", "website")
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "label",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "label-text",
                            children: "Address"
                        }, void 0, false, {
                            fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$map$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapSelector"], {
                        latitude: formData.location.latitude,
                        longitude: formData.location.longitude,
                        onChange: updateLocation
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-control",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "cursor-pointer label",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label-text",
                                    children: "Is Mountain Location?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: formData.location.is_mountain_location,
                                    onChange: (e)=>handleNestedChange(e, "location", "is_mountain_location"),
                                    className: "checkbox"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/winery-stepper/basic-info-step.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_c = BasicInfoForm;
var _c;
__turbopack_refresh__.register(_c, "BasicInfoForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/datetime-picker.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MultiDateTimePicker": (()=>MultiDateTimePicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
const MultiDateTimePicker = ({ dates, onChange })=>{
    _s();
    const [newDateTime, setNewDateTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const addDate = ()=>{
        if (newDateTime) {
            const date = new Date(newDateTime);
            if (!isNaN(date.getTime())) {
                onChange([
                    ...dates,
                    date
                ]);
                setNewDateTime("");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: dates.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between bg-base-200 p-2 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: d.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/datetime-picker.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChange(dates.filter((_, j)=>j !== i)),
                                className: "btn btn-xs btn-error",
                                children: "Remove"
                            }, void 0, false, {
                                fileName: "[project]/src/components/datetime-picker.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/datetime-picker.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/datetime-picker.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "datetime-local",
                        className: "input input-bordered flex-1",
                        value: newDateTime,
                        onChange: (e)=>setNewDateTime(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/datetime-picker.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: addDate,
                        className: "btn btn-primary",
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/src/components/datetime-picker.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/datetime-picker.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/datetime-picker.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_s(MultiDateTimePicker, "lf6AmjJvApfDWWTOEvt5Yu2iABw=");
_c = MultiDateTimePicker;
var _c;
__turbopack_refresh__.register(_c, "MultiDateTimePicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Multi-image-upload.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MultipleImageUpload": (()=>MultipleImageUpload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const MultipleImageUpload = ({ files, onChange })=>{
    const handleFiles = (e)=>{
        if (e.target.files) {
            onChange([
                ...files,
                ...Array.from(e.target.files)
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                multiple: true,
                onChange: handleFiles,
                className: "file-input file-input-bordered mb-3"
            }, void 0, false, {
                fileName: "[project]/src/components/Multi-image-upload.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4",
                children: files.map((file, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: URL.createObjectURL(file),
                                alt: "preview",
                                className: "w-24 h-24 object-cover rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Multi-image-upload.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChange(files.filter((_, j)=>j !== i)),
                                className: "absolute top-0 right-0 btn btn-xs btn-error",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Multi-image-upload.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Multi-image-upload.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Multi-image-upload.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Multi-image-upload.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = MultipleImageUpload;
var _c;
__turbopack_refresh__.register(_c, "MultipleImageUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "avaInfo": (()=>avaInfo),
    "avaOrder": (()=>avaOrder),
    "mountainAVAs": (()=>mountainAVAs),
    "regions": (()=>regions),
    "specialFeatures": (()=>specialFeatures),
    "timeOptions": (()=>timeOptions),
    "wineTypes": (()=>wineTypes)
});
const regions = [
    "Calistoga",
    "Diamond Mountain",
    "St. Helena",
    "Rutherford",
    "Oakville",
    "Los Carneros (Carneros)",
    "Howell Mountain",
    "Wild Horse Valley",
    "Stags Leap District",
    "Mt. Veeder",
    "Atlas Peak",
    "Spring Mountain District",
    "Chiles Valley",
    "Yountville",
    "Oak Knoll District of Napa Valley",
    "Coombsville",
    "Crystal Springs of Napa Valley"
];
const wineTypes = [
    "Red",
    "Rosé",
    "White",
    "Sparkling",
    "Dessert"
];
const specialFeatures = [
    "Tasting Waived with Bottle Purchase",
    "Tour Available",
    "Food Available",
    "Family-Friendly",
    "Pet Friendly",
    "Organic",
    "Walk-ins Welcome"
];
const timeOptions = [
    "Morning",
    "Afternoon",
    "Evening"
];
const avaOrder = [
    "Calistoga",
    "Diamond Mountain",
    "Spring Mountain District",
    "Howell Mountain",
    "St. Helena",
    "Rutherford",
    "Oakville",
    "Yountville",
    "Stags Leap District",
    "Oak Knoll District of Napa Valley",
    "Mt. Veeder",
    "Atlas Peak",
    "Chiles Valley",
    "Coombsville",
    "Wild Horse Valley",
    "Los Carneros (Carneros)"
];
const avaInfo = {
    "Calistoga": "Known for warm climate; bold Cabernet Sauvignon and Zinfandel.",
    "Diamond Mountain": "Mountain AVA; structured Cabernet with firm tannins.",
    "Spring Mountain District": "High-elevation vineyards; elegant, age-worthy reds.",
    "Howell Mountain": "Cool nights; intense Cabernets with notable acidity.",
    "St. Helena": "Historic heart of Napa; balanced reds and whites.",
    "Rutherford": "Famous ‘Rutherford dust’; classic Cabernet terroir.",
    "Oakville": "Benchmark Cabernets; gravelly alluvial fans.",
    "Yountville": "Moderate climate; Merlot and Cabernet blends.",
    "Stags Leap District": "Silky tannins; perfumed Cabernets.",
    "Oak Knoll District of Napa Valley": "Cooler AVA; Chardonnay and Merlot shine.",
    "Mt. Veeder": "Steep slopes; powerful, structured reds.",
    "Atlas Peak": "High elevation; concentrated fruit and acidity.",
    "Chiles Valley": "Higher, cooler; Zinfandel and Cabernet.",
    "Coombsville": "Volcanic soils; elegant, cooler-climate Cabernets.",
    "Wild Horse Valley": "Cool and windy; Pinot Noir and Chardonnay.",
    "Los Carneros (Carneros)": "Coolest AVA; Pinot Noir and Chardonnay."
};
const mountainAVAs = [
    "Diamond Mountain",
    "Howell Mountain",
    "Mt. Veeder",
    "Atlas Peak",
    "Spring Mountain District"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/winery-stepper/tasting-booking-step.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TastingBookingForm": (()=>TastingBookingForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$datetime$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/datetime-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Multi$2d$image$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Multi-image-upload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const TastingBookingForm = ({ formData, setFormData, uploadedFiles, setUploadedFiles, availableSlotDates, setAvailableSlotDates, tastingImages, setTastingImages })=>{
    _s();
    const [foodPairingOption, setFoodPairingOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        price: 0
    });
    const [newWine, setNewWine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        description: "",
        year: undefined,
        tasting_notes: "",
        photo: ""
    });
    const [newTour, setNewTour] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        description: "",
        cost: 0
    });
    const [otherFeature, setOtherFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        description: "",
        cost: 0
    });
    const [tastingWinePhotos, setTastingWinePhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Local state for input values to allow empty inputs
    const [inputValues, setInputValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const addTasting = (index)=>()=>{
            const newTasting = {
                tasting_title: ``,
                tasting_description: "",
                tasting_price: 0,
                available_times: [],
                wine_types: [],
                number_of_wines_per_tasting: 1,
                special_features: [],
                images: [],
                food_pairing_options: [],
                tours: {
                    available: false,
                    tour_price: 0,
                    tour_options: []
                },
                wine_details: [],
                ava: "",
                booking_info: {
                    booking_enabled: false,
                    max_guests_per_slot: 1,
                    number_of_people: [
                        1,
                        10
                    ],
                    dynamic_pricing: {
                        enabled: false,
                        weekend_multiplier: 1
                    },
                    available_slots: []
                },
                other_features: []
            };
            setFormData((prev)=>{
                const updatedTastings = [
                    ...prev.tasting_info
                ];
                updatedTastings.splice(index + 1, 0, newTasting);
                return {
                    ...prev,
                    tasting_info: updatedTastings
                };
            });
            setUploadedFiles([]);
            setAvailableSlotDates([]);
            // Clear input values for the new tasting
            setInputValues((prev)=>{
                const newInputValues = {
                    ...prev
                };
                const newIndex = index + 1;
                delete newInputValues[`wines_${newIndex}`];
                delete newInputValues[`people_${newIndex}_0`];
                delete newInputValues[`people_${newIndex}_1`];
                return newInputValues;
            });
        };
    const addInitialTasting = ()=>{
        const newTasting = {
            tasting_title: `Tasting 1`,
            tasting_description: "Initial tasting experience",
            tasting_price: 0,
            available_times: [],
            wine_types: [],
            number_of_wines_per_tasting: 1,
            special_features: [],
            images: [],
            food_pairing_options: [],
            tours: {
                available: false,
                tour_price: 0,
                tour_options: []
            },
            wine_details: [],
            ava: "",
            booking_info: {
                booking_enabled: false,
                max_guests_per_slot: 1,
                number_of_people: [
                    1,
                    10
                ],
                dynamic_pricing: {
                    enabled: false,
                    weekend_multiplier: 1
                },
                available_slots: []
            },
            other_features: []
        };
        setFormData((prev)=>({
                ...prev,
                tasting_info: [
                    newTasting
                ]
            }));
        setUploadedFiles([]);
        setAvailableSlotDates([]);
        // Clear input values for the new tasting
        setInputValues((prev)=>{
            const newInputValues = {
                ...prev
            };
            delete newInputValues[`wines_0`];
            delete newInputValues[`people_0_0`];
            delete newInputValues[`people_0_1`];
            return newInputValues;
        });
    };
    const removeTasting = (index)=>{
        setFormData((prev)=>({
                ...prev,
                tasting_info: prev.tasting_info.filter((_, i)=>i !== index)
            }));
        // Clear input values for the removed tasting
        setInputValues((prev)=>{
            const newInputValues = {
                ...prev
            };
            delete newInputValues[`wines_${index}`];
            delete newInputValues[`people_${index}_0`];
            delete newInputValues[`people_${index}_1`];
            return newInputValues;
        });
    };
    const handleTastingChange = (index, field, value)=>{
        setFormData((prev)=>{
            const updatedTastings = [
                ...prev.tasting_info
            ];
            updatedTastings[index] = {
                ...updatedTastings[index],
                [field]: value
            };
            return {
                ...prev,
                tasting_info: updatedTastings
            };
        });
    };
    const handleTastingPriceChange = (index)=>(e)=>{
            const value = parseFloat(e.target.value) || 0;
            handleTastingChange(index, "tasting_price", value);
        };
    const handleSelectChange = (index, field)=>(selected)=>{
            const values = selected.map((s)=>s.value);
            handleTastingChange(index, field, values);
        };
    const updateSlotDates = (index)=>(dates)=>{
            setAvailableSlotDates(dates);
            handleTastingChange(index, "booking_info", {
                ...formData.tasting_info[index].booking_info,
                available_slots: dates.map((d)=>d.toISOString())
            });
        };
    const addFoodPairingOption = (index)=>()=>{
            if (foodPairingOption.name && foodPairingOption.price >= 0) {
                setFormData((prev)=>{
                    const updatedTastings = [
                        ...prev.tasting_info
                    ];
                    updatedTastings[index] = {
                        ...updatedTastings[index],
                        food_pairing_options: [
                            ...updatedTastings[index].food_pairing_options || [],
                            {
                                id: crypto.randomUUID(),
                                name: foodPairingOption.name,
                                price: foodPairingOption.price
                            }
                        ]
                    };
                    return {
                        ...prev,
                        tasting_info: updatedTastings
                    };
                });
                setFoodPairingOption({
                    id: "",
                    name: "",
                    price: 0
                });
            }
        };
    const removeFoodPairingOption = (tastingIndex, optionIndex)=>{
        setFormData((prev)=>{
            const updatedTastings = [
                ...prev.tasting_info
            ];
            updatedTastings[tastingIndex] = {
                ...updatedTastings[tastingIndex],
                food_pairing_options: updatedTastings[tastingIndex].food_pairing_options.filter((_, i)=>i !== optionIndex)
            };
            return {
                ...prev,
                tasting_info: updatedTastings
            };
        });
    };
    const addWine = (index)=>()=>{
            if (newWine.name && newWine.description) {
                const currentWinePhotos = tastingWinePhotos[index] || [];
                setFormData((prev)=>{
                    const updatedTastings = [
                        ...prev.tasting_info
                    ];
                    updatedTastings[index] = {
                        ...updatedTastings[index],
                        wine_details: [
                            ...updatedTastings[index].wine_details || [],
                            {
                                id: crypto.randomUUID(),
                                name: newWine.name,
                                description: newWine.description,
                                year: newWine.year ? parseInt(newWine.year.toString()) : undefined,
                                tasting_notes: newWine.tasting_notes,
                                photo: currentWinePhotos[0] ? URL.createObjectURL(currentWinePhotos[0]) : undefined
                            }
                        ]
                    };
                    return {
                        ...prev,
                        tasting_info: updatedTastings
                    };
                });
                setNewWine({
                    id: "",
                    name: "",
                    description: "",
                    year: undefined,
                    tasting_notes: "",
                    photo: ""
                });
                setTastingWinePhotos((prev)=>({
                        ...prev,
                        [index]: []
                    }));
            }
        };
    const removeWine = (tastingIndex, wineIndex)=>{
        setFormData((prev)=>{
            const updatedTastings = [
                ...prev.tasting_info
            ];
            updatedTastings[tastingIndex] = {
                ...updatedTastings[tastingIndex],
                wine_details: updatedTastings[tastingIndex].wine_details.filter((_, i)=>i !== wineIndex)
            };
            return {
                ...prev,
                tasting_info: updatedTastings
            };
        });
    };
    const submitTour = (index)=>()=>{
            if (newTour.description && newTour.cost >= 0) {
                setFormData((prev)=>{
                    const updatedTastings = [
                        ...prev.tasting_info
                    ];
                    updatedTastings[index] = {
                        ...updatedTastings[index],
                        tours: {
                            ...updatedTastings[index].tours,
                            available: true,
                            tour_options: [
                                ...updatedTastings[index].tours.tour_options || [],
                                {
                                    description: newTour.description,
                                    cost: newTour.cost
                                }
                            ]
                        }
                    };
                    return {
                        ...prev,
                        tasting_info: updatedTastings
                    };
                });
                setNewTour({
                    description: "",
                    cost: 0
                });
            }
        };
    const removeTour = (tastingIndex, tourIndex)=>{
        setFormData((prev)=>{
            const updatedTastings = [
                ...prev.tasting_info
            ];
            updatedTastings[tastingIndex] = {
                ...updatedTastings[tastingIndex],
                tours: {
                    ...updatedTastings[tastingIndex].tours,
                    tour_options: updatedTastings[tastingIndex].tours.tour_options.filter((_, i)=>i !== tourIndex)
                }
            };
            return {
                ...prev,
                tasting_info: updatedTastings
            };
        });
    };
    const addOtherFeature = (index)=>()=>{
            if (otherFeature.description && newTour.cost >= 0) {
                setFormData((prev)=>{
                    const updatedTastings = [
                        ...prev.tasting_info
                    ];
                    updatedTastings[index] = {
                        ...updatedTastings[index],
                        other_features: [
                            ...updatedTastings[index].other_features || [],
                            {
                                description: otherFeature.description,
                                cost: otherFeature.cost
                            }
                        ]
                    };
                    return {
                        ...prev,
                        tasting_info: updatedTastings
                    };
                });
                setOtherFeature({
                    description: "",
                    cost: 0
                });
            }
        };
    const removeFeature = (tastingIndex, featureIndex)=>{
        setFormData((prev)=>{
            const updatedTastings = [
                ...prev.tasting_info
            ];
            updatedTastings[tastingIndex] = {
                ...updatedTastings[tastingIndex],
                other_features: updatedTastings[tastingIndex].other_features.filter((_, i)=>i !== featureIndex)
            };
            return {
                ...prev,
                tasting_info: updatedTastings
            };
        });
    };
    const handleExternalBookingLinkChange = (index)=>(e)=>{
            setFormData((prev)=>{
                const updatedTastings = [
                    ...prev.tasting_info
                ];
                updatedTastings[index] = {
                    ...updatedTastings[index],
                    booking_info: {
                        ...updatedTastings[index].booking_info,
                        external_booking_link: e.target.value
                    }
                };
                return {
                    ...prev,
                    tasting_info: updatedTastings
                };
            });
        };
    const handleNumberOfWinesChange = (index)=>(e)=>{
            const inputValue = e.target.value;
            const key = `wines_${index}`;
            // Update local input state
            setInputValues((prev)=>({
                    ...prev,
                    [key]: inputValue
                }));
            if (inputValue === "") {
                return;
            }
            const parsedValue = parseInt(inputValue);
            if (isNaN(parsedValue)) {
                return;
            }
            const value = Math.max(1, parsedValue);
            handleTastingChange(index, "number_of_wines_per_tasting", value);
        };
    const handleNumberOfPeopleChange = (index, position)=>(e)=>{
            const inputValue = e.target.value;
            const key = `people_${index}_${position}`;
            // Update local input state
            setInputValues((prev)=>({
                    ...prev,
                    [key]: inputValue
                }));
            if (inputValue === "") {
                return;
            }
            const parsedValue = parseInt(inputValue);
            if (isNaN(parsedValue)) {
                return;
            }
            const value = Math.max(1, parsedValue);
            setFormData((prev)=>{
                const updatedTastings = [
                    ...prev.tasting_info
                ];
                const newNumberOfPeople = [
                    ...updatedTastings[index].booking_info.number_of_people
                ];
                newNumberOfPeople[position] = value;
                // Ensure max is greater than min
                if (position === 0 && newNumberOfPeople[1] <= value) {
                    newNumberOfPeople[1] = value + 1;
                } else if (position === 1 && newNumberOfPeople[0] >= value) {
                    newNumberOfPeople[0] = Math.max(1, value - 1);
                }
                updatedTastings[index] = {
                    ...updatedTastings[index],
                    booking_info: {
                        ...updatedTastings[index].booking_info,
                        number_of_people: newNumberOfPeople
                    }
                };
                return {
                    ...prev,
                    tasting_info: updatedTastings
                };
            });
        };
    const handleTastingImagesChange = (index)=>(files)=>{
            setTastingImages((prev)=>({
                    ...prev,
                    [index]: files
                }));
        // Don't create blob URLs here - we'll upload to ImgBB later
        // Just store the files for now
        };
    // Function to get current images for a tasting (either from uploaded files or existing images)
    const getTastingImages = (index)=>{
        const uploadedFiles = tastingImages[index] || [];
        return uploadedFiles;
    };
    const removeTastingImage = (tastingIndex, imageIndex)=>{
        setFormData((prev)=>{
            const updatedTastings = [
                ...prev.tasting_info
            ];
            const currentImages = [
                ...updatedTastings[tastingIndex].images
            ];
            currentImages.splice(imageIndex, 1);
            updatedTastings[tastingIndex] = {
                ...updatedTastings[tastingIndex],
                images: currentImages
            };
            return {
                ...prev,
                tasting_info: updatedTastings
            };
        });
    };
    const removeNewTastingImage = (tastingIndex, fileIndex)=>{
        setTastingImages((prev)=>{
            const currentFiles = [
                ...prev[tastingIndex] || []
            ];
            currentFiles.splice(fileIndex, 1);
            return {
                ...prev,
                [tastingIndex]: currentFiles
            };
        });
    };
    const removeWinePhoto = (tastingIndex, wineIndex)=>{
        setFormData((prev)=>{
            const updatedTastings = [
                ...prev.tasting_info
            ];
            const updatedWines = [
                ...updatedTastings[tastingIndex].wine_details
            ];
            updatedWines[wineIndex] = {
                ...updatedWines[wineIndex],
                photo: undefined
            };
            updatedTastings[tastingIndex] = {
                ...updatedTastings[tastingIndex],
                wine_details: updatedWines
            };
            return {
                ...prev,
                tasting_info: updatedTastings
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold",
                children: "Tasting Booking Form"
            }, void 0, false, {
                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            formData.tasting_info.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border p-4 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold",
                        children: "No Tastings Added"
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-primary mt-4",
                        onClick: addInitialTasting,
                        children: "Add First Tasting"
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                lineNumber: 430,
                columnNumber: 9
            }, this) : formData.tasting_info.map((tasting, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border p-4 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold",
                            children: [
                                "Tasting #",
                                index + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 439,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn-xs btn-error mb-4",
                            onClick: ()=>removeTasting(index),
                            children: "Remove Tasting"
                        }, void 0, false, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-control",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "Tasting Title"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 445,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Enter tasting title",
                                    className: "input input-bordered",
                                    value: tasting.tasting_title || "",
                                    onChange: (e)=>handleTastingChange(index, "tasting_title", e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-control",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "Tasting Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Description",
                                    className: "textarea textarea-bordered",
                                    value: tasting.tasting_description || "",
                                    onChange: (e)=>handleTastingChange(index, "tasting_description", e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 455,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Number of People Min"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "Enter min number",
                                            className: "input input-bordered",
                                            value: inputValues[`people_${index}_0`] !== undefined ? inputValues[`people_${index}_0`] : tasting.booking_info.number_of_people[0] || "",
                                            onChange: handleNumberOfPeopleChange(index, 0),
                                            min: 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 468,
                                            columnNumber: 17
                                        }, this),
                                        tasting.booking_info.number_of_people[0] >= tasting.booking_info.number_of_people[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label-text-alt text-error",
                                                children: "Min must be less than max"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                lineNumber: 478,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 477,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 466,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Number of People Max"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "Enter max number",
                                            className: "input input-bordered",
                                            value: inputValues[`people_${index}_1`] !== undefined ? inputValues[`people_${index}_1`] : tasting.booking_info.number_of_people[1] || "",
                                            onChange: handleNumberOfPeopleChange(index, 1),
                                            min: tasting.booking_info.number_of_people[0] + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 484,
                                            columnNumber: 17
                                        }, this),
                                        tasting.booking_info.number_of_people[1] <= tasting.booking_info.number_of_people[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label-text-alt text-error",
                                                children: "Max must be greater than min"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                lineNumber: 494,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 493,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 465,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-control",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "Wine Tasting Price"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Enter fixed price for tasting (e.g., 100)",
                                    className: "input input-bordered",
                                    value: tasting.tasting_price || "",
                                    onChange: handleTastingPriceChange(index),
                                    min: 0,
                                    step: "0.01"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 502,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 500,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-control",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "External Booking Link (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 514,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "url",
                                    placeholder: "Enter booking link (e.g., https://winery.com/book)",
                                    className: "input input-bordered",
                                    value: tasting.booking_info.external_booking_link || "",
                                    onChange: handleExternalBookingLinkChange(index)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 515,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 513,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Available Times"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                            isMulti: true,
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeOptions"].map((time)=>({
                                                    value: time,
                                                    label: time
                                                })),
                                            value: tasting.available_times?.map((time)=>({
                                                    value: time,
                                                    label: time
                                                })),
                                            onChange: handleSelectChange(index, "available_times")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 525,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Wine Types"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 535,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                            isMulti: true,
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wineTypes"].map((wt)=>({
                                                    value: wt,
                                                    label: wt
                                                })),
                                            value: tasting.wine_types?.map((wt)=>({
                                                    value: wt,
                                                    label: wt
                                                })),
                                            onChange: handleSelectChange(index, "wine_types")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 536,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 524,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-control",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "Available Slots"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$datetime$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiDateTimePicker"], {
                                    dates: availableSlotDates,
                                    onChange: updateSlotDates(index)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 547,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 545,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-control",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "Number of Wines Per Tasting"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 551,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Enter number of wines",
                                    className: "input input-bordered",
                                    value: inputValues[`wines_${index}`] !== undefined ? inputValues[`wines_${index}`] : tasting.number_of_wines_per_tasting || "",
                                    onChange: handleNumberOfWinesChange(index),
                                    min: 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 550,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Special Features"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 563,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                            isMulti: true,
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["specialFeatures"].map((feature)=>({
                                                    value: feature,
                                                    label: feature
                                                })),
                                            value: tasting.special_features?.map((feature)=>({
                                                    value: feature,
                                                    label: feature
                                                })),
                                            onChange: handleSelectChange(index, "special_features")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label flex items-center gap-1",
                                            children: [
                                                "Select AVA",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                                                    style: {
                                                        color: "#5A0C2C"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 572,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "select select-bordered",
                                            value: tasting.ava || "",
                                            onChange: (e)=>handleTastingChange(index, "ava", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select AVA"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 13
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regions"].map((ava)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: ava,
                                                        children: ava
                                                    }, ava, false, {
                                                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 15
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 576,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 571,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 561,
                            columnNumber: 2
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-control",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "Images Upload"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 593,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Multi$2d$image$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultipleImageUpload"], {
                                    files: getTastingImages(index),
                                    onChange: handleTastingImagesChange(index)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 592,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Wine"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 604,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Wine Name",
                                                    className: "input input-bordered w-full",
                                                    value: newWine.name,
                                                    onChange: (e)=>setNewWine({
                                                            ...newWine,
                                                            name: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Wine description",
                                                    className: "input input-bordered w-full",
                                                    value: newWine.description || "",
                                                    onChange: (e)=>setNewWine({
                                                            ...newWine,
                                                            description: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    placeholder: "Wine year",
                                                    className: "input input-bordered w-full",
                                                    value: newWine.year || "",
                                                    onChange: (e)=>setNewWine({
                                                            ...newWine,
                                                            year: parseInt(e.target.value) || undefined
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Tasting notes",
                                                    className: "input input-bordered w-full",
                                                    value: newWine.tasting_notes || "",
                                                    onChange: (e)=>setNewWine({
                                                            ...newWine,
                                                            tasting_notes: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Multi$2d$image$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultipleImageUpload"], {
                                                    files: tastingWinePhotos[index] || [],
                                                    onChange: (files)=>setTastingWinePhotos((prev)=>({
                                                                ...prev,
                                                                [index]: files
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn btn-primary",
                                                    onClick: addWine(index),
                                                    children: "Add Wine"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 607,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: tasting.wine_details?.map((wine, wineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center p-2 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                wine.photo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: wine.photo,
                                                                            alt: wine.name,
                                                                            className: "w-8 h-8 object-cover rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                                            lineNumber: 653,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: "absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs",
                                                                            onClick: ()=>removeWinePhoto(index, wineIndex),
                                                                            children: "×"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                                            lineNumber: 658,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: wine.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                                            lineNumber: 668,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        wine.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: [
                                                                                "(",
                                                                                wine.year,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                                            lineNumber: 669,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        wine.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-600 truncate max-w-32",
                                                                            children: wine.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                                            lineNumber: 670,
                                                                            columnNumber: 48
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                            lineNumber: 650,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "btn btn-xs btn-error",
                                                            onClick: ()=>removeWine(index, wineIndex),
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                            lineNumber: 673,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, wine.id, true, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 647,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 603,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Tour (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 682,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Tour Option",
                                                    className: "input input-bordered w-full",
                                                    value: newTour.description,
                                                    onChange: (e)=>setNewTour({
                                                            ...newTour,
                                                            description: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    placeholder: "Tour Cost",
                                                    className: "input input-bordered w-full",
                                                    value: newTour.cost || "",
                                                    onChange: (e)=>setNewTour({
                                                            ...newTour,
                                                            cost: parseFloat(e.target.value) || 0
                                                        }),
                                                    min: 0,
                                                    step: "0.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn btn-primary",
                                                    onClick: submitTour(index),
                                                    children: "Add Tour"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 685,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: tasting.tours?.tour_options?.map((tour, tourIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center p-2 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                tour.description,
                                                                ": $",
                                                                tour.cost
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                            lineNumber: 709,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "btn btn-xs btn-error",
                                                            onClick: ()=>removeTour(index, tourIndex),
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, tourIndex, true, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 681,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 602,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Food Available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 723,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Food Available",
                                                    className: "input input-bordered w-full",
                                                    value: foodPairingOption.name,
                                                    onChange: (e)=>setFoodPairingOption({
                                                            ...foodPairingOption,
                                                            name: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    placeholder: "Price",
                                                    className: "input input-bordered w-full",
                                                    value: foodPairingOption.price || "",
                                                    onChange: (e)=>setFoodPairingOption({
                                                            ...foodPairingOption,
                                                            price: parseFloat(e.target.value) || 0
                                                        }),
                                                    min: 0,
                                                    step: "0.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn btn-primary",
                                                    onClick: addFoodPairingOption(index),
                                                    children: "Add Food Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 726,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: tasting.food_pairing_options?.map((pairing, optionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center p-2 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                pairing.name,
                                                                ": $",
                                                                pairing.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "btn btn-xs btn-error",
                                                            onClick: ()=>removeFoodPairingOption(index, optionIndex),
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, pairing.id, true, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 747,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 722,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-control",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Other Features"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 762,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Other Feature",
                                                    className: "input input-bordered w-full",
                                                    value: otherFeature.description,
                                                    onChange: (e)=>setOtherFeature({
                                                            ...otherFeature,
                                                            description: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 766,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    placeholder: "Feature Cost",
                                                    className: "input input-bordered w-full",
                                                    value: otherFeature.cost || "",
                                                    onChange: (e)=>setOtherFeature({
                                                            ...otherFeature,
                                                            cost: parseFloat(e.target.value) || 0
                                                        }),
                                                    min: 0,
                                                    step: "0.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn btn-primary",
                                                    onClick: addOtherFeature(index),
                                                    children: "Add Feature"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 765,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: tasting.other_features?.map((feature, featureIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center p-2 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                feature.description,
                                                                ": $",
                                                                feature.cost
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "btn btn-xs btn-error",
                                                            onClick: ()=>removeFeature(index, featureIndex),
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, featureIndex, true, {
                                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                            lineNumber: 786,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                    lineNumber: 761,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 721,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-primary",
                                onClick: addTasting(index),
                                children: "Add Tasting"
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                lineNumber: 802,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                            lineNumber: 801,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                    lineNumber: 438,
                    columnNumber: 11
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-control",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "label",
                        children: "Payment Method"
                    }, void 0, false, {
                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "paymentMethod",
                                        value: "pay_winery",
                                        checked: formData.payment_method?.type === "pay_winery",
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    payment_method: {
                                                        type: e.target.value
                                                    }
                                                })),
                                        className: "radio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                        lineNumber: 814,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2",
                                        children: "Pay at Winery"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                        lineNumber: 825,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                lineNumber: 813,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "paymentMethod",
                                        value: "pay_stripe",
                                        checked: formData.payment_method?.type === "pay_stripe",
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    payment_method: {
                                                        type: e.target.value
                                                    }
                                                })),
                                        className: "radio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                        lineNumber: 828,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2",
                                        children: "Pay in NVW App (Stripe)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                lineNumber: 827,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "paymentMethod",
                                        value: "external_booking",
                                        checked: formData.payment_method?.type === "external_booking",
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    payment_method: {
                                                        type: e.target.value,
                                                        external_booking_link: prev.payment_method?.external_booking_link || ''
                                                    }
                                                })),
                                        className: "radio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                        lineNumber: 842,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2",
                                        children: "External Booking Link"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                        lineNumber: 856,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                lineNumber: 841,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                        lineNumber: 812,
                        columnNumber: 9
                    }, this),
                    formData.payment_method?.type === "external_booking" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "label",
                                children: "External Booking Link"
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                lineNumber: 863,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                placeholder: "https://winery-booking-site.com/book",
                                className: "input input-bordered w-full",
                                value: formData.payment_method?.external_booking_link || "",
                                onChange: (e)=>setFormData((prev)=>({
                                            ...prev,
                                            payment_method: {
                                                type: prev.payment_method?.type || "external_booking",
                                                external_booking_link: e.target.value
                                            }
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                lineNumber: 864,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 mt-2",
                                children: "When customers book, they will be redirected to this link for payment processing."
                            }, void 0, false, {
                                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                                lineNumber: 877,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                        lineNumber: 862,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                lineNumber: 810,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-control",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "label",
                    children: [
                        "Total Amount: $",
                        formData.tasting_info.reduce((sum, tasting)=>{
                            const tastingCost = tasting.tasting_price || 0;
                            const tourCost = tasting.tours?.tour_options?.reduce((tSum, tour)=>tSum + (tour.cost || 0), 0) || 0;
                            const foodCost = tasting.food_pairing_options?.reduce((fSum, pairing)=>fSum + (pairing.price || 0), 0) || 0;
                            const featureCost = tasting.other_features?.reduce((fSum, feature)=>fSum + (feature.cost || 0), 0) || 0;
                            return sum + tastingCost + tourCost + foodCost + featureCost;
                        }, 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                    lineNumber: 885,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
                lineNumber: 884,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/winery-stepper/tasting-booking-step.tsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
};
_s(TastingBookingForm, "Ei+o19vnMajrJEAv5Rv/CZfGGUY=");
_c = TastingBookingForm;
var _c;
__turbopack_refresh__.register(_c, "TastingBookingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/fileUpload.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fileUpload": (()=>fileUpload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
async function fileUpload(files) {
    const apiKey = "812b8a2ed8cf66bebd06276bf07e119f";
    const uploadPromises = files.map((file)=>{
        const formData = new FormData();
        formData.append("image", file);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData).then((response)=>response.data.data.url).catch((error)=>{
            console.error("Error uploading the image", error);
            return null;
        });
    });
    const uploadedUrls = await Promise.all(uploadPromises);
    return uploadedUrls.filter((url)=>url !== null);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/dashboard/winery/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>WineryAdminStepperPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$winery$2d$stepper$2f$basic$2d$info$2d$step$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/winery-stepper/basic-info-step.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$winery$2d$stepper$2f$tasting$2d$booking$2d$step$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/winery-stepper/tasting-booking-step.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fileUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/fileUpload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
const initialState = {
    name: "",
    description: "",
    location: {
        address: "",
        latitude: 0,
        longitude: 0,
        is_mountain_location: false
    },
    contact_info: {
        email: "",
        phone: "",
        website: ""
    },
    tasting_info: [
        {
            tasting_title: "",
            tasting_description: "",
            tasting_price: 0,
            available_times: [],
            wine_types: [],
            number_of_wines_per_tasting: 1,
            special_features: [],
            images: [],
            food_pairing_options: [],
            ava: "",
            tours: {
                available: false,
                tour_price: 0,
                tour_options: []
            },
            wine_details: [],
            booking_info: {
                booking_enabled: false,
                max_guests_per_slot: 0,
                number_of_people: [
                    1,
                    10
                ],
                dynamic_pricing: {
                    enabled: false,
                    weekend_multiplier: 1
                },
                available_slots: [],
                external_booking_link: ""
            },
            other_features: []
        }
    ],
    amenities: {
        virtual_sommelier: false,
        augmented_reality_tours: false,
        handicap_accessible: false
    },
    user_reviews: [],
    transportation: {
        uber_availability: false,
        lyft_availability: false,
        distance_from_user: 0
    },
    payment_method: {
        type: "pay_winery"
    }
};
function WineryAdminStepperPage() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [uploadedFiles, setUploadedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableSlotDates, setAvailableSlotDates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tastingImages, setTastingImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const wineryId = searchParams.get("id");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WineryAdminStepperPage.useEffect": ()=>{
            if (wineryId) {
                setLoading(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/winery/${wineryId}`).then({
                    "WineryAdminStepperPage.useEffect": (res)=>{
                        if (res.data && res.data.winery) {
                            const wineryData = res.data.winery;
                            // Migrate old payment_method format to new format
                            if (typeof wineryData.payment_method === 'string') {
                                wineryData.payment_method = {
                                    type: wineryData.payment_method,
                                    external_booking_link: ''
                                };
                            }
                            setFormData(wineryData);
                        }
                    }
                }["WineryAdminStepperPage.useEffect"]).catch({
                    "WineryAdminStepperPage.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load winery for editing.")
                }["WineryAdminStepperPage.useEffect"]).finally({
                    "WineryAdminStepperPage.useEffect": ()=>setLoading(false)
                }["WineryAdminStepperPage.useEffect"]);
            }
        }
    }["WineryAdminStepperPage.useEffect"], [
        wineryId
    ]);
    const validateBasicInfo = ()=>{
        const { name, description, contact_info, location } = formData;
        if (!name || name.trim() === "") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Winery name is required");
            return false;
        }
        if (!description || description.trim() === "") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Description is required");
            return false;
        }
        if (!contact_info.email || contact_info.email.trim() === "") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Email is required");
            return false;
        }
        if (!contact_info.phone || contact_info.phone.trim() === "") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Phone number is required");
            return false;
        }
        if (!location.address || location.address.trim() === "") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Address is required");
            return false;
        }
        return true;
    };
    const validateTastingInfo = ()=>{
        if (formData.tasting_info.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("At least one tasting must be added");
            return false;
        }
        for(let i = 0; i < formData.tasting_info.length; i++){
            const tasting = formData.tasting_info[i];
            if (!tasting.tasting_title || tasting.tasting_title.trim() === "") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Tasting #${i + 1}: Tasting title is required`);
                return false;
            }
            if (!tasting.tasting_description || tasting.tasting_description.trim() === "") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Tasting #${i + 1}: Tasting description is required`);
                return false;
            }
            if (!tasting.tasting_price || tasting.tasting_price <= 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Tasting #${i + 1}: Tasting price must be greater than 0`);
                return false;
            }
            if (!tasting.available_times || tasting.available_times.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Tasting #${i + 1}: At least one available time must be selected`);
                return false;
            }
            if (!tasting.wine_types || tasting.wine_types.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Tasting #${i + 1}: At least one wine type must be selected`);
                return false;
            }
            if (!tasting.ava || tasting.ava.trim() === "") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Tasting #${i + 1}: AVA selection is required`);
                return false;
            }
            // Check if there are any images (either existing or newly uploaded)
            const hasExistingImages = tasting.images && tasting.images.length > 0;
            const hasNewImages = tastingImages[i] && tastingImages[i].length > 0;
            if (!hasExistingImages && !hasNewImages) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Tasting #${i + 1}: At least one image is required`);
                return false;
            }
        }
        return true;
    };
    const handleNext = ()=>{
        if (activeStep === 0 && !validateBasicInfo()) {
            return;
        }
        setActiveStep((prev)=>prev + 1);
    };
    const handleBack = ()=>setActiveStep((prev)=>prev - 1);
    const handleSubmit = async ()=>{
        // Validate both steps before submitting
        if (!validateBasicInfo()) {
            return;
        }
        if (!validateTastingInfo()) {
            return;
        }
        setLoading(true);
        try {
            // Collect all files from global uploads and individual tastings
            const allFiles = [
                ...uploadedFiles
            ];
            // Add files from individual tastings
            Object.values(tastingImages).forEach((files)=>{
                allFiles.push(...files);
            });
            // Upload all files to ImgBB
            const filesUrls = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fileUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileUpload"])(allFiles);
            const updatedFormData = {
                ...formData
            };
            if (filesUrls.length > 0) {
                // Distribute URLs properly to each tasting
                let urlIndex = 0;
                updatedFormData.tasting_info = updatedFormData.tasting_info.map((tasting, index)=>{
                    const filesForThisTasting = tastingImages[index] || [];
                    const urlsForThisTasting = [];
                    // Get URLs for this tasting's files
                    for(let i = 0; i < filesForThisTasting.length && urlIndex < filesUrls.length; i++){
                        urlsForThisTasting.push(filesUrls[urlIndex]);
                        urlIndex++;
                    }
                    // Combine with existing images
                    const existingImages = tasting.images || [];
                    return {
                        ...tasting,
                        images: [
                            ...existingImages,
                            ...urlsForThisTasting
                        ]
                    };
                });
            }
            if (wineryId) {
                // Update existing winery
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/api/admin/wineries/${wineryId}`, updatedFormData);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Winery updated successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true
                });
            } else {
                // Create new winery
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/winery", updatedFormData);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Winery added successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true
                });
            }
            setFormData({
                ...initialState
            });
            setUploadedFiles([]);
            setTastingImages({});
            setAvailableSlotDates([]);
            setActiveStep(0);
            router.push("/admin/dashboard/winery/list");
        } catch (error) {
            console.error("Error saving winery:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error saving winery. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true
            });
        } finally{
            setLoading(false);
        }
    };
    const renderStep = ()=>{
        switch(activeStep){
            case 0:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$winery$2d$stepper$2f$basic$2d$info$2d$step$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BasicInfoForm"], {
                    formData: formData,
                    setFormData: setFormData
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                    lineNumber: 266,
                    columnNumber: 16
                }, this);
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$winery$2d$stepper$2f$tasting$2d$booking$2d$step$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TastingBookingForm"], {
                    formData: formData,
                    setFormData: setFormData,
                    uploadedFiles: uploadedFiles,
                    setUploadedFiles: setUploadedFiles,
                    availableSlotDates: availableSlotDates,
                    setAvailableSlotDates: setAvailableSlotDates,
                    tastingImages: tastingImages,
                    setTastingImages: setTastingImages
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-4 bg-gray-100 relative top-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-4xl bg-base-100 p-5 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-center mb-6",
                    children: wineryId ? "Edit Winery" : "Add New Winery"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "steps mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `step ${activeStep >= 0 ? "step-primary" : ""}`,
                            children: "Basic Info"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `step ${activeStep >= 1 ? "step-primary" : ""}`,
                            children: "Tasting & Booking"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loader border-t-4 border-b-4 border-white w-12 h-12 rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                        lineNumber: 296,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    ref: formRef,
                    onSubmit: (e)=>e.preventDefault(),
                    className: "space-y-6",
                    id: "winery-form",
                    children: [
                        renderStep(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            style: {
                                marginBottom: "40px"
                            },
                            children: [
                                activeStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleBack,
                                    className: "btn",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                activeStep < 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleNext,
                                    className: "btn btn-primary ml-auto",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    className: "btn btn-success ml-auto",
                                    disabled: loading,
                                    children: wineryId ? "Update Winery" : "Submit Winery"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
            lineNumber: 287,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard/winery/page.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
_s(WineryAdminStepperPage, "+vHBO3aS8U934bJEdFpTjfjZ/fs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = WineryAdminStepperPage;
var _c;
__turbopack_refresh__.register(_c, "WineryAdminStepperPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/dashboard/winery/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_3ef546._.js.map