document.addEventListener("DOMContentLoaded", function () {
  console.log('index.js loaded ...');
  loadButton()
});

const loadButton = () => {
  const button3 = document.querySelectorAll('button')[2]
  button3.addEventListener('click', function (e) {
    e.preventDefault()
    loadLogo()
  })
}

const loadLogo = () => {
  // create the svg element
  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // set width and height
  svg1.setAttribute("width", "100");
  svg1.setAttribute("height", "100");

  // debugger;
  // create a circle
  const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cir1.setAttribute("cx", "80");
  cir1.setAttribute("cy", "80");
  cir1.setAttribute("r", "30");
  cir1.setAttribute("fill", "red");

  // attach it to the container
  svg1.appendChild(cir1);

  // attach container to document
  const logoDiv = document.getElementById("asdf")

  logoDiv.innerHTML = ''
  logoDiv.appendChild(svg1);
}
