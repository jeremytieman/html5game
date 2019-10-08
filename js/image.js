(function(ns, $, undefined)
{
  ns.animate = function()
  {
    context.drawImage(frames[frameIndex++], 0, 0);
    if(frameIndex >= frames.length) frameIndex = 0;
  };
}(window.image = window.image || {}, jQuery));