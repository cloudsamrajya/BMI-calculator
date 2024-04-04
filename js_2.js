const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
e.preventDefault();

const ht = parseInt(document.querySelector('.height').value);
const wt = parseInt(document.querySelector('.weight').value);
const result = document.querySelector('.result');
const description =document.querySelector('.description');

if(ht===' ' || ht < 0 || isNaN(ht)){
    result.innerHTML = "Invalid height";
    
}
 if (wt===' ' || wt < 0 || isNaN(wt)){
    result.innerHTML = "Invalid weight";

}
else {
   const bmi = ((wt)/((ht*ht)/10000)).toFixed(2);
   result.innerHTML = bmi;
   if(bmi < 18.5){

    description.innerHTML = "Underweight";
}
else if (bmi >= 18.5 && bmi <=24.9){
    description.innerHTML = "Normal Weight";

}
else if (bmi >= 25 && bmi <=29.9){
    description.innerHTML = "Over Weight";

}
else if (bmi >= 30) {
    description.innerHTML = "Obesity";

}
}

document.querySelector('.height').value = ' ';
document.querySelector('.weight').value = ' ';
});
