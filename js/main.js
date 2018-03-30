(function() {
  var nav = document.getElementsByTagName('nav')[0];
  window.addEventListener("scroll", function(){
    if(window.scrollY > 20) {
      nav.style.opacity = "0.8";
    } else {
      nav.style.opacity = "1";
    }
  });

  var reviews = document.getElementsByClassName("review")[0];
  var input = reviews.getElementsByTagName("input")[0];
  var articleArr = Array.prototype.slice.call(reviews.getElementsByTagName("article"));
  input.addEventListener("click", function(){
    articleArr.forEach(function (elm) {
      elm.classList.add("clicked");
    });
    window.scrollTo(0,2700);
  });
}());
