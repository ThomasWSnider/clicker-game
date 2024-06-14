let treasure = 0

const clickUpgrades = [
  {
    name: "shovel",
    price: 10,
    quantity: 0,
    multiplier: 1
  },
]

const autoUpgrades = [
  {
    name: 'unseenServant',
    price: 60,
    quantity: 0,
    multiplier: 20
  },
]






function plunder() {
  treasure += 1
  console.log('adding treausure', 1);
  drawTreasure()
}

function drawTreasure() {
  const treasureElement = document.getElementById('treasure')
  treasureElement.innerText = treasure.toString()
}