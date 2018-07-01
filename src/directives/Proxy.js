import Vue from 'vue'

/**
 * 用于代理访问
 *
 * 用法: v-proxy.children='img.src'
 *
 * v-proxy : 自定义标签
 * children: 是否自动替换子标签
 * img.src     : img - 标签， src - 属性
 *
 */
const domainProxy = {
  ".*\.zhimg\.com": "img",
  "news-at\.zhihu\.com": ""
}

function proxyEl(el, prop) {

  var source = el[prop]

  if (!source) return

  var domainReg = /([http|https]:\/\/)?(.*)?\//g
  var match = domainReg.exec(source)

  if (!match) return

  var domain = match[2]

  var target = "";
  Object.keys(domainProxy).forEach((key) => {
    if (domainProxy.hasOwnProperty(key)) {
      var value = domainProxy[key];
      if (new RegExp(key).exec(domain)) {
        target = window.location.protocol + "//" + location.host + (value ? "/" + value : "")
      }
    }
  })

  if (target) {
    var proxyTarget = source.replace(domain, target);
    el[prop] = proxyTarget;
  }

}

function proxyChildren(el, type, prop) {
  var elements = el.querySelectorAll(type);
  elements.forEach(function (child) {
    proxyEl(child, prop)
  })
}


Vue.directive('proxy', function (el, binding) {
  var bindingValue = binding.value
  var type = "img", prop = "src";
  if (bindingValue) {
    if (bindingValue.contains(".")) {
      [type, prop] = bindingValue.split['.']
    } else {
      prop = bindingValue
      type = el.tagName.toLowerCase()
    }
  }

  var children = binding.modifiers.children ? true : false;

  if (children) {
    proxyChildren(el, type, prop)
  } else {
    proxyEl(el, prop)
  }
})
