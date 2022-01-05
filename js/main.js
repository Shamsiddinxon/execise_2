let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResult = document.querySelector(".form__result");
let elResultUslug = document.querySelector(".form__result1");
let elResultJami = document.querySelector(".form__result2");
let elResultUslugalar = document.querySelector(".form__result3");


const agg = function (Value) {
    let ag1;
    50 <= Value && Value <= 300 ? ag1 = Value * (15/100) :ag1 = Value * (20/100);
    return ag1;
}

let usluga = []

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let inputValue = elFormInput.value;
    inputValue = inputValue * 1

    let maslaxat = Math.round(agg(inputValue));
    let jami = Math.round(inputValue + agg(inputValue));
    usluga.push(Math.round(agg(inputValue)))

    console.log(agg(inputValue));
    elResult.textContent = `Hisob-kitob: ${inputValue}`;
    elResultUslug.textContent = `Maslaxat: ${maslaxat}`;
    elResultJami.textContent = `Jami: ${jami}`;
    elResultUslugalar.textContent = `Uslugalar: ${usluga}`;
})