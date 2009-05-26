//debugger;
load("env.js");

(function($env){

  var run = function(file) {
    $env(file, {
      //let it load the script from the html
      scriptTypes: {
        "text/javascript": true
      },
      afterload:{
        'assets/unittest.js': function(){
          // override some unittest.js methods in order to capture test results
          Test.Unit.Logger.prototype.start = function(testName) {
            $env.log(testName + ':');
          };
          Test.Unit.Logger.prototype.finish = function(status, summary) {
            $env.log('[' + status + '] ' + summary);
          };
          Test.Unit.Runner.prototype.postResults = function() {
            var results = this.getResult();
            $env.log(
              results.tests + ' tests, ' +
              results.assertions + ' assertions, ' +
              results.failures + ' failures, ' +
              results.errors + ' errors'
            );
          };
        }
      }
    });
  };

  var dir = new java.io.File("unit/tmp");
  var prefix = dir.getAbsolutePath();
  var files = dir.list();
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (file.match(/_test.html$/)) {
      run('file://' + prefix + '/' + file);
    }
  }
})(Envjs);
