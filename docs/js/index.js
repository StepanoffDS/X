"use strict";

// phone mask
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('[data-tel-input]'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

//Form
// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('cooperation-form')
//   // const inputPhone = document.getElementById('form-phone-number')
//   form.addEventListener('submit', formSend)

//   async function formSend(e) {
//     e.preventDefault()
//     let formData = new FormData(form)
//     let response = await fetch('sendmail.php', {
//       method: 'POST',
//       body: formData
//     })
//     // let error = formValidate(form)
//   }

//   // function formValidate(form) {
//   //   let error = 0
//   //   let formReq = document.querySelectorAll('._req')

//   //   for (let i = 0; i < formReq.length; i++) {
//   //     const input = formReq[i]
//   //     formRemoveError(input)

//   //     if (input.classList.contains('_tel')) {
//   //       if (telTest()) {
//   //         formAddError()
//   //         error++
//   //       }
//   //     }
//   //   }
//   // }
//   // function formAddError(input) {
//   //   input.parentElement.classList.add('_error')
//   //   input.classList.add('_error')
//   // }
//   // function formRemoveError(input) {
//   //   input.parentElement.classList.remove('_error')
//   //   input.classList.remove('_error')
//   // }

//   // function telTest() {
//   //   return inputPhone.length < 18 || inputPhone.length > 18
//   // }
// })

// Calculator
var inputManagers = document.querySelector('#input--managers');
var inputManagersValue = document.querySelector('#input--managers__volume');
inputManagers.addEventListener('input', function () {
  inputManagersValue.value = inputManagers.value;
});
var inputContract = document.querySelector('#input--contract');
var inputContractValue = document.querySelector('#input--contract__volume');
inputContract.addEventListener('input', function () {
  inputContractValue.value = inputContract.value;
});
var inputNumberManagers = document.querySelector('#input--number-managers');
var inputNumberManagersValue = document.querySelector('#input--number-managers__volume');
inputNumberManagers.addEventListener('input', function () {
  inputNumberManagersValue.value = inputNumberManagers.value;
});
var inputCheck = document.querySelector('#input--check');
var inputCheckValue = document.querySelector('#input--check__volume');
inputCheck.addEventListener('input', function () {
  inputCheckValue.value = inputCheck.value;
});
// Open List
var itemOfQuestions = document.querySelectorAll('.questions__list-item');
function toggleListOfQuestions(el) {
  itemOfQuestions[el].classList.toggle('active');
}