$(document).ready(function () {
   var validEmail = false;
   var validFirstName = false;
   var validLastName = false;
   var validUsername = false;

  $('form').submit(function(event) {
    // заборонити щоб форма не відправлялась.щоб був час на перевірку заповнення форми
    event.preventDefault();

    // отримує значення поля
    var email = $('#exampleInputEmail1').val();
    var firstName = $('#formGroupExampleInputFirstName').val();    
    var lastName = $('#formGroupExampleInputLastName').val();
    var username = $('#inlineFormInputGroupUsername').val();

    if (email == '') {
      // якщо строка порожня то додаємо клас який покаже помилку
      $('#exampleInputEmail1').removeClass('is-valid').addClass('is-invalid');
      // додаємо клас помилки тексту помилки
      $('.change-info__email').removeClass('valid-feedback').addClass('invalid-feedback');
      // перезаписати текст
      $('div.change-info__email').html('Should be the format of the email!');
      validName = false;
    } else {
      $('#exampleInputEmail1').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__email').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__email').html('Good!');      
      validEmail = true;       
    }

    if (firstName == '') {
      $('#formGroupExampleInputFirstName').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__firstName').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__firstName').html('Must be more than 3 letters!');      
      validFirstName = false;    
    } else {
      $('#formGroupExampleInputFirstName').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__firstName').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__firstName').html('Good!');
      validFirstName = true;   
    }

    if(lastName == '') {
      $('#formGroupExampleInputLastName').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__lastName').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__lastName').html('Must be more than 3 letters!');
      validLastName = false;
    } else {
      $('#formGroupExampleInputLastName').removeClass('is-invalid').addClass('is-valid'); 
      $('.change-info__lastName').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__lastName').html('Good!');
      validLastName = true; 
    }

    if(username == '') {
      $('#inlineFormInputGroupUsername').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__username').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__username').html('Must be more than 3 letters!');
      validUsername = false;
    } else {
      $('#inlineFormInputGroupUsername').removeClass('is-invalid').addClass('is-valid'); 
      $('.change-info__username').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__username').html('Good!');
      validUsername = true; 
    }

    // if (validEmail = true) {
    //   console.log('good');
    //   // відв'язати подію заборони і  дозволити відправлення форми.
    //   $('form').unbind('submit').submit();
    // }
      
  })
})

