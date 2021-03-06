function linkHtml (link, top) {
  if (top) {
    window.open(link)
  } else {
    window.location.href=link
  }
}
$.ajax({
  type: 'GET',
  url: 'header.html',
  dataType: 'html',
  async : false,
  success: (data) => {
    $('#header').html(data)
  }
})

$.ajax({
  type: 'GET',
  url: 'footer.html',
  dataType: 'html',
  async : false,
  success: (data) => {
    $('#footer').html(data)
  }
})
$.ajax({
  type: 'GET',
  url: 'headerBottom.html',
  dataType: 'html',
  async : false,
  success: (data) => {
    $('#header-bottom').html(data)
  }
})
$.ajax({
  type: 'GET',
  url: 'case.html',
  dataType: 'html',
  async : false,
  success: (data) => {
    $('#case').html(data)
  }
})
$.ajax({
  type: 'GET',
  url: 'case-content.html',
  dataType: 'html',
  async : false,
  success: (data) => {
    $('#case-content').html(data)
  }
})
$.ajax({
  type: 'GET',
  url: 'productBottomHeader.html',
  dataType: 'html',
  async : false,
  success: (data) => {
    $('#product-bottom-header').html(data)
  }
})
$.ajax({
  type: 'GET',
  url: 'apply.html',
  dataType: 'html',
  async : false,
  success: function (d){
    $('body').append($(d));
  }
});

$(document).ready(function(){
  var u = navigator.userAgent;
  var isMobile = !!u.match(/Mobile/);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $('.navbar-brand,.navbar-right').on('mouseenter',function(){
    $('.navbar-fixed-top').addClass('navbar-fixed-top-hover');
  });
  $('.navbar-fixed-top').on('mouseleave',function(){
    $('.navbar-fixed-top').removeClass('navbar-fixed-top-hover');
  });
  $('.navbar-brand,.navbar-right').on('click',function(event){
    $('.navbar-fixed-top').addClass('navbar-fixed-top-hover');
    if (isMobile) {
      event.preventDefault();
    }
  });
  $('.navbar-fixed-top').tap(function(event){
    $('.navbar-fixed-top').addClass('navbar-fixed-top-hover');
  });
});