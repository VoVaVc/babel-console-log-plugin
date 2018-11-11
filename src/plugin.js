"use strict";

exports.default  = function() {
  return {
  visitor: {
      CallExpression(path, options) {
        let callee = path.node.callee
        if(callee.object.name === 'console' && callee.property.name === 'log') {
          let raw = path.node.arguments[0].quasis[0].value.raw
          path.node.arguments[0].quasis[0].value.raw = `“Bonify rocks” + ${raw}`
        }
      }
    }
  }
}

module.exports = exports["default"];
