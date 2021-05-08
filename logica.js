// pega o valor digitado pelo usuário 

var idade = prompt ("digite sua idade")

//var idade  = 18;

if ( idade >= 18)
{
    console.log ("é maior de idade")
} else 
{
    console.log("é menos de idade")
}

function maior ()
{
    var num1 = prompt("digite o valor 1");
    var num2 = prompt("digite o valor 2");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    console.log(num1);
    console.log(num2);

   if (num1 == num2)
   {
       console.log("Os dois valores são iguais");
   } 
   else if (num1 > num2)
   {
    if (num1 > num2)
   
   {
        console.log("o valor "+ num1 + " é maior ");
    } else 
    
        console. log(" o valor "+num2 +"é o maior");
    