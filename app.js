var execSync = require('exec-sync'),
    config = require('./config');

(function poll(last){

  var result = execSync(config.exec);

  if (result !== last){

    var notify = config.notify.replace('{{stdout}}', result);
    execSync(notify);
  }

  // Repeat after a while
  setTimeout(poll, config.wait * 1000);

})();
