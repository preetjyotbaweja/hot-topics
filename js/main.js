var $cont = document.querySelector(".main");
var $alllinks = document.querySelectorAll("nav ul li a");

var items = {};

fetch("./partials/home.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (val) {
    $cont.innerHTML = val;
  })

var storeItems = function (url) {

  if (!items[url]) {

    fetch(url)
      .then(function (response) {
        return response.text();
      })
      .then(function (val) {
        items[url] = val;
        $cont.innerHTML = items[url];
      });
  } else {
    $cont.innerHTML = items[url];
  }
};


const clickhandler = function (e) {

  e.preventDefault();

  let k = e.target.href;

  storeItems(k);

};

for (let i = 0; i < $alllinks.length; i++) {

  $alllinks[i].addEventListener("click", clickhandler);

}