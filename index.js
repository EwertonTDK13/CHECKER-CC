const cc = require("credit-card-type");

const creditCardNumber =  process.argv.slice(2)[0];

const flag = cc(creditCardNumber)[0].niceType;

console.log("A bandeira do cartão " + creditCardNumber + " è " + flag);

