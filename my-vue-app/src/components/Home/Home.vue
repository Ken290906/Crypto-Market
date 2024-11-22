<script setup>
import "bootstrap/dist/css/bootstrap.css";
import "../Home/Home.css";
import { onMounted, ref, watch } from "vue";
import axios from "axios";

const searchCoin = ref("");
const coins = ref([]);
const selectCurrencies = ref("usd");

const fiatCurrencies = [
  { code: "usd", symbol: "$", name: "USD" },
  { code: "eur", symbol: "€", name: "Euro" },
  { code: "vnd", symbol: "₫", name: "Vietnamese Dong" },
  { code: "gbp", symbol: "£", name: "British Pound" },
  { code: "jpy", symbol: "¥", name: "Japanese Yen" },
];

const searchForm = async () => {
  if (!searchCoin.value.trim()) {
    console.log("Search input cannot empty!");
    return;
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-mKxYMBXZEuKhbjrpeLGXkj1g",
    },
  };

  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchCoin.value}`,
      options
    );
    console.log(response.data);
    coins.value.filter((coin) => {
      const query = searchCoin.value.toLowerCase();
      return (
        coin.id.toLowerCase().includes(query) ||
        coin.name.toLowerCase().includes(query) ||
        coin.id.toLowerCase().includes(query)
      );
    });
    coins.value = await response.data.slice(0, 5);
  } catch (error) {
    console.log("Lỗi không load được dữ liệu", error);
  }
};

const fetchCoin = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-mKxYMBXZEuKhbjrpeLGXkj1g",
    },
  };

  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectCurrencies.value}`,
      options
    );
    console.log(response.data);
    coins.value = await response.data.slice(0, 5);
  } catch (error) {
    console.log("Lỗi không load được dữ liệu", error);
  }
};

watch(selectCurrencies, fetchCoin);

onMounted(fetchCoin);
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>Largest <br />Crypto Marketplace</h1>
      <p>
        Welcom to the worlds largest cryptocurrency marketplace. Sign up to
        explore more about cryptos
      </p>
      <form @submit.prevent="searchForm">
        <input
          type="text"
          placeholder="Bitcoin, ETH, USDT, ..."
          v-model="searchCoin"
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>

    <div class="option-right">
      <select v-model="selectCurrencies">
        <option v-for="cru in fiatCurrencies" :key="cru.code" :value="cru.code">
          {{ cru.name }} {{ cru.symbol }}
        </option>
      </select>
    </div>

    <div class="crypto-table">
      <div class="table-layout">
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p style="text-align: center">24h Change</p>
        <p class="market-cap">Market Cap</p>
      </div>
      <div class="table-layout" v-for="coin in coins" :key="coin.id">
        <p>{{ coin.market_cap_rank }}</p>
        <div>
          <img :src="coin.image" alt="" />
          <p>{{ coin.name + coin.symbol }}</p>
        </div>
        <p>
          {{ coin.current_price?.toLocaleString() || "N/A" }}
          {{ fiatCurrencies.find((c) => c.code === selectCurrencies).symbol }}
        </p>
        <p :class="coin.market_cap_change_percentage_24h > 0 ? 'green' : 'red'">
          {{ coin.market_cap_change_percentage_24h?.toLocaleString() || "N/A" }}
        </p>
        <p style="text-align: right">
          {{ fiatCurrencies.find((c) => c.code === selectCurrencies).symbol }}
          {{ coin.market_cap?.toLocaleString() || "N/A" }}
        </p>
      </div>
    </div>
  </div>
</template>
