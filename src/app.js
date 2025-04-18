import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function (event) {


  //write your code here

  let errorInForm = false

  let submitButton = document.querySelector('#submit-button')

  //Click event on submit button
  submitButton.addEventListener('click', function (event) {
    event.preventDefault()

    //First name validations

    if (firstNameInputElement.value === "") {
      firstNameInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else {
      firstNameInputElement.style.backgroundColor = 'white'
      errorInForm = false
    }


    if (firstNameInputElement.value.length < 5) {
      errorInForm = true
      firstNameInputElement.style.backgroundColor = 'pink'
    } else {
      firstNameInputElement.style.backgroundColor = 'white'
      errorInForm = false
    }


    if (lastNameInputElement.value === "") {
      lastNameInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { lastNameInputElement.style.backgroundColor = 'white' }

    if (cityInputElement.value === "") {
      cityInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { cityInputElement.style.backgroundColor = 'white' }

    if (cardNumberInputElement.value === "") {
      cardNumberInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { cardNumberInputElement.style.backgroundColor = 'white' }

    if (stateInputElement.value === "Pick a state") {
      stateInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { stateInputElement.style.backgroundColor = 'white' }

    if (postalCodeElement.value === "") {
      postalCodeElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { postalCodeElement.style.backgroundColor = 'white' }

    if (inputCvcElement.value === "") {
      inputCvcElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputCvcElement.style.backgroundColor = 'white' }

    if (inputAmountElement.value === "") {
      inputAmountElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputAmountElement.style.backgroundColor = 'white' }

    if (inputMessageElement.value === "") {
      inputMessageElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputMessageElement.style.backgroundColor = 'white' }

    //if(masterCardInputElement)




    errorInForm ? alertDivElemnt.className = "alert alert-danger fw-medium" : alertDivElemnt.className = "invisible"

  })



  //Form inputs
  let cardNumberInputElement = document.querySelector("#inputCardNumber")
  cardNumberInputElement.value = ""

  let firstNameInputElement = document.querySelector("#inputFirstName")
  firstNameInputElement.value = ""

  let cityInputElement = document.querySelector('#inputCity')
  cityInputElement.value = ""

  let lastNameInputElement = document.querySelector('#inputLastName')
  lastNameInputElement.value = ""

  let postalCodeElement = document.querySelector('#inputPostalCode')
  postalCodeElement.value = ""

  let inputCvcElement = document.querySelector('#inputCVC')
  inputCvcElement.value = ""

  let inputAmountElement = document.querySelector('#inputAmount')
  inputAmountElement.value = ""

  let inputMessageElement = document.querySelector('#inputMessage')
  inputAmountElement.value = ""

  let stateInputElement = document.querySelector('#inputState')

  let alertDivElemnt = document.querySelector('#alertDiv')

  let masterCardInputElement = document.querySelector('#mastercard')


};
