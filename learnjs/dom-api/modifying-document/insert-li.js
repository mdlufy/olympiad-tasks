<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>


const one = document.querySelector('#one');
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>')