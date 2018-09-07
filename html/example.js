(function (win) {
  var codeEditor = win.document.getElementById('code');
  var outputPanel = win.document.getElementById('output');
  var commitButton = win.document.getElementById('btnCommit');
  
  commitButton.onclick = function () {
    codeEditor.innerHTML;
  };
  
  outputPanel.innerHTML = 'output test';
  codeEditor.innerHTML = 'enter code here';
}(window));

var alive = (function (){
  function ingest(code) {
  	eval(code);  
  }
  
  return {
    ingest: ingest
  };
}());