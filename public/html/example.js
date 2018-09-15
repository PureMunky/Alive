var alive = (function (){
  var reporters = [];
  
  function ingest(code) {
    var fun = Function('"use strict"; return ' + code)();
    sendReport(fun);
    return wrapFunction(fun);
  }
  
  function wrapFunction(inFunc) {
    var fMain = {
      runs: [],
      func: inFunc,
      f: function () {
        var input = arguments;
        var output = fMain.func.apply(null, arguments);
        fMain.runs.push({
          input: input,
          output: output
        });
        
        sendReport(fMain);
        return output;
      }
    };
    return fMain.f;
  }
  
  function registerReporter(func) {
    reporters.push(func);
  }
  
  function sendReport(report) {
    var i = 0;
    for(i = 0; i < reporters.length; i++) {
      if(reporters[i]) {
        reporters[i](report);
      }
    }
  }
  
  return {
    ingest: ingest,
    registerReporter: registerReporter
  };
}());

(function (win, alive) {
  var codeEditor = win.document.getElementById('code');
  var outputPanel = win.document.getElementById('output');
  var commitButton = win.document.getElementById('btnCommit');
  
  commitButton.onclick = function () {
    window.testFunc = alive.ingest(codeEditor.innerText);
  };
  
  alive.registerReporter(function (report) {
    outputPanel.innerHTML = JSON.stringify(report);
  });
  
  outputPanel.innerHTML = 'output test';
}(window, alive));