//đăng ký
$(document).ready(function () {
  $('#register').click(register)
});

$(document).ready(function () {
  $('#close-2').click(close_register)
});

function register(a){
  a.preventDefault();
  $('#main-login-2').show();
  $('html, body').scrollTop(0);
  $('body').css('overflow', 'hidden');
}

function close_register() {
  $('#main-login-2').hide();
  $('body').css('overflow', 'auto');
}

$(document).ready(function () {
  $('#login-2').click(back_register)
});

function back_register(a) {
  a.preventDefault();
  $('#main-login').show();
  $('#main-login-2').hide();
  $('html, body').scrollTop(0);
  $('body').css('overflow', 'hidden');
}

// đăng nhập
$(document).ready(function () {
  $('#log-in').click(login)
});

$(document).ready(function () {
  $('#close').click(close_login)
});

function login(a){
  a.preventDefault();
  $('#main-login').show();
  $('html, body').scrollTop(0);
  $('body').css('overflow', 'hidden');
}

function close_login() {
  $('#main-login').hide();
  $('body').css('overflow', 'auto');
}

$(document).ready(function () {
  $('#login-1').click(back_login)
});

function back_login(a) {
  a.preventDefault();
  $('#main-login-2').show();
  $('#main-login').hide();
  $('html, body').scrollTop(0);
  $('body').css('overflow', 'hidden');
}

