let Stream = require("./index.js")
let stream = new Stream;

bob()

async function bob() {
    console.log('fig')
    console.log(await stream.status())    
}
