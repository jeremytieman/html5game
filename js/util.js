(function(ns, $, undefined)
{
  Array.prototype.erase = function(item)
  {
    for(var i = this.length; i--; i)
      if(this[i] === item) this.splice(i, 1);
    return this;
  };

  Function.prototype.bind = function(bind)
  {
    var self = this;
    return function()
    {
      var args = Array.prototype.slice.call(arguments);
      return self.apply(bind || null, args);
    };
  };

  ns.merge = function(original, extended)
  {
    for(var key in extended)
    {
      var ext = extended[key];
      if(('object' != typeof(ext)) || (ext instanceof Class))
        original[key] = ext;
      else
      {
        if(!original[key] || ('object' != typeof(original[key])))
          original[key] = {};
        merge(original[key], ext);
      }
    }

    return original;
  };

  ns.copy = function(object) 
  {
    if(!object || ('object' != typeof(object)) || (object instanceof Class))
      return object;
    else if(object instanceof Array)
    {
      var c = [];
      for(var i = 0, l = object.length; i < l; ++i) c[i] = copy(object[i]);
      return c;
    }
    else
    {
      var c = {};
      for(var i in object) c[i] = copy(object[i]);
      return c;
    }
  };

  ns.ksort = function(obj)
  {
    if(!obj || ('object' != typeof(obj)))
    {
      return [];
    }

    var keys = []
    var values = [];
    for(var i in obj) keys.push(i);
    keys.sort();
    for(var i = 0; i < keys.length; ++i) values.push(obj[keys[i]]);
    return values;
  };

  ns.newGuid_short = function()
  {
    var S4 = function()
    {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    return (S4()).toString();
  };
}(window.util = window.util || {}, jQuery));