/**
 * Created by frank.zhang on 5/7/15.
 */
define(function(require,exports,module){
    function rndGray() {
        var rnd = Math.floor(Math.random()*255);
        var gray='rgb(' + rnd + ',' + rnd +',' + rnd + ')';
        return gray;
    }
    exports.rndGray=rndGray;
});
