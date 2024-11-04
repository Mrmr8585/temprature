let $ = document
let firstvalue = $.querySelector('.C')
let secondvalue = $.querySelector('.F')
let input = $.querySelector('#degry')
let result = $.querySelector('.tabdil')
let convertbutton = $.querySelector('.convert')
let resetbutton = $.querySelector('.reset')
let changebutton = $.querySelector('.change')

convertbutton.addEventListener('click' , function()
{
    if (input.value === '') {
        result.textContent = 'insert correct value'
        result.style.color = 'red'
    } else 
    {
        if (firstvalue.textContent ==='°C') {
            let resultvalue = (input.value * 1.8 ) + 32 
            result.textContent = input.value + '°C To ' + resultvalue + '°F'
            result.style.color = 'yellow'
        } else 
        {
            let resultvalue = (input.value -32) * 5 / 9
            result.textContent = input.value + '°F To ' + resultvalue.toFixed(2) + '°C'
            result.style.color = 'yellow'
        }
    }
})
resetbutton.addEventListener('click' , function()
{
    result.textContent = ''
    input.value = ''
})
changebutton.addEventListener('click' , function()
{
    if(firstvalue.textContent === '°C')
    {
        firstvalue.textContent ='°F'
        secondvalue.textContent ='°C'
        input.setAttribute('placeholder' , '°F')
        $.title = 'mohammad javad | js | °F to °C'
    } else 
    {
        firstvalue.textContent ='°C'
        secondvalue.textContent ='°F'
        input.setAttribute('placeholder' , '°C')
        $.title = 'mohammad javad | js | °C to °F'
    }
})