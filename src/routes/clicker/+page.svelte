<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <title>Clicker</title>
</svelte:head>

<html lang="en">
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  
    <a href="http://localhost:5173/" class="home">Home</a>


  <main>
    <div class="cookies">{cookies} Cookies</div>
    <div class="upgrades">
        <img src="cookie.png" alt="cookie" on:click={()=>cookieClicker()} on:keypress={()=>cookieClicker()} class="cookieButton">

      </div>
    <div class="upgrades">
      <button on:click={buyClickPower} class="upgradeButton">Upgrade Click Power ({clickPowerPrice} cookies)</button>
      <button on:click={buyGrandma} class="upgradeButton">Buy a Grandma ({grandmaPrice} cookies)</button>
      <button on:click={buyFactory} class="upgradeButton">Buy a Factory ({factoryPrice} cookies)</button>
    </div>
    <div class="grandmas" style="color: white;">Grandmas: {grandmaPower}</div>
    <div class="factories" style="color: white;">Factories: {factoryPower}</div>
  </main>
</html>

<script>
  var cookies = 0;
  var clickPower = 1;
  var clickPowerPrice = 50;
  var grandmaPower = 0;
  var factoryPower = 0;
  var grandmaPrice = 150;
  var factoryPrice = 500;

  setInterval(function() {
    cookies += (grandmaPower + factoryPower);
    
    }, 1000);

    function cookieClicker() {
    cookies += clickPower;
    }

    function buyClickPower() {
    if (cookies >= clickPowerPrice) {
      cookies -= clickPowerPrice;
      clickPower *= 2;
      clickPowerPrice *= 3;
      clickPowerPrice = Math.floor(clickPowerPrice)
    }
    }

    function buyGrandma() {
    if (cookies >= grandmaPrice) {
      cookies -= grandmaPrice;
      grandmaPower += 1;
      grandmaPrice *= 1.5;
      grandmaPrice = Math.floor(grandmaPrice)
    }
    }

    function buyFactory() {
    if (cookies >= factoryPrice) {
      cookies -= factoryPrice;
      factoryPower += 5;
      factoryPrice *= 2;
      factoryPrice = Math.floor(factoryPrice)
    }
    }
</script>

<style>
  html{
  background-color: #0f3a52;
  }
  main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-image: url('/clicker-background.jpg');
    height: 950px;
  }
  .home {
    padding: 5px;
    color: white;
  }

  .cookies {
    color: white;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    font-style: italic;
  }

  .upgrades {
    text-align: center;
    margin-top: 10px;
    color: white;
    padding: 10px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
  }

  .upgradeButton {
    color: white;
    font-style: italic;
    background: #F94A29;
    border-radius: 20px;
    transition: all 0.3s;
  }

  .upgradeButton:hover {
    background-color: #b8341c;
    transform: translate(0,-5px);
  }

  .grandmas {
    text-align: center;
    margin-top: 10px;
    font-style: italic;
  }

  .factories {
    text-align: center;
    margin-top: 10px;
    font-style: italic;
  }
</style>