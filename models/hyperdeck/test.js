let Hyperdeck = require("./index");
let hyperdeck = new Hyperdeck();

test();

async function test() {
  await hyperdeck.connect();

  await hyperdeck.stop().then(res => {
    console.log(res);
  });
}
