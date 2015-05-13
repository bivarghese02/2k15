

(function(){
  var matchVersion = function(match){
    return navigator.appVersion.indexOf(match) != -1;
  };
  Modernizr.addTest({
    "os-win": function(){ return matchVersion("Win"); },
    "os-osx": function(){ return matchVersion("Mac"); },
    "os-unix": function(){ return matchVersion("X11"); },
    "os-linux": function(){ return matchVersion("Linux"); }
  });
})();
