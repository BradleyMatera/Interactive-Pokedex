(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/next-pokedex/src/components/PokemonDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PokemonDetails.tsx
__turbopack_context__.s([
    "default",
    ()=>PokemonDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$TBXVIZ2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/tabs/dist/chunk-TBXVIZ2K.mjs [app-client] (ecmascript) <export tabs_default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/tabs/dist/chunk-FXLYF44B.mjs [app-client] (ecmascript) <export tab_item_base_default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/image/dist/chunk-VKW4DPLJ.mjs [app-client] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/hooks/useTypeColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$TypeBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/components/TypeBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PokemonDetails({ pokemon }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desc");
    const primaryType = pokemon.types[0] || "normal";
    const { getTypeColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeColors"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                onClick: ()=>router.back(),
                variant: "light",
                className: "mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors animate-fade-in",
                children: "← Back to Pokédex"
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                className: "mb-8 overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 rounded-t-lg",
                        style: {
                            background: `linear-gradient(135deg, ${getTypeColor(primaryType)}, ${getTypeColor(primaryType)}80)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row items-center animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:w-1/2 flex justify-center mb-6 md:mb-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-xl opacity-50 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                                src: pokemon.image,
                                                alt: pokemon.name,
                                                width: 300,
                                                height: 300,
                                                className: "relative z-10 animate-fade-in"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:w-1/2 text-center md:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl md:text-5xl font-bold capitalize mb-4 animate-fade-in",
                                            children: pokemon.name
                                        }, void 0, false, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center md:justify-start gap-2 my-4 flex-wrap",
                                            children: pokemon.types.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$TypeBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeBadge"], {
                                                    type: type
                                                }, type, false, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-mono animate-fade-in",
                                            children: [
                                                "#",
                                                pokemon.id.toString().padStart(3, "0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-white dark:bg-gray-800 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Weight"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold",
                                                children: [
                                                    (pokemon.weight / 10).toFixed(1),
                                                    " kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Height"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold",
                                                children: [
                                                    (pokemon.height / 10).toFixed(1),
                                                    " m"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg md:col-span-2 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Abilities"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold capitalize",
                                                children: pokemon.abilities.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-4",
                                        children: "Base Stats"
                                    }, void 0, false, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    pokemon.stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 animate-fade-in-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium capitalize",
                                                            children: stat.name.replace("special-", "S-")
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: stat.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 rounded-full transition-all duration-1000 ease-out",
                                                        style: {
                                                            width: `${Math.min(100, stat.value / 180 * 100)}%`,
                                                            backgroundColor: getTypeColor(primaryType)
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, stat.name, true, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$TBXVIZ2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__["Tabs"], {
                "aria-label": "Pokemon Details",
                selectedKey: activeTab,
                onSelectionChange: (key)=>setActiveTab(key),
                variant: "underlined",
                className: "mb-6 hover:scale-105 transition-transform",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Description",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 dark:text-gray-300",
                                children: pokemon.description
                            }, void 0, false, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, "desc", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Evolution",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: pokemon.evolutionChain.length > 0 ? pokemon.evolutionChain.map((evolution, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-md opacity-50 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                                        src: evolution.image,
                                                        alt: evolution.name,
                                                        width: 100,
                                                        height: 100,
                                                        className: "relative z-10 hover:scale-110 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "capitalize mt-2 font-medium",
                                                children: evolution.name
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 134,
                                                columnNumber: 21
                                            }, this),
                                            index < pokemon.evolutionChain.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center my-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl animate-bounce",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500 dark:text-gray-400",
                                                        children: "Evolve"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 136,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, evolution.name, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 dark:text-gray-400 animate-fade-in",
                                    children: "This Pokémon does not evolve."
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, "evo", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Moves",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4",
                                    children: "Moves"
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: pokemon.moves.slice(0, 10).map((move, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold capitalize mb-2",
                                                    children: move.name.replace("-", " ")
                                                }, void 0, false, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600 dark:text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Type: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$components$2f$TypeBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeBadge"], {
                                                                    type: move.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Power: ",
                                                                move.power || "N/A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Accuracy: ",
                                                                move.accuracy || "N/A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "PP: ",
                                                                move.pp || "N/A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, "moves", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Breeding",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Egg Groups"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold capitalize",
                                                children: pokemon.breeding.eggGroups.map((group)=>group.replace("-", " ")).join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Hatch Counter"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: pokemon.breeding.hatchCounter
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Gender Ratio"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: pokemon.breeding.gender.male === "—" ? "Genderless" : `${pokemon.breeding.gender.male}, ${pokemon.breeding.gender.female}`
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Growth Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold capitalize",
                                                children: pokemon.breeding.growthRate.replace("-", " ") || "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Capture Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: pokemon.breeding.captureRate
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Base Happiness"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: pokemon.breeding.baseHappiness
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    }, "breed", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Locations",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4",
                                    children: "Locations"
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                pokemon.locations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: pokemon.locations.map((location, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold",
                                                    children: location.name
                                                }, void 0, false, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 dark:text-gray-300",
                                                    children: [
                                                        "Region: ",
                                                        location.region
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 dark:text-gray-400 animate-fade-in",
                                    children: "No location data available."
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    }, "locations", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(PokemonDetails, "sQFmnLCvVi9xDogqUW5Cf3C1fqQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeColors"]
    ];
});
_c = PokemonDetails;
var _c;
__turbopack_context__.k.register(_c, "PokemonDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=next-pokedex_src_5ab4a7d1._.js.map