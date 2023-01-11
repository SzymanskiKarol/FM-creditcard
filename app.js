const number = document.getElementById("number");
const numberInput = document.getElementById("card-number");

const name = document.getElementById("name");
const nameInput = document.getElementById("cardholder");

const month = document.getElementById("month");
const monthInput = document.getElementById("month-exp");

const year = document.getElementById("year");
const yearInput = document.getElementById("year-exp");


const cvc = document.getElementById("cvc");
const cvcInput = document.getElementById("cvc-number");


numberInput.addEventListener("input", function () {
    number.innerHTML = this.value;
})

nameInput.addEventListener("input", function () {
    name.innerHTML = this.value;
})

monthInput.addEventListener("input", function () {
    month.innerHTML = this.value;
})

yearInput.addEventListener("input", function () {
    year.innerHTML = this.value;
})

cvcInput.addEventListener("input", function () {
    cvc.innerHTML = this.value;
})




function handleSubmit(e) {
    e.preventDefault();
    if (!nameInput.value) {
      nameInput.classList.add('error');
      nameInput.parentElement.classList.add("error-message")
    } else {
      nameInput.classList.remove("error");
      nameInput.parentElement.classList.remove("error-message");
    }
    if (!numberInput.value) {
      numberInput.classList.add('error')
      numberInput.parentElement.classList.add("error-message");
    } else if (numberInput.value.length < 19) {
        numberInput.classList.add("error")
    } else {
      numberInput.classList.remove("error");
      numberInput.parentElement.classList.remove("error-message");
    }
    if (!monthInput.value) {
      monthInput.classList.add("error")
      monthInput.parentElement.classList.add("error-message");
    } else {
      monthInput.classList.remove("error");
      monthInput.parentElement.classList.remove("error-message");
    }
    if (!yearInput.value) {
      yearInput.classList.add("error")
      yearInput.parentElement.classList.add("error-message");
    } else {
      yearInput.classList.remove("error");
      yearInput.parentElement.classList.remove("error-message");
    }
    if (!cvcInput.value) {
      cvcInput.classList.add("error")
      cvcInput.parentElement.classList.add("error-message");
    } else {
      cvcInput.classList.remove("error");
      cvcInput.parentElement.classList.remove("error-message");
    }
    if (
      nameInput.value &&
      numberInput.value &&
      monthInput.value &&
      yearInput.value &&
      cvcInput.value &&
      numberInput.value.length == 19
    ) {
      document.querySelector(".completed").classList.remove("hidden");
      document.querySelector("form").classList.add("hidden");
    }
  
}


submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", handleSubmit);