const explorers = [  
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
    ["Mawson", "South Pole", "New Hebrides"],  
    ["Hillary", "Everest", "South Pole"]  
]

const toponims = [];
const resultToponims = [];

for (let explorer of explorers) { 
    for (let i = 1; i < explorer.length; i++) {
        if (!toponims.includes(explorer[i])) {
            toponims.push(explorer[i]);
        }
    }
}

for (let toponim of toponims) {
    resultToponims.push([toponim]);
}

for (let toponim of resultToponims) {
    for (let explorer of explorers) {
        if (explorer.includes(toponim[0])) {
            toponim.push(explorer[0]);
        }
    }
}

console.log(resultToponims);