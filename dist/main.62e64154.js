// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "/* \u4F60\u597D,\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5DE5\u7A0B\u5E08Xinhai\n * \u6211\u5C06\u7528\u4EE3\u7801\u753B\u4E00\u4E0B\u4E2D\u56FD\u7684\u4F18\u7F8E\u592A\u6781\u4E24\u4EEA\u56FE\u3002\n * \u300A\u5468\u6613\u300B\u9053\uFF1A\u201C\u6613\u6709\u592A\u6781\uFF0C\u662F\u751F\u4E24\u4EEA\u3002\u4E24\u4EEA\u751F\u56DB\u8C61\uFF0C\u56DB\u8C61\u751F\u516B\u5366\u3002\u201D\n * \u6CE8\u610F\u770B\u597D\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u8981\u5F00\u59CB\u52A0\u6837\u5F0F\u4E86\n * \u9996\u5148,\u51C6\u5907\u4E00\u4E2Adiv\n */\n#div1{\n    border: 1px solid blue;\n    width: 200px;\n    height: 200px;\n}\n/* \n * \u7136\u540E,\u628Adiv\u53D8\u4E3A\u4E00\u4E2A\u5706\n */\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n/* \u4E24\u4EEA\u662F\u9634\u9633\u5206\u660E\u7684\n * \u9634\u9633\u4E3A\u4E00\u9ED1\u4E00\u767D\n */\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* \u52A0\u5165\u4E00\u9ED1\u4E00\u767D\u4E24\u4E2A\u201C\u98CE\u706B\u8F6E\u201D */\n#div1::before{\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n\n}\n/* \u8C22\u8C22\u60A8\u7684\u89C2\u770B\uFF0C\u65B0\u6D77\u4E00\u76F4\u5728\u6210\u957F\u4E2D\uFF0C\u5FC5\u5C06\u7EE7\u7EED\u52AA\u529B\u3002*/\n";
var string2 = ''; // string = string.replace(/\n/g,"<br>")

console.log(string.length);
var n = 0;

var step = function step() {
  setTimeout(function () {
    if (string[n] === '\n') {
      string2 = string2 + "<br>"; // 回车
    } else if (string[n] === " ") {
      string2 += "&nbsp"; // 空格
    } else {
      string2 = string2 + string[n]; // 如果不是回车就直接给它
    } // string2 +=(string[n] === "\n" ? "<br>" : string[n])


    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);

    if (n < string.length - 1) {
      // 如果n不是最后一个就继续
      n += 1;
      step();
    }
  }, 50);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.62e64154.js.map