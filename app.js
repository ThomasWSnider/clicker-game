let treasure = 0

let treasureTotal = 0

const clickUpgrades = [
  {
    name: "shovel",
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  {
    name: "cart",
    price: 100,
    quantity: 0,
    multiplier: 5
  }
]

const autoUpgrades = [
  {
    name: 'unseenServant',
    price: 60,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'goldGolem',
    price: 500,
    quantity: 0,
    multiplier: 20
  }
]

function buyClickUpgrade(upgradeName) {
  const clickUpgrade = clickUpgrades.find((upgrade) => upgrade.name == upgradeName)
  if (treasure >= clickUpgrade.price) {
    treasure -= clickUpgrade.price
    clickUpgrade.price = clickUpgrade.price * 2
    clickUpgrade.quantity++

    drawUpgrades(clickUpgrades, upgradeName)
    drawTreasure()
  }
}

function buyAutoUpgrade(upgradeName) {
  const autoUpgrade = autoUpgrades.find((upgrade) => upgrade.name == upgradeName)
  if (treasure >= autoUpgrade.price) {
    treasure -= autoUpgrade.price
    autoUpgrade.price = autoUpgrade.price * 2
    autoUpgrade.quantity++

    drawUpgrades(autoUpgrades, upgradeName)
    drawTreasure()
  }
}

function plunder() {
  treasure++
  treasureTotal++
  clickUpgrades.forEach((upgrade) => {
    if (upgrade.quantity > 0) {
      treasure += upgrade.quantity * upgrade.multiplier
      treasureTotal += upgrade.quantity * upgrade.multiplier
    }
  })
  drawTreasure()
}

function collectAutoUpgrades() {
  autoUpgrades.forEach((autoUpgrade) => {
    if (autoUpgrade.quantity > 0) {
      treasure += autoUpgrade.quantity * autoUpgrade.multiplier
      treasureTotal += autoUpgrade.quantity * autoUpgrade.multiplier
    }
  })
  drawTreasure()
}

function drawTreasure() {
  const treasureElement = document.getElementById('treasure')
  treasureElement.innerText = treasure.toString()

  const treasureTotalElement = document.getElementById('treasureTotal')
  treasureTotalElement.innerText = treasureTotal.toString()
}

function drawUpgrades(upgradeType, upgradeName) {
  const upgrade = upgradeType.find((upgrade) => upgrade.name == upgradeName)

  const upgradePriceElement = document.getElementById(`${upgradeName}Price`)
  upgradePriceElement.innerText = `🪙${upgrade.price}`

  const upgradeQuantityElement = document.getElementById(`${upgradeName}Quantity`)
  upgradeQuantityElement.innerText = `${upgrade.quantity}`
}

function getFunds() {
  treasure += 1000
  drawTreasure()
}


setInterval(collectAutoUpgrades, 1000)