$(document).ready(function () {
   var validEmail = false;

  $('form').submit(function(event) {
    // заборонити щоб форма не відправлялась.щоб був час на перевірку заповнення форми
    event.preventDefault();

    // отримує значення поля
    var email = $('#exampleInputEmail1').val();

    if (email == '') {
      // якщо строка порожня то додаємо клас який покаже помилку
      $('#exampleInputEmail1').removeClass('is-valid').addClass('is-invalid');
      // додаємо клас помилки 
      $('.change-info').removeClass('valid-feedback').addClass('invalid-feedback');
      // перезаписати текст
      $('div.change-info').html('bad');
      validName = false;
    } else {
      $('#exampleInputEmail1').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info').html('good');      
      validEmail = true;
          
    }

    // if (validEmail = true) {
    //   console.log('good');
    //   // відв'язати подію заборони і  дозволити відправлення форми.
    //   $('form').unbind('submit').submit();
    // }
      
  })
})

