let minerals = 0;
let mineralCounter = document.getElementById("mineral-counter");
let scvCounter = document.getElementById("scv");
let probeCounter = document.getElementById("probe");
let reaverCounter = document.getElementById("reaver");
let ultraCounter = document.getElementById("ultralisk");
let scvCost = document.getElementById("scv-cost");
let probeCost = document.getElementById("probe-cost");
let reaverCost = document.getElementById("reaver-cost");
let ultraCost = document.getElementById("ultra-cost");
let scvMultiplier = document.getElementById("scv-multiplier");
let probeMultiplier = document.getElementById("probe-multiplier");
let reaverMultiplier = document.getElementById("reaver-multiplier");
let ultraMultiplier = document.getElementById("ultralisk-multiplier");

let upgradeCounterElems = [
  scvCounter,
  probeCounter,
  reaverCounter,
  ultraCounter
];

let upgradeCostElems = [scvCost, probeCost, reaverCost, ultraCost];

let upgradeMultiplierElems = [
  scvMultiplier,
  probeMultiplier,
  reaverMultiplier,
  ultraMultiplier
];

let clickUpgrades = {
  SCV: {
    name: "SCV",
    price: 25,
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

let upgrades = {
  clickUpgrades,
  autoUpgrades
};

//Testing Only
function showMeTheMoney() {
  minerals += 5000;
  updateMineralCounter();
}

// showMeTheMoney();

function showUpgradeCost() {
  scvCost.innerText = clickUpgrades.SCV.price.toString();
  probeCost.innerText = clickUpgrades.Probe.price.toString();
  reaverCost.innerText = autoUpgrades.Reaver.price.toString();
  ultraCost.innerText = autoUpgrades.Ultralisk.price.toString();
}

showUpgradeCost();

function mine() {
  let scv = clickUpgrades.SCV;
  let probe = clickUpgrades.Probe;

  if (scv.quantity > 0) {
    minerals += clickUpgrades.SCV.multiplier;
  }
  if (probe.quantity > 0) {
    minerals += clickUpgrades.Probe.multiplier;
  }
  if (scv.quantity == 0 && probe.quantity == 0) {
    minerals++;
  }
  updateMineralCounter();
}

function updateMineralCounter() {
  mineralCounter.innerText = minerals.toString();
}

function parseUpgradeTypes(upgrade) {
  for (const upgradeType in upgrades) {
    if (upgrades.hasOwnProperty(upgradeType)) {
      const uType = upgrades[upgradeType];
      if (uType == clickUpgrades) {
        //TODO Create method to parse through clickUpgrades
      }
      if (uType == clickUpgrades) {
        //TODO Create method to parse through autoUpgrades
      }
    }
  }
}

// TODO Parse upgrade
function parseUpgrades(upgrade) {}

//TODO Parse Elements
function parseElements() {
  //TODO
}

// TODO Optimize updating upgrade counter elements
// function updateUpgradeCounter(upgrade) {
//   // TODO Use parseUpgradeType to return the upgrade object here
// TODO use parseElements to return the upgrade element here
//   element.innerText = object.quantity.ToString();
// }

// NOTE Code still duplicated with buyAutoUpgrade
function buyClickUpgrade(upgrade) {
  let cUpgrade = clickUpgrades[upgrade];
  if (minerals >= cUpgrade.price) {
    minerals -= cUpgrade.price;
    updateMineralCounter();
    cUpgrade.quantity++;
    updateUpgradeQuantity(cUpgrade);
    cUpgrade.multiplier += cUpgrade.quantity;
    updateUpgradeMultiplier(cUpgrade);
    // TODO Method to calculate correct prices per upgrade. Using below for now.
    cUpgrade.price = Math.ceil((cUpgrade.price + 25) * 1.1);
    updateUpgradeCost(cUpgrade);
    playSuccessSound(cUpgrade);
  } else {
    playFailSound(cUpgrade);
  }

  console.log(cUpgrade);
}

function buyAutoUpgrade(upgrade) {
  let aUpgrade = autoUpgrades[upgrade];
  if (minerals >= aUpgrade.price) {
    minerals -= aUpgrade.price;
    updateMineralCounter();
    aUpgrade.quantity++;
    updateUpgradeQuantity(aUpgrade);
    aUpgrade.multiplier += aUpgrade.quantity;
    updateUpgradeMultiplier(aUpgrade);
    // TODO Method to calculate correct prices per upgrade. Using below for now.
    aUpgrade.price = Math.ceil((aUpgrade.price + 25) * 1.1);
    updateUpgradeCost(aUpgrade);
    playSuccessSound(aUpgrade);
  } else {
    playFailSound(aUpgrade);
  }

  console.log(aUpgrade);
}

function updateUpgradeQuantity(upgrade) {
  if (upgrade == clickUpgrades.SCV) {
    scvCounter.innerText = clickUpgrades.SCV.quantity.toString();
  }
  if (upgrade == clickUpgrades.Probe) {
    probeCounter.innerText = clickUpgrades.Probe.quantity.toString();
  }
  if (upgrade == autoUpgrades.Reaver) {
    reaverCounter.innerText = autoUpgrades.Reaver.quantity.toString();
  }
  if (upgrade == autoUpgrades.Ultralisk) {
    ultraCounter.innerText = autoUpgrades.Ultralisk.quantity.toString();
  }
}

function updateUpgradeCost(upgrade) {
  if (upgrade == clickUpgrades.SCV) {
    scvCost.innerText = clickUpgrades.SCV.price.toString();
  }
  if (upgrade == clickUpgrades.Probe) {
    probeCost.innerText = clickUpgrades.Probe.price.toString();
  }
  if (upgrade == autoUpgrades.Reaver) {
    reaverCost.innerText = autoUpgrades.Reaver.price.toString();
  }
  if (upgrade == autoUpgrades.Ultralisk) {
    ultraCost.innerText = autoUpgrades.Ultralisk.price.toString();
  }
}

function updateUpgradeMultiplier(upgrade) {
  if (upgrade == clickUpgrades.SCV) {
    scvMultiplier.innerText = clickUpgrades.SCV.multiplier.toString();
  }
  if (upgrade == clickUpgrades.Probe) {
    probeMultiplier.innerText = clickUpgrades.Probe.multiplier.toString();
  }
  if (upgrade == autoUpgrades.Reaver) {
    let multiplierTotal =
      autoUpgrades.Reaver.multiplier * autoUpgrades.Reaver.quantity;
    reaverMultiplier.innerText = multiplierTotal.toString();
  }
  if (upgrade == autoUpgrades.Ultralisk) {
    let multiplierTotal =
      autoUpgrades.Ultralisk.multiplier * autoUpgrades.Ultralisk.quantity;
    ultraMultiplier.innerText = multiplierTotal.toString();
  }
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
  let collectionInterval = setInterval(collectAutoUpgrade, 3000);
}

startAutoCollectInterval();

function playFailSound(upgrade) {
  if (upgrade == clickUpgrades.SCV) {
    let audio = new Audio("assets/sound/Not-Enough-T.wav");
    audio.play();
  }
  if (upgrade == clickUpgrades.Probe || upgrade == autoUpgrades.Reaver) {
    let audio = new Audio("assets/sound/Not-Enough-P.wav");
    audio.play();
  }
  if (upgrade == autoUpgrades.Ultralisk) {
    let audio = new Audio("assets/sound/Not-Enough-Z.wav");
    audio.play();
  }
}

function playSuccessSound(upgrade) {
  if (upgrade == clickUpgrades.SCV) {
    let audio = new Audio("assets/sound/SCV-Ready.wav");
    audio.play();
  }
  if (upgrade == clickUpgrades.Probe) {
    let audio = new Audio("assets/sound/Probe-Ready.wav");
    audio.play();
  }
  if (upgrade == autoUpgrades.Reaver) {
    let audio = new Audio("assets/sound/Reaver-Ready.wav");
    audio.play();
  }
  if (upgrade == autoUpgrades.Ultralisk) {
    let audio = new Audio("assets/sound/Ultra-Ready.wav");
    audio.play();
  }
}
