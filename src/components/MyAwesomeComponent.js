
define(function(require, exports) {
  var lighterhtml = require('lighterhtml')
  var html = lighterhtml.html
  exports.MyAwesomeComponent = function() {
    // return html`
    //   <div>
    //     <h2>Hi! I'm MyAwesomeComponent</h2>
    //   </div>
    // `
    // // if you cannot use template literal(it works well?)
    return html(['\
      <div>\
        <h2>Hi! I\'m MyAwesomeComponent</h2>\
      </div>\
    '])
  }
})
  