let treasure = 0

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
]

// function buyShovel() {
//   const clickUpgrade = clickUpgrades.find((upgrade) => upgrade.name == 'shovel')
//   if (treasure >= clickUpgrade.price) {
//     treasure -= clickUpgrade.price
//     clickUpgrade.price = clickUpgrade.price * 2
//     clickUpgrade.quantity++
//     const shovelPriceElement = document.getElementById('shovelPrice')
//     shovelPriceElement.innerText = `🪙${clickUpgrade.price}`
//     const shovelQuantityElement = document.getElementById('shovelQuantity')
//     shovelQuantityElement.innerText = `${clickUpgrade.quantity}`
//   }
//   else {
//     return
//   }
//   drawTreasure()
// }

function buyClickUpgrade(upgradeName) {
  const clickUpgrade = clickUpgrades.find((upgrade) => upgrade.name == upgradeName)
  if (treasure >= clickUpgrade.price) {
    treasure -= clickUpgrade.price
    clickUpgrade.price = clickUpgrade.price * 2
    clickUpgrade.quantity++

    drawUpgrades(upgradeName)
    drawTreasure()
  }
}




// function buyCart() {
//   const clickUpgrade = clickUpgrades.find((upgrade) => upgrade.name == 'cart')
//   if (treasure >= clickUpgrade.price) {
//     treasure -= clickUpgrade.price
//     clickUpgrade.price = clickUpgrade.price * 2
//     clickUpgrade.quantity++
//     const shovelPriceElement = document.getElementById('cartPrice')
//     shovelPriceElement.innerText = `🪙${clickUpgrade.price}`
//     const shovelQuantityElement = document.getElementById('cartQuantity')
//     shovelQuantityElement.innerText = `${clickUpgrade.quantity}`
//   }
//   else {
//     return
//   }
//   drawTreasure()
// }

function buyUnseenServant() {
  const autoUpgrade = autoUpgrades.find((upgrade) => upgrade.name == 'unseenServant')
  if (treasure >= autoUpgrade.price) {
    treasure -= autoUpgrade.price
    autoUpgrade.price = autoUpgrade.price * 2
    autoUpgrade.quantity++

    const unseenServantPriceElement = document.getElementById('unseenServantPrice')
    unseenServantPriceElement.innerText = `🪙${autoUpgrade.price}`

    const unseenServantQuantityElement = document.getElementById('unseenServantQuantity')
    unseenServantQuantityElement.innerText = `${autoUpgrade.quantity}`
  }
  else {
    return
  }
  drawTreasure()
}

function plunder() {
  treasure++
  clickUpgrades.forEach((upgrade) => {
    if (upgrade.quantity > 0) {
      treasure += upgrade.quantity * upgrade.multiplier
    }
  })
  drawTreasure()
}

function collectAutoUpgrades() {
  autoUpgrades.forEach((autoUpgrade) => {
    if (autoUpgrade.quantity > 0) {
      treasure += autoUpgrade.quantity * autoUpgrade.multiplier
    }
  })
  drawTreasure()
}

function drawTreasure() {
  const treasureElement = document.getElementById('treasure')
  treasureElement.innerText = treasure.toString()
}

function drawUpgrades(upgradeName) {
  const clickUpgrade = clickUpgrades.find((upgrade) => upgrade.name == upgradeName)
  const upgradePriceElement = document.getElementById(`${upgradeName}Price`)
  upgradePriceElement.innerText = `🪙${clickUpgrade.price}`
  const upgradeQuantityElement = document.getElementById(`${upgradeName}Quantity`)
  upgradeQuantityElement.innerText = `${clickUpgrade.quantity}`
}

function getFunds() {
  treasure += 1000
  drawTreasure()
}


setInterval(collectAutoUpgrades, 1000)