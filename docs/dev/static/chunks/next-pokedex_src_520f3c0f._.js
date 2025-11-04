(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-pokedex/src/components/icons/SearchIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SearchIcon.tsx
__turbopack_context__.s([
    "SearchIcon",
    ()=>SearchIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SearchIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        fill: "none",
        height: "1em",
        viewBox: "0 0 24 24",
        width: "1em",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/next-pokedex/src/components/icons/SearchIcon.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/next-pokedex/src/components/icons/SearchIcon.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SearchIcon;
var _c;
__turbopack_context__.k.register(_c, "SearchIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-pokedex/src/hooks/useTypeColors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Custom hook for Pokémon type colors
__turbopack_context__.s([
    "useTypeColors",
    ()=>useTypeColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
// Type color mapping (should match CSS variables)
const TYPE_COLORS = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC"
};
function useTypeColors() {
    _s();
    const getTypeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTypeColors.useMemo[getTypeColor]": ()=>{
            return ({
                "useTypeColors.useMemo[getTypeColor]": (type)=>{
                    return TYPE_COLORS[type.toLowerCase()] || "#A8A878"; // Default to normal type color
                }
            })["useTypeColors.useMemo[getTypeColor]"];
        }
    }["useTypeColors.useMemo[getTypeColor]"], []);
    return {
        getTypeColor,
        typeColors: TYPE_COLORS
    };
}
_s(useTypeColors, "0XvVqiHTpmz9MuzzDzt4/3Tdv9E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-pokedex/src/components/TypeBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TypeBadge.tsx
__turbopack_context__.s([
    "TypeBadge",
    ()=>TypeBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/hooks/useTypeColors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const TypeBadge = ({ type, size = "sm" })=>{
    _s();
    const { getTypeColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeColors"])();
    const color = getTypeColor(type);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
        className: "capitalize animate-fade-in",
        color: color,
        variant: "flat",
        size: size,
        children: type
    }, void 0, false, {
        fileName: "[project]/next-pokedex/src/components/TypeBadge.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TypeBadge, "sDKbfnBiL6N7gNOlgsUxd45rASw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeColors"]
    ];
});
_c = TypeBadge;
var _c;
__turbopack_context__.k.register(_c, "TypeBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-pokedex/src/components/PokemonCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Reusable Pokémon Card component for grid/list views
__turbopack_context__.s([
    "default",
    ()=>PokemonCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/hooks/useTypeColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$TypeBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/components/TypeBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PokemonCard({ name, image, types, number }) {
    _s();
    const { getTypeColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeColors"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/pokemon/${name}`,
        passHref: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
            isPressable: true,
            className: "grid-card rounded-2xl p-0 relative overflow-hidden text-left focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition-shadow duration-300 animate-fade-in",
            role: "listitem",
            "aria-label": name,
            as: "div",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-t-lg",
                    style: {
                        background: `linear-gradient(135deg, ${getTypeColor(types[0])}, ${getTypeColor(types[0])}80)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pk-number absolute right-3 top-2 text-xs font-bold text-white",
                            children: [
                                "#",
                                number
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "capitalize font-extrabold text-lg mb-2 text-white",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 flex-wrap",
                                    children: types.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$TypeBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeBadge"], {
                                            type: type
                                        }, type, false, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end p-2",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: image,
                            alt: name,
                            className: "thumb w-20 h-20 object-contain pointer-events-none",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-pokedex/src/components/PokemonCard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(PokemonCard, "sDKbfnBiL6N7gNOlgsUxd45rASw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeColors"]
    ];
});
_c = PokemonCard;
var _c;
__turbopack_context__.k.register(_c, "PokemonCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-pokedex/src/components/PokemonList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PokemonList.tsx
__turbopack_context__.s([
    "PokemonList",
    ()=>PokemonList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$pagination$2f$dist$2f$chunk$2d$MT6723RH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__pagination_default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/pagination/dist/chunk-MT6723RH.mjs [app-client] (ecmascript) <export pagination_default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$icons$2f$SearchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/components/icons/SearchIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$PokemonCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/components/PokemonCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PokemonList = ({ pokemons, loading, error })=>{
    _s();
    // If loading, show loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading Pokémon..."
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // If error, show error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-danger",
                children: [
                    "Error loading Pokémon: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // If no pokemons, show empty state
    if (!pokemons || pokemons.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No Pokémon found"
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 20;
    const filteredPokemon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PokemonList.useMemo[filteredPokemon]": ()=>{
            return pokemons.filter({
                "PokemonList.useMemo[filteredPokemon]": (pokemon)=>pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            }["PokemonList.useMemo[filteredPokemon]"]);
        }
    }["PokemonList.useMemo[filteredPokemon]"], [
        pokemons,
        searchTerm
    ]);
    const paginatedPokemon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PokemonList.useMemo[paginatedPokemon]": ()=>{
            const startIndex = (currentPage - 1) * itemsPerPage;
            return filteredPokemon.slice(startIndex, startIndex + itemsPerPage);
        }
    }["PokemonList.useMemo[paginatedPokemon]"], [
        filteredPokemon,
        currentPage
    ]);
    const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    isClearable: true,
                    radius: "lg",
                    classNames: {
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60"
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50 dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70 dark:hover:bg-default/70",
                            "group-data-[focused=true]:bg-default-200/50 dark:group-data-[focused=true]:bg-default/60",
                            "!cursor-text"
                        ]
                    },
                    placeholder: "Search Pokémon...",
                    startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$icons$2f$SearchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchIcon"], {}, void 0, false, {
                            fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, void 0),
                    value: searchTerm,
                    onClear: ()=>setSearchTerm(""),
                    onChange: (e)=>{
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }
                }, void 0, false, {
                    fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",
                children: paginatedPokemon.map((pokemon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$PokemonCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: pokemon.name,
                        image: pokemon.image,
                        types: pokemon.types,
                        number: pokemon.id
                    }, pokemon.id, false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$pagination$2f$dist$2f$chunk$2d$MT6723RH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__pagination_default__as__Pagination$3e$__["Pagination"], {
                    total: totalPages,
                    initialPage: 1,
                    page: currentPage,
                    onChange: setCurrentPage,
                    classNames: {
                        wrapper: "gap-2",
                        item: "w-8 h-8 text-small rounded-full shadow-lg",
                        cursor: "shadow-lg"
                    },
                    showControls: true,
                    disableAnimation: true
                }, void 0, false, {
                    fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/next-pokedex/src/components/PokemonList.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PokemonList, "b3i/2B2Cg99+rrgN3TwjVsypUhg=");
_c = PokemonList;
var _c;
__turbopack_context__.k.register(_c, "PokemonList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-pokedex/src/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SearchBar.tsx
__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$icons$2f$SearchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/components/icons/SearchIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SearchBar({ onSearch }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSearch(searchQuery);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex gap-2 mb-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                "aria-label": "Search Pokémon",
                placeholder: "Search Pokémon...",
                value: searchQuery,
                onChange: (e)=>setSearchQuery(e.target.value),
                className: "flex-1",
                startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$icons$2f$SearchIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchIcon"], {}, void 0, false, {
                    fileName: "[project]/next-pokedex/src/components/SearchBar.tsx",
                    lineNumber: 28,
                    columnNumber: 23
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/SearchBar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                type: "submit",
                color: "primary",
                className: "hover:scale-105 transition-transform",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/SearchBar.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-pokedex/src/components/SearchBar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-pokedex/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Main Pokédex landing page with hero section and Pokémon grid
__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/divider/dist/chunk-44JHHBS2.mjs [app-client] (ecmascript) <export divider_default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$PokemonList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/components/PokemonList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$contexts$2f$PokemonContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/contexts/PokemonContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$utils$2f$fetchPokemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/utils/fetchPokemon.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function HomePage() {
    _s();
    // State for search term
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Get Pokémon data from context
    const { pokemonList, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$contexts$2f$PokemonContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePokemon"])();
    // Filter Pokémon based on search term
    const filteredPokemons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[filteredPokemons]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$utils$2f$fetchPokemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterPokemon"])(pokemonList, search);
        }
    }["HomePage.useMemo[filteredPokemons]"], [
        pokemonList,
        search
    ]);
    const handleSearch = (query)=>{
        setSearch(query);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 sm:px-6 pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-center py-12 md:py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4",
                        children: "Discover Pokémon"
                    }, void 0, false, {
                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl text-default-600 max-w-2xl mx-auto mb-8",
                        children: "Explore the world of Pokémon with our interactive Pokédex. Search, filter, and learn about your favorite Pokémon."
                    }, void 0, false, {
                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto flex flex-col sm:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onSearch: handleSearch
                            }, void 0, false, {
                                fileName: "[project]/next-pokedex/src/app/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                as: "a",
                                href: "/types",
                                color: "secondary",
                                variant: "shadow",
                                className: "font-medium h-14",
                                radius: "full",
                                children: "Browse Types"
                            }, void 0, false, {
                                fileName: "[project]/next-pokedex/src/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-pokedex/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "my-8"
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                className: "text-center py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-primary",
                                        children: pokemonList?.length || 0
                                    }, void 0, false, {
                                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-default-600",
                                        children: "Pokémon"
                                    }, void 0, false, {
                                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/app/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                className: "text-center py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-secondary",
                                        children: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-default-600",
                                        children: "Types"
                                    }, void 0, false, {
                                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                className: "text-center py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-success",
                                        children: "100+"
                                    }, void 0, false, {
                                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-default-600",
                                        children: "Abilities"
                                    }, void 0, false, {
                                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/app/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-pokedex/src/app/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "my-8"
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "Pokémon Collection",
                className: "py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: "Pokémon Collection"
                            }, void 0, false, {
                                fileName: "[project]/next-pokedex/src/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-default-600",
                                children: [
                                    filteredPokemons.length,
                                    " Pokémon found"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/app/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$PokemonList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PokemonList"], {
                        pokemons: filteredPokemons,
                        loading: loading,
                        error: error
                    }, void 0, false, {
                        fileName: "[project]/next-pokedex/src/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-pokedex/src/app/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-pokedex/src/app/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(HomePage, "RK5ppWyyyayNvucJiXXg9pMPg2A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$contexts$2f$PokemonContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePokemon"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=next-pokedex_src_520f3c0f._.js.map