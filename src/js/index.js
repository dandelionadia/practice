$(document).ready(function () {
   var validEmail = false;
   var validFirstName = false;
   var validLastName = false;
   var validUsername = false;
   var validAddress = false;
   var validPhone = false;
   var validCountry = false;
   var validState = false;
   var validZip = false;

  $('form').submit(function(event) {
    // заборонити щоб форма не відправлялась.щоб був час на перевірку заповнення форми
    event.preventDefault();

    // отримує значення поля
    var email = $('#exampleInputEmail1').val();
    var firstName = $('#formGroupExampleInputFirstName').val();    
    var lastName = $('#formGroupExampleInputLastName').val();
    var username = $('#inlineFormInputGroupUsername').val();
    var address = $('#inputAddress').val();
    var phone = $('#exampleInputPhone').val();
    var country = $('#inputCountry').val();
    var state = $('#inputState').val();
    var zip = $('#inputZip').val();

    if (firstName == '') {
        // якщо строка порожня то додаємо клас який покаже помилку input
      $('#formGroupExampleInputFirstName').removeClass('is-valid').addClass('is-invalid');
      // додаємо клас який показує колір текстово повідомлення помилки
      $('.change-info__firstName').removeClass('valid-feedback').addClass('invalid-feedback');
      // перезаписати текст помилки
      $('div.change-info__firstName').html('Must be more than 3 letters!');   
      validFirstName = false;    
    } else if (firstName.length < 3 ) {
      $('#formGroupExampleInputFirstName').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__firstName').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__firstName').html('Must be more than 3 letters!'); 
      validFirstName = false;            
    } else {
      $('#formGroupExampleInputFirstName').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__firstName').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__firstName').html('Good!');
      // console.log(firstName.length);
      validFirstName = true;   
    }

    if(lastName == '') {
      $('#formGroupExampleInputLastName').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__lastName').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__lastName').html('Must be more than 3 letters!');
      validLastName = false;
    } else if (lastName.length < 3) {
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
      $('div.change-info__username').html('Must be more than 3 characters!');
      validUsername = false;
    } else if (username.length < 3) {
      $('#inlineFormInputGroupUsername').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__username').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__username').html('Must be more than 3 characters!');
      validUsername = false;
    } else {
      $('#inlineFormInputGroupUsername').removeClass('is-invalid').addClass('is-valid'); 
      $('.change-info__username').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__username').html('Good!');
      validUsername = true; 
    }

    if (email == '') {
      $('#exampleInputEmail1').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__email').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__email').html('Should be the format of the email!');
      validName = false;
    } else {
      $('#exampleInputEmail1').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__email').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__email').html('Good!');      
      validEmail = true;       
    }

    if (address == '') {
      $('#inputAddress').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__address').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__address').html('Must be more than 5 characters!');
      validAddress = false;
    } else if (address.length < 5) {
      $('#inputAddress').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__address').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__address').html('Must be more than 5 characters!');
      validAddress = false;
    } else {
      $('#inputAddress').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__address').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__address').html('Good!');      
      validAddress = true;       
    }

    if (phone == '') {
      $('#exampleInputPhone').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__phone').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__phone').html('Must be more than 9 numbers!');
      validPhone = false;
    } else if (phone.length < 9) {
      $('#exampleInputPhone').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__phone').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__phone').html('Must be more than 9 numbers!');
      validPhone = false;
    } else {
      $('#exampleInputPhone').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__phone').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__phone').html('Good!');      
      validPhone = true;       
    }

    if (country == '') {
      $('#inputCountry').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__country').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__country').html('Input  is not filled!');
      validCountry = false;
    } else {
      $('#inputCountry').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__country').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__country').html('Good!');      
      validCountry = true;       
    }

    if (state == '') {
      $('#inputState').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__state').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__state').html('Input  is not filled!');
      validState = false;
    } else {
      $('#inputState').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__state').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__state').html('Good!');      
      validState = true;       
    }

    if (zip == '') {
      $('#inputZip').removeClass('is-valid').addClass('is-invalid');
      $('.change-info__zip').removeClass('valid-feedback').addClass('invalid-feedback');
      $('div.change-info__zip').html('Input  is not filled!');
      validZip = false;
    } else {
      $('#inputZip').removeClass('is-invalid').addClass('is-valid');  
      $('.change-info__zip').removeClass('invalid-feedback').addClass('valid-feedback');
      $('div.change-info__zip').html('Good!');      
      validZip = true;       
    }

    console.log({ validEmail })
    console.log({ validFirstName })
    console.log({ validUsername })
    console.log({ validAddress })
    console.log({ validPhone })
    console.log({ validCountry })
    console.log({ validState })
    console.log({ validZip })

    if (
      validEmail &&
      validFirstName &&
      validLastName &&
      validUsername &&
      validAddress &&
      validPhone &&
      validCountry &&
      validState &&
      validZip) {
      $('#form').hide();
      $('.registration__box').append('<div class="message">The form is sent.</div>');
    }
      
  })
})