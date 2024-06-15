let treasure = 0

let treasureTotal = 0

let clickIncrease = 1

let treasurePerSecond = 0

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
    price: 100,
    quantity: 0,
    multiplier: 0.2
  },
  {
    name: 'goldGolem',
    price: 500,
    quantity: 0,
    multiplier: 10
  }
]

function buyClickUpgrade(upgradeName) {
  const clickUpgrade = clickUpgrades.find((upgrade) => upgrade.name == upgradeName)
  if (treasure >= clickUpgrade.price) {
    treasure -= clickUpgrade.price
    clickUpgrade.price = Math.ceil(clickUpgrade.price * 1.5)
    clickUpgrade.quantity++
    clickIncrease += clickUpgrade.multiplier

    drawUpgrades(clickUpgrades, upgradeName)
    drawTreasure()
    drawClickIncrease()
  }
}

function buyAutoUpgrade(upgradeName) {
  const autoUpgrade = autoUpgrades.find((upgrade) => upgrade.name == upgradeName)
  if (treasure >= autoUpgrade.price) {
    treasure -= autoUpgrade.price
    autoUpgrade.price = Math.ceil(autoUpgrade.price * 1.5)
    autoUpgrade.quantity++
    drawUpgrades(autoUpgrades, upgradeName)
    drawTreasure()
    drawTreasurePerSecond()
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
  treasureElement.innerText = treasure.toFixed(0)

  const treasureTotalElement = document.getElementById('treasureTotal')
  treasureTotalElement.innerText = treasureTotal.toFixed(0)
}

function drawClickIncrease() {
  const clickIncreaseElement = document.getElementById('clickIncrease')
  clickIncreaseElement.innerText = clickIncrease.toFixed(1)
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

function drawTreasurePerSecond() {
  autoUpgrades.forEach((upgrade) => {
    if (upgrade.quantity > 0) {
      treasurePerSecond += upgrade.multiplier
    }
  })
  const treasurePerSecElement = document.getElementById('autoIncrease')
  treasurePerSecElement.innerText = `${treasurePerSecond.toFixed(1)}`
}


setInterval(collectAutoUpgrades, 1000)