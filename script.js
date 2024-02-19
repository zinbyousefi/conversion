let $ = document

const firstValue = $.querySelector('.C')
const secondValue = $.querySelector('.F')
const converter = $.querySelector('#converter')
const result = $.querySelector('.result')
const changeBtn = $.querySelector('.changeButton')
const convertBtn = $.querySelector('.convertButton')
const resetBtn = $.querySelector('.resetButton')


function convert() {
    if(converter.value === ''){
        result.innerHTML = 'insert correct value'
        result.style.color = 'red'
        result.style.fontSize = '24px'
    } else {
        if (firstValue.innerHTML === '°C') {
          let resultValue = (converter.value * 1.8 ) + 32
          result.style.color = 'rgb(225 ,225 ,102)' 
          result.innerHTML = converter.value + '°C to ' + resultValue.toFixed(2) + '°F'
        }else {
            let resultValue = (converter.value - 32 ) * 5 / 9
            result.style.color = 'rgb(225 ,225 ,102)' 
            result.innerHTML = converter.value + '°F to ' + resultValue.toFixed(2) + '°C'
        }
    }
}
function change() {

    if(firstValue.innerHTML === '°C'){
        firstValue.innerHTML = '°F'
        secondValue.innerHTML = '°C'
        converter.setAttribute('placeholder' , '°F')
        $.title = '°F to °C'


    }else{
        firstValue.innerHTML = '°C'
        secondValue.innerHTML = '°F'
        converter.setAttribute('placeholder' , '°C')
        $.title = '°C to °F'



    }

}
function reset() {

    result.innerHTML = ''
    converter.value = ''

}


convertBtn.addEventListener('click' , convert)
changeBtn.addEventListener('click' , change)
resetBtn.addEventListener('click' , reset)
