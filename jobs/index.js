var axios = require('axios');

// ETH (CryptoMarket)
setInterval(() => {
    axios.get('https://www.cryptomkt.com/api/ethclp/1.json')
    .then((response) => {
      const bid = parseInt(response.data['data']['prices_bid']['values'][0]['close_price']);
      const ask = parseInt(response.data['data']['prices_ask']['values'][0]['close_price']);
      console.log({bid, ask});
    })
    .catch((error) => {
    //   console.log(error);
    });
}, 1000);
