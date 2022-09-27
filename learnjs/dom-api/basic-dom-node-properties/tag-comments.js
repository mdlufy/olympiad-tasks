  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); 
  // body = <!--BODY--> 
  // body.firstChild.data = BODY