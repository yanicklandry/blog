if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'? args[number]: match;
        });
    };
}

/**
 * 生成css3兼容性代码
 * @param property
 * @param value
 * @returns {
              'transform-origin': '50% 100%',
              '-webkit-transform-origin': '50% 100%',
              '-moz-transform-origin': '50% 100%',
              '-ms-transform-origin': '50% 100%',
              '-o-transform-origin': '50% 100%'
            }
 */
function css3(property,value){
    var obj={};
    _.each(['','-webkit-','-moz-','-ms-','-o-'],function(prefix){
        obj[prefix+property]=value;
    })
    return obj;
}