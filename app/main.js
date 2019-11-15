let minerals = 0;
let mineralCounter = document.getElementById("mineral-counter");
let scvCounter = document.getElementById("scv");
let probeCounter = document.getElementById("probe");
let reaverCounter = document.getElementById("reaver");
let ultraCounter = document.getElementById("ultralisk");

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

let autoUpgrades = {
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

//Testing Only
function showMeTheMoney() {
  minerals += 5000;
  updateMineralCounter();
}

// showMeTheMoney();

function mine() {
  if (clickUpgrades.SCV.quantity > 0) {
    minerals += clickUpgrades.SCV.multiplier;
  } else {
    minerals++;
  }
  updateMineralCounter();
}

function updateMineralCounter() {
  mineralCounter.innerText = minerals.toString();
}

//Need to disable button when there are not enough minerals
function buySCV() {
  let scv = clickUpgrades.SCV;
  if (minerals >= scv.price) {
    minerals -= scv.price;
    updateMineralCounter();
    scv.quantity++;
    //Create function to update upgrade quantity counts on index.html
    scvCounter.innerText = scv.quantity.toString();
    scv.multiplier += scv.quantity;
    scv.price = Math.ceil((scv.price + 50) * 1.2);
  }

  console.log(scv);
}

function buyUltralisk() {
  let ultra = autoUpgrades.Ultralisk;
  if (minerals >= ultra.price) {
    minerals -= ultra.price;
    updateMineralCounter();
    ultra.quantity++;
    //Create function to update upgrade quantity counts on index.html
    ultraCounter.innerText = ultra.quantity.toString();
    ultra.multiplier += ultra.quantity;
    ultra.price = Math.ceil((ultra.price + 50) * 1.2);
  }

  console.log(ultra);
}

function collectAutoUpgrade() {
  for (const u in autoUpgrades) {
    if (autoUpgrades.hasOwnProperty(u)) {
      const upgrade = autoUpgrades[u];
      minerals += upgrade.quantity * upgrade.multiplier;
      updateMineralCounter();
    }
  }
}

function startAutoCollectInterval() {
  let collectionInterval;
  collectionInterval = setInterval(collectAutoUpgrade, 3000);
}

startAutoCollectInterval();

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
