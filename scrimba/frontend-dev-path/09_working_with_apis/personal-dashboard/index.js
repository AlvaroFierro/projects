// docs here
// https://www.coingecko.com/api/documentations/v3

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author').textContent = `By: ${data.user.name} `
  })
  .catch((err) => {
    console.log(`unsplash error: ${err}`)
  })

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  .then((res) => {
    if (!res.ok) throw Error('Something went wrong')
    return res.json()
  })
  .then((data) => {
    document.getElementById('crypto').innerHTML = `
    <div class="coin">
      <img src=${data.image.small} />
      <span>${data.name}</span>
    </div>
    <div class="coin-info">
      <span>💲: ${data.market_data.current_price.usd}</span>
      <span>📈 24h: ${data.market_data.high_24h.usd}</span>
      <span>📉 24h: ${data.market_data.low_24h.usd}</span>
    </div>
    `
  })
  .catch((err) => {
    console.log(`coingecko error ${err}`)
  })
