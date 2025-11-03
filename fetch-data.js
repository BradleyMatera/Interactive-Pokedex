const fs = require("fs");
const fetch = require("node-fetch");

async function main() {
  const listRes = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1010");
  const list = await listRes.json();
  const all = [];
  for (const p of list.results) {
    const url = p.url;
    const dataRes = await fetch(url);
    const data = await dataRes.json();
    
    // Fetch species
    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
    const species = await speciesRes.json();
    
    // Fetch evolution chain
    let evolution = {};
    if (species.evolution_chain) {
      const evoRes = await fetch(species.evolution_chain.url);
      evolution = await evoRes.json();
    }
    
    // Fetch encounters
    const encountersRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.id}/encounters`);
    const encounters = await encountersRes.json();
    
    // Combine
    const fullData = { ...data, species, evolution, encounters };
    all.push(fullData);
    
    console.log(`Fetched ${p.name}`);
    await new Promise(r => setTimeout(r, 500)); // Delay
  }
  fs.writeFileSync("data.json", JSON.stringify(all));
}

main().catch(console.error);
