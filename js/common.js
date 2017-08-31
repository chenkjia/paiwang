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
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $('#back-to-top').tooltip('show');
});