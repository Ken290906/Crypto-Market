<script setup>
import "bootstrap/dist/css/bootstrap.css";
import "../Home/Home.css";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-mKxYMBXZEuKhbjrpeLGXkj1g",
  },
};

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", options)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>Largest <br>Crypto Marketplace</h1>
      <p>Welcom to the worlds largest cryptocurrency marketplace. Sign up to explore more about cryptos</p>
      <form action="">
        <input type="text" placeholder="Bitcoin, ETH, USDT, ...">
        <button type="submit">Search</button>
      </form>
    </div>
  </div>
</template>
