// Объектом какого класса является document? - HTMLDocument (Document)
console.log(document);
console.log(document.constructor.name);


// Какое место он занимает в DOM-иерархии? - точка входа в DOM
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node


// Наследует ли он от Node или от Element, или может от HTMLElement? нет, наследуется от HTMLDocument

