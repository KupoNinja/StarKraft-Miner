let minerals = 0;
let mineralCounter = document.getElementById("mineral-counter");

let upgrades = {
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
  },
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

function addUpgrade() {}
