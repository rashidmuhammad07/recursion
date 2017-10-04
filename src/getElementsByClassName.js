// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementByClassName = [];
  function checker(node) {
    if((node.classList) && (node.classList.contains(className))) {
      elementByClassName.push(node);
    }
    node.childNodes.forEach(function(eachNode){
      checker(eachNode);
    });
  }
  checker(document.body);
  return elementByClassName;
};

//document.body, element.childNodes, and element.classList
