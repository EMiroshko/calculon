const firstValue = document.querySelector('#first-value'),
      secondValue = document.querySelector('#second-value'),
      firstError = document.querySelector('#first-error'),
      secondError = document.querySelector('#second-error'),
      inputs = document.querySelectorAll('.input'),
      operation = document.querySelector('#select'),
      result = document.querySelector('#result'),
      form = document.querySelector('#form');


      // Validation

function onChangeInputs(e) {
console.log(Number(e.target.value))
    if (isNaN(+e.target.value) && e.target.id === 'first-value') {
        firstError.style.display = 'inline'
    } else {
        firstError.style.display = 'none'
    }

    if (isNaN(+e.target.value) && e.target.id === 'second-value') {
        secondError.style.display = 'inline'
    } else {
        secondError.style.display = 'none'
    }
    
}

inputs.forEach(input => {
    input.addEventListener('input', onChangeInputs)
})

// Getting result

const getResult = (firstValue, secondValue, operation) => {
    switch (operation) {
        case '+':
            return +firstValue + +secondValue
        case '-':
            return +firstValue - +secondValue
        case '/':
            return +firstValue / +secondValue
        case '*':
            return +firstValue * +secondValue
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    result.innerText = Math.round(getResult(firstValue.value, secondValue.value, operation.value))
    
    form.reset()
})


