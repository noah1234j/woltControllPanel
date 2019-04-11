//var exec = require('child_process').exec;
//exec('~/desktop/uplynk/liveslicer -config ~/desktop/uplynk/wolt.conf');

let Stream = require('./index')

let stream = new Stream

// start streaming here

exec('~/desktop/uplynk/liveslicer -config ~/desktop/uplynk/wolt.conf');

// check that its streaming

find('name', "liveslicer").then((list) => {
  if (list.length) {

    // change the status to running
    set('status', 'running')
    return code.success

  } else {

    set('status', 'failed')
    return code.failure
  }
})