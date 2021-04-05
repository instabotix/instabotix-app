const fetch = require('node-fetch');


const consultaProduto = () => {

const url = 'https://cosmetics2.vtexcommercestable.com.br/api/checkout/pub/orderforms/simulation';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-VTEX-API-AppKey': 'vtexappkey-cosmetics2-XDWXAV',
    'X-VTEX-API-AppToken': 'VQKIIBUVOFDBIDLKZPOWSKETDYWCMJSACDVXWFCJVSKXGYVBBVISZRJLLQEKERJEMDYEINOUMFAZZGNEDVBQBABLUKLFBSEEIGLCAQTOGOGURKLFCAHJQTDMBNKYBIST'
  },
  body: JSON.stringify({items: [{id: '1', quantity: 1, seller: '1'}], country: 'EUA'})
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
}

module.exports = consultaProduto;