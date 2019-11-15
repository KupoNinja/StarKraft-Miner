let minerals = 0;
let mineralCounter = document.getElementById("mineral-counter");

let upgrades = {
  SCV: {
    name: "SCV",
    count: 0
  },
  Probe: {
    name: "Probe",
    count: 0
  },
  Reaver: {
    name: "Reaver",
    count: 0
  },
  Ultralisk: {
    name: "Ultralisk",
    count: 0
  }
};

function mine() {
  minerals++;
  mineralCounter.innerText = minerals.toString();
}
