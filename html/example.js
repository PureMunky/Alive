(function (win) {
  var codeEditor = win.getElementById('code');
  var outputPanel = win.getElementById('output');
  var commitButton = win.getElementById('btnCommit');
  
  commitButton.onclick = function () {
    outputPanel.innerHTML = codeEditor.innerHTML;
  };
  
  outputPanel.innerHTML = 'output test';
  codeEditor.innerHTML = 'enter code here';
}(window));