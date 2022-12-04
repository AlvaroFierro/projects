const feet = 3.28084 // feet to meters
const liters = 0.264172 // liters to gallons
const kilogram = 2.20462 // kilograms to pounds
const convertBtn = document.getElementById('convertBtn')
const input = document.getElementById('unit')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')

convertBtn.addEventListener('click', () => {
  const value = input.value
  const length = value * feet
  const volume = value * liters
  const weight = value * kilogram

  const conversionLength = `${value} meters = ${length.toFixed(
    3
  )} feet | ${value} feet = ${(value / feet).toFixed(3)} meters`

  const conversionVolume = `${value} liters = ${volume.toFixed(
    3
  )} gallons | ${value} gallons = ${(value / liters).toFixed(3)} liters`

  const conversionWeight = `${value} kilograms = ${weight.toFixed(
    3
  )} pounds | ${value} pounds = ${(value / kilogram).toFixed(3)} kilograms`

  lengthEl.innerHTML = conversionLength
  volumeEl.innerHTML = conversionVolume
  massEl.innerHTML = conversionWeight
})
