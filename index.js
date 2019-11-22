
require.config({
  baseUrl: '/',
  paths: {
    // components: 'src/components',
    MyAwesomeComponent: 'src/components/MyAwesomeComponent',
    lighterhtml: 'node_modules/lighterhtml/index',
    lodash: 'node_modules/lodash/lodash'
  },
  shim: {
    lighterhtml: {
      exports: 'lighterhtml'
    },
    MyAwesomeComponent: {
      exports: 'MyAwesomeComponent'
    }
  }
})

// with promise
new Promise(function(resolve) {
  require(['lighterhtml', 'lodash'], function() {
    // console.log("require(['lighterhtml', 'lodash']", arguments)
    resolve(arguments)
  })
}).then(function(arg) {
  var lighterhtml = arg[0]
  // var _ = arg[1]
  var render = lighterhtml.render
  return new Promise(function(resolve) {
    require(['MyAwesomeComponent'], function(comp) {
      console.log("require(['MyAwesomeComponent']", arguments)
      resolve([comp, render])
    })
  })
}).then(function(arg) {
  var _default = arg[0]
  var render = arg[1]
  var MyAwesomeComponent = _default.MyAwesomeComponent
  // console.log('MyAwesomeComponent', MyAwesomeComponent)
  var app = document.querySelector('#app')
  // var app = document.body
  render(app, MyAwesomeComponent)
})

// with callback
// require(['lighterhtml', 'lodash'], function(lighterhtml, _) {
//   var render = lighterhtml.render
//   require(['MyAwesomeComponent'], function(_default) {
//     var MyAwesomeComponent = _default.MyAwesomeComponent
//     console.log('MyAwesomeComponent', MyAwesomeComponent)
//     // var app = document.querySelector('#app')
//     var app = document.body
//     render(app, MyAwesomeComponent)
//   })
// })
