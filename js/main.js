
document.querySelector("a.login").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("main-login").style.display = "block";
});


document.getElementById("close").addEventListener("click", function() {
  document.getElementById("main-login").style.display = "none";
});

