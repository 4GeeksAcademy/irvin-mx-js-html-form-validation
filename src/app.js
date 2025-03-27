import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(event) {
  //write your code here

  let submitButton = document.querySelector('#submit-button')

  submitButton.addEventListener('click', function(event){
    console.log(event)
  })

  //Card number input
  let cardNumberInputElement = document.querySelector("#inputAddress2")
  cardNumberInputElement.value = ""

  let firstNameInputElement = document.querySelector("#inputAddress2")
  firstNameInputElement.value = ""

  let lastNameInputElement = document.querySelector('#inputLastName')
  lastNameInputElement.value = ""

  /*const inputFieldsValuesObject = {
    firstNameInput: firstNameInputElement.value,
    lastNameInput: lastNameInputElement.value,
  }
  */

  //TRYING TO STORE FORM VALUES IN OBJECT
  /*const inputFieldsValuesObject = {
    cardNumberInput: document.querySelector('#inputEmail4').value
    firstNameInput: document.querySelector('#inputLastName').value,
    lastNameInput: lastNameInputElement.value,
  }
  */

  console.log('Trying to retreive value of element',firstNameInputElement.value)

  document.validateForm = function validateForm(event){
    console.log(event)
    event.preventDefault()
    if(firstNameInputElement.value === ""){
      firstNameInputElement.style.backgroundColor = 'pink'
      alert("first name is not correct",)
    }else if(lastNameInputElement.value === ""){
      lastNameInputElement.style.backgroundColor = 'pink'
      alert("last name is not correct")
    }else if(cardNumberInputElement.value === "" || typeof cardNumberInputElement.value === "string"){
      alert("card number is not correct")
    }
  }
};
