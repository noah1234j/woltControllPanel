
//////////////////////////////// REQUIRES //////////////////////////////////////

let code = require("../codes.json")
let exec = require('child_process').exec;
let find = require('find-process')
let data = require('../status.json')
let fs = require('fs')
let fkill = require('fkill');

//////////////////////////////// CLASS DEFINITION //////////////////////////////

class streamModel {
  async start () {
    exec('./startslicer.sh').unref

    if ((await list()).length > 0 ) {
      set('status', 'running')
      return code.success
    } else {
      set('status', 'failed')
      
      return code.failure
    }
  }

  async stop () {
    // If Process Running    
    if ((await list()).length > 0 ) {
      await fkill('liveslicer')
    }
    set('status', 'stopped')
    return code.success
  }
 
  status () {
    code.success.message = data.status
    return code.success
  }
}

/////////////////////// FUNCTIONS //////////////////////////

function set(key, val) {
  data[key] = val
  data = JSON.stringify(data)
  fs.writeFileSync('../status.json', data, null, 2)
}

function list() {
  return find('name', "liveslicer")
}

module.exports = streamModel