export const token = {
  state: {
    happyTokenAddress: '0xB0B924C4a31b7d4581a7F78F57ceE1E65736Be1D',
    price: []
  },
  mutations: {
    setPrice (state, payload) {
      state.price = payload
    }
  },
  actions: {
    async setPrice ({ commit, getters }) {
      const scientificToDecimal = (x) => {
        if (Math.abs(x) < 1.0) {
          let e = parseInt(x.toString().split('e-')[1]);
          if (e) {
              x *= Math.pow(10,e-1);
              x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
          }
        } else {
          let e = parseInt(x.toString().split('+')[1]);
          if (e > 20) {
              e -= 20;
              x /= Math.pow(10,e);
              x += (new Array(e+1)).join('0');
          }
        }
        return x;
      }
      const tokenAddr = getters.getHappyTokenAddress
      const url = `https://api.dex.guru/v1/tokens/${tokenAddr}-bsc`
      const req = await fetch(url)
      const json = await req.json()
      const price = json.priceUSD
      const convertedPrice = scientificToDecimal(price)
      const roundedPrice = Number(convertedPrice).toFixed(14)
      return commit ('setPrice', roundedPrice)
    },
  },
  getters: {
    getHappyTokenAddress (state) {
      return state.happyTokenAddress
    },
    getTokenPrice (state) {
      return state.price
    }
  }
}
