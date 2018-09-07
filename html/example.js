(function (win) {
  var codeEditor = win.document.getElementById('code');
  var outputPanel = win.document.getElementById('output');
  var commitButton = win.document.getElementById('btnCommit');
  
  commitButton.onclick = function () {
    outputPanel.innerHTML = codeEditor.innerHTML;
  };
  
  outputPanel.innerHTML = 'output test';
  codeEditor.innerHTML = 'enter code here';
}(window));