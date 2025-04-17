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
    //console.log(event)
    // console.log(event)
    event.preventDefault()
    
    if (firstNameInputElement.value === "" ) {
      firstNameInputElement.style.backgroundColor = 'pink'
      errorInForm = true
    }
    if (firstNameInputElement.value.length < 5  ) {
      console.log(firstNameInputElement.value.length)
      console.log("too short")
    }


    if (lastNameInputElement.value === "") {
      lastNameInputElement.style.backgroundColor = 'pink'

    }
    if (cityInputElement.value === "") {
      cityInputElement.style.backgroundColor = 'pink'

    }
    if (cardNumberInputElement.value === "") {
      cardNumberInputElement.style.backgroundColor = 'pink'

    }
    if (stateInputElement.value === "Pick a state") {
      stateInputElement.style.backgroundColor = 'pink'

    }

    if (postalCodeElement.value === "") {
      postalCodeElement.style.backgroundColor = 'pink'

    }

    if (inputCvcElement.value === "") {
      inputCvcElement.style.backgroundColor = 'pink'

    }

    if (inputAmountElement.value === "") {
      inputAmountElement.style.backgroundColor = 'pink'

    }

    errorInForm? alertDivElemnt.className = "alert alert-danger fw-medium" : alertDivElemnt.className = "invisible"

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

  let stateInputElement = document.querySelector('#inputState')

  let alertDivElemnt = document.querySelector('#alertDiv')
  

};
