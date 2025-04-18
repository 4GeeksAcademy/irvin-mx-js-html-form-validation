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

    //Form firstname validations

    if (firstNameInputElement.value === "") {
      firstNameInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else {
      firstNameInputElement.style.backgroundColor = 'white'
      errorInForm = false
    }
    //Name must have between range of 3 and 25 characters in length
    if (firstNameInputElement.value.length < 2 || firstNameInputElement.value.length > 25) {
      console.log("length of firstname is", firstNameInputElement.value.length)
      errorInForm = true
      firstNameInputElement.style.backgroundColor = 'pink'
    } else {
      firstNameInputElement.style.backgroundColor = 'white'
      errorInForm = false
    }

    //Form last name validations
    if (lastNameInputElement.value === "") {
      lastNameInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { lastNameInputElement.style.backgroundColor = 'white' }

    //Last name must have between range of X and Y characters in length
    if (lastNameInputElement.value.length < 2 || firstNameInputElement.value.length > 40) {
      errorInForm = true
      lastNameInputElement.style.backgroundColor = 'pink'
    } else {
      lastNameInputElement.style.backgroundColor = 'white'
      errorInForm = false
    }

    //Form city name validations
    if (cityInputElement.value === "") {
      cityInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { cityInputElement.style.backgroundColor = 'white' }

    if (cityInputElement.value.length < 2 || cityInputElement.value.length > 80) {
      cityInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else {
      cityInputElement.style.backgroundColor = 'white'
    }

    //Form card number validations
    if (cardNumberInputElement.value === "") {
      cardNumberInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { cardNumberInputElement.style.backgroundColor = 'white' }

    if (cardNumberInputElement.value.length !== 16) {
      cardNumberInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else {
      cardNumberInputElement.style.backgroundColor = 'white'
    }

    //Form state validations
    if (stateInputElement.value === "Pick a state") {
      stateInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { stateInputElement.style.backgroundColor = 'white' }


    //Form postal code validations
    if (postalCodeElement.value === "") {
      postalCodeElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { postalCodeElement.style.backgroundColor = 'white' }

    if (postalCodeElement.value.length !== 5) {
      postalCodeElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else {
      postalCodeElement.style.backgroundColor = 'white'
    }


    //Form card cvc validations
    if (inputCvcElement.value === "") {
      inputCvcElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputCvcElement.style.backgroundColor = 'white' }

    if (isNaN(parseInt(inputCvcElement.value))) {
      console.log(parseInt(inputCvcElement.value))
      inputCvcElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputCvcElement.style.backgroundColor = 'white' }


    //Form amount validations
    if (inputAmountElement.value === "") {
      inputAmountElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputAmountElement.style.backgroundColor = 'white' }

    if (inputAmountElement.value === 0 || inputAmountElement.value < 0) {
      inputAmountElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputAmountElement.style.backgroundColor = 'white' }


    //Form message validations
    if (inputMessageElement.value === "") {
      inputMessageElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputMessageElement.style.backgroundColor = 'white' }

    if (inputMessageElement.value.length > 1000) {
      inputAmountElement.style.backgroundColor = 'pink'
      errorInForm = true
    } else { inputAmountElement.style.backgroundColor = 'white' }




    //Error message will apear indicating form is not correctly filled
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



};
