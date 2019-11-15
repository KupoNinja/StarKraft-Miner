let minerals = 0;
let mineralCounter = document.getElementById("mineral-counter");
let scvCounter = document.getElementById("scv");
let probeCounter = document.getElementById("probe");
let reaverCounter = document.getElementById("reaver");
let ultraliskCounter = document.getElementById("ultralisk");

let clickUpgrades = {
  SCV: {
    name: "SCV",
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  Probe: {
    name: "Probe",
    price: 120,
    quantity: 0,
    multiplier: 20
  }
};

let autoupgrades = {
  Reaver: {
    name: "Reaver",
    price: 450,
    quantity: 0,
    multiplier: 50
  },
  Ultralisk: {
    name: "Ultralisk",
    price: 1020,
    quantity: 0,
    multiplier: 100
  }
};

function mine() {
  minerals++;
  updateMineralCounter();
}

function updateMineralCounter() {
  mineralCounter.innerText = minerals.toString();
}

//Testing Only
function giveMinerals() {
  minerals += 5000;
  updateMineralCounter();
}

giveMinerals();

//Need to disable button when there are not enough minerals
function buySCV() {
  let scv = clickUpgrades.SCV;
  if (minerals >= scv.price) {
    minerals -= scv.price;
    updateMineralCounter();
    scv.quantity++;
    scv.multiplier *= 1.2;
    scv.price = Math.ceil((scv.price + 50) * 1.2);
  }
  console.log("purchased");
  console.log(scv);
}

// function addUpgrade(upgradeName) {
//     debugger;
//     for (const upgradeName in object) {
//         if (object.hasOwnProperty(upgradeName)) {
//             const element = object[upgradeName];

//         }
//     }

//   if (upgradeName == "scv" || upgradeName == "probe") {
//     let upgrade = clickUpgrades[upgradeName];
//     upgrade.quantity++;
//     console.log(upgrade.quantity);
//   }
//   if (upgradeName == "reaver" || upgradeName == "ultralisk") {
//     let upgrade = clickUpgrades[upgradeName];
//     upgrade.quantity++;
//     console.log(upgrade.quantity);
//   }
// }

// function updateUpgradeCounter() {}
