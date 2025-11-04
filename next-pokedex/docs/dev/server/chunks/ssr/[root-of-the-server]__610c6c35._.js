module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/next-pokedex/src/hooks/useTypeColors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Custom hook for Pokémon type colors
__turbopack_context__.s([
    "useTypeColors",
    ()=>useTypeColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const getTypeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (type)=>{
            return TYPE_COLORS[type.toLowerCase()] || "#A8A878"; // Default to normal type color
        };
    }, []);
    return {
        getTypeColor,
        typeColors: TYPE_COLORS
    };
}
}),
"[project]/next-pokedex/src/components/PokemonDetails.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PokemonDetails.tsx
__turbopack_context__.s([
    "default",
    ()=>PokemonDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-ssr] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-ssr] (ecmascript) <export chip_default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$TBXVIZ2K$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/tabs/dist/chunk-TBXVIZ2K.mjs [app-ssr] (ecmascript) <export tabs_default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/tabs/dist/chunk-FXLYF44B.mjs [app-ssr] (ecmascript) <export tab_item_base_default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/@nextui-org/image/dist/chunk-VKW4DPLJ.mjs [app-ssr] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-pokedex/src/hooks/useTypeColors.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function PokemonDetails({ pokemon }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("desc");
    const primaryType = pokemon.types[0] || "normal";
    const { getTypeColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$src$2f$hooks$2f$useTypeColors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTypeColors"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                onClick: ()=>router.back(),
                variant: "light",
                className: "mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors animate-fade-in",
                children: "← Back to Pokédex"
            }, void 0, false, {
                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                className: "mb-8 overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 rounded-t-lg",
                        style: {
                            background: `linear-gradient(135deg, ${getTypeColor(primaryType)}, ${getTypeColor(primaryType)}80)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row items-center animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:w-1/2 flex justify-center mb-6 md:mb-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-xl opacity-50 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:w-1/2 text-center md:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl md:text-5xl font-bold capitalize mb-4 animate-fade-in",
                                            children: pokemon.name
                                        }, void 0, false, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center md:justify-start gap-2 my-4 flex-wrap",
                                            children: pokemon.types.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                                    className: `type-chip type-${type} text-white animate-fade-in hover:scale-110 transition-transform shadow-lg hover:shadow-xl transform-gpu backdrop-blur-sm border-2 border-white/30 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3`,
                                                    variant: "solid",
                                                    style: {
                                                        backgroundColor: getTypeColor(type),
                                                        color: 'white'
                                                    },
                                                    children: type
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-mono animate-fade-in",
                                            children: [
                                                "#",
                                                pokemon.id.toString().padStart(3, "0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 65,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-white dark:bg-gray-800 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Weight"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold",
                                                children: [
                                                    (pokemon.weight / 10).toFixed(1),
                                                    " kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Height"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold",
                                                children: [
                                                    (pokemon.height / 10).toFixed(1),
                                                    " m"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg md:col-span-2 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Abilities"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold capitalize",
                                                children: pokemon.abilities.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-4",
                                        children: "Base Stats"
                                    }, void 0, false, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    pokemon.stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 animate-fade-in-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium capitalize",
                                                            children: stat.name.replace("special-", "S-")
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: stat.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 rounded-full transition-all duration-1000 ease-out",
                                                        style: {
                                                            width: `${Math.min(100, stat.value / 180 * 100)}%`,
                                                            backgroundColor: getTypeColor(primaryType)
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, stat.name, true, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$TBXVIZ2K$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__["Tabs"], {
                "aria-label": "Pokemon Details",
                selectedKey: activeTab,
                onSelectionChange: (key)=>setActiveTab(key),
                variant: "underlined",
                className: "mb-6 hover:scale-105 transition-transform",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Description",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 dark:text-gray-300",
                                children: pokemon.description
                            }, void 0, false, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, "desc", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Evolution",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: pokemon.evolutionChain.length > 0 ? pokemon.evolutionChain.map((evolution, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-md opacity-50 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                                        src: evolution.image,
                                                        alt: evolution.name,
                                                        width: 100,
                                                        height: 100,
                                                        className: "relative z-10 hover:scale-110 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 134,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "capitalize mt-2 font-medium",
                                                children: evolution.name
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this),
                                            index < pokemon.evolutionChain.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center my-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl animate-bounce",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500 dark:text-gray-400",
                                                        children: "Evolve"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 146,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, evolution.name, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 dark:text-gray-400 animate-fade-in",
                                    children: "This Pokémon does not evolve."
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, "evo", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Moves",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4",
                                    children: "Moves"
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: pokemon.moves.slice(0, 10).map((move, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold capitalize mb-2",
                                                    children: move.name.replace("-", " ")
                                                }, void 0, false, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600 dark:text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Type: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                                                    className: `type-chip type-${move.type} text-xs`,
                                                                    size: "sm",
                                                                    style: {
                                                                        backgroundColor: getTypeColor(move.type),
                                                                        color: 'white'
                                                                    },
                                                                    children: move.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Power: ",
                                                                move.power || "N/A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Accuracy: ",
                                                                move.accuracy || "N/A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "PP: ",
                                                                move.pp || "N/A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    }, "moves", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Breeding",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Egg Groups"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold capitalize",
                                                children: pokemon.breeding.eggGroups.map((group)=>group.replace("-", " ")).join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Hatch Counter"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: pokemon.breeding.hatchCounter
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Gender Ratio"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: pokemon.breeding.gender.male === "—" ? "Genderless" : `${pokemon.breeding.gender.male}, ${pokemon.breeding.gender.female}`
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Growth Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold capitalize",
                                                children: pokemon.breeding.growthRate.replace("-", " ") || "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Capture Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: pokemon.breeding.captureRate
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: "Base Happiness"
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: pokemon.breeding.baseHappiness
                                            }, void 0, false, {
                                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, "breed", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                        title: "Locations",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4",
                                    children: "Locations"
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                pokemon.locations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: pokemon.locations.map((location, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold",
                                                    children: location.name
                                                }, void 0, false, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 dark:text-gray-300",
                                                    children: [
                                                        "Region: ",
                                                        location.region
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$pokedex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 dark:text-gray-400 animate-fade-in",
                                    children: "No location data available."
                                }, void 0, false, {
                                    fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    }, "locations", false, {
                        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-pokedex/src/components/PokemonDetails.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__610c6c35._.js.map