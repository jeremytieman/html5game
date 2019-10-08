(function(ns, $, undefined)
{
  ns.onload = function()
  {
    var body = document.getElementById('body');
    var canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 720;
    body.appendChild(canvas);
  };
}(window.main = window.main || {}, jQuery));

window.onload = window.main.onload;