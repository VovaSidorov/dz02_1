alert('Введите 5 любых чисел!')

function numberValidation(value){
    pr_value = parseInt(value);
    if (pr_value==value){
       return pr_value;
    }
    else 
    {                                
      alert('Некорректный ввод цифры');   
      return false;
    }
  }

function askNumber(){
    x =  numberValidation(prompt("Введите число"));
      return x;
}


var  durtyArray = [askNumber(),askNumber(),askNumber(),askNumber(),askNumber()];
alert('Вы ввели такие числа -' + durtyArray);
var temp = durtyArray[0];


for (var i=1; i<durtyArray.length; i++)
{
    if (temp<durtyArray[i]){
        temp = durtyArray[i];
    }
}

alert('Наибольшим из них является -' + temp);