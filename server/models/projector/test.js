let Projector = require("./index");
let projector = new Projector();
console.log("bob");

(async function bob() {
  console.log(await projector.vidMute());
})();
