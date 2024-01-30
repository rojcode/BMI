const $ = document;

// Create Elements

// Header

const calculatorContainer = $.querySelector('#calculator-container');
const h2calculator = $.createElement('h2');
if(calculatorContainer){
    calculatorContainer.insertBefore(h2calculator,calculatorContainer.firstChild)
    h2calculator.textContent = 'BMI Calculator';
}else{
    console.error(`Can't find calculatorContainer`)
}

// Create  weight
const weightLabel = $.createElement('label');
weightLabel.setAttribute('for','weight');
weightLabel.textContent = 'Weight (kg):';

const weightRange = $.createElement('input');
weightRange.type = 'range';
weightRange.setAttribute('id','weight');
weightRange.setAttribute('min','20');
weightRange.setAttribute('max','150');
weightRange.value = 70;

const weightSpan = $.createElement('span');
weightSpan.setAttribute('id','weightValue');
weightSpan.textContent = '70 kg';

if(calculatorContainer){
    calculatorContainer.append(weightLabel,weightRange,weightSpan);
}else{
    console.error(`Can't find calculatorContainer`);
}


// Create Height
const heightLabel = $.createElement('label');
heightLabel.setAttribute('for','height');
heightLabel.textContent = 'Height (cm):';

const heightRange = $.createElement('input');
heightRange.type = 'range';
heightRange.setAttribute('id','height');
heightRange.setAttribute('min','130');
heightRange.setAttribute('max','220');
heightRange.value = 170;

const heightSpan = $.createElement('span');
heightSpan.setAttribute('id','weightValue');
heightSpan.textContent = '170 cm'

if(calculatorContainer){
    calculatorContainer.append(heightLabel,heightRange,heightSpan)
}else{
    console.error(`Can't find calculatorContainer`);
}


// Create Results

const resultDiv = $.createElement('div');
resultDiv.setAttribute('id','result');

if(calculatorContainer){
    calculatorContainer.append(resultDiv);
}else{
    console.error(`Can't find calculatorContainer`);
}


const calculateBMI = ()=>{
    const weight = weightRange.value;
    const height = heightRange.value / 100;
    const bmi = (weight/(height*height)).toFixed(2);

    let result = ` You're BMI is: ${bmi}.`;

    if (bmi < 18.5) {
        result += 'Underweight';
        resultDiv.style.color = 'purple';
    } else if (bmi < 24.9) {
        result += 'Normal weight';
        resultDiv.style.color = 'green';
    } else if (bmi < 29.9) {
        result += 'Overweight';
        resultDiv.style.color = 'orange';
    } else {
        result += 'Obese';
        resultDiv.style.color = 'red';
    }
    
    resultDiv.textContent = result;
}


weightRange.addEventListener('input',(e)=>{
    weightSpan.textContent = e.target.value + ' ' + 'Kg';
    weightRange.value = e.target.value;
    calculateBMI();
    
})

heightRange.addEventListener('input',(e)=>{
    heightSpan.textContent = e.target.value + ' ' + 'cm';
    heightRange.value = e.target.value;
    calculateBMI();
})




