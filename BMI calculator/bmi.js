    let weight= document.querySelector("#weight")
    let height= document.querySelector("#height")
    let submit= document.querySelector("#submit")
    let result= document.querySelector("#result")
    let age = document.getElementById('age')
    let gender = document.getElementById('gender')
    let system = document.getElementById('system')
    
    function calculateBMI(){
        let weightValue = Number(weight.value);
        let heightValue = Number(height.value)/100;
        let BMI = (weightValue)/(heightValue*heightValue);
        let resultValue = "";
        
   if(BMI<=18.4){
    resultValue="UnderWeight"

}
else if(BMI>=18.5 && BMI<=24.9){
   resultValue="Normal Weight";
}
else if(BMI>=25 && BMI <=29.9){
   resultValue="OverWeight";
}
else{
    resultValue="Obese"
}
result.textContent="You Are "+resultValue

}
submit.addEventListener("click",calculateBMI)