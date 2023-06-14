//form đăng nhập 
document.querySelector("a.login").addEventListener("click", function(event) {
  event.preventDefault();
  var mainLogin = document.getElementById("main-login");
  mainLogin.style.display = "block";
  if (mainLogin.style.display === "block") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
  }
});

document.querySelector("#close").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("main-login").style.display = "none";
  document.body.style.overflow = 'auto';
});

//Đăng ký
document.querySelector("a.login-1").addEventListener("click", function(event) {
  event.preventDefault();
  var mainLogin = document.getElementById("main-login");
  mainLogin.style.display = "none";
  var mainLogin = document.getElementById("main-login-2");
  mainLogin.style.display = "block";
  if (mainLogin.style.display === "block") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
  }
});

document.querySelector("#close-2").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("main-login-2").style.display = "none";
  document.body.style.overflow = 'auto';
});

//trở lại đăng nhập
document.querySelector("a.login-2").addEventListener("click", function(event) {
  event.preventDefault();
  var mainLogin = document.getElementById("main-login-2");
  mainLogin.style.display = "none";
  var mainLogin = document.getElementById("main-login");
  mainLogin.style.display = "block";
  if (mainLogin.style.display === "block") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
  }
});

document.querySelector("#close").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("main-login").style.display = "none";
  document.body.style.overflow = 'auto';
});
