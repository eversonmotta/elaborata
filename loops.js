
function imprimir ()
{

    var inicial = prompt ("digitie o numero inicial");
    var final = prompt("ditgite o final");

    inicial = parseInt(inicial)
    final = parseInt(final)

    while (inicial <= final)
{
    console.log(inicial);
    inicial = inicial +1;
}

}

function reverso ()
{

    var inicial = prompt ("digitie o numero inicial"); //10
    var final = prompt("ditgite o final");  //2

    inicial = parseInt(inicial)
    final = parseInt(final)

while (inicial >= final) // aqui muda o sinal tbm 
{
    console.log(inicial);
    inicial = inicial -1; // unica linha que mudaria.. nesta questão.
}

}


{

 for (var inicial = 0; inicial <=5; inicial = inicial +1) // é uma orma outra de fazer o while, fazer neste formato mais simples a notação, iguais a de cima. 
{
    console.log(inicial);


 function fatorial ()
 {
         var num = prompt("digite o numero inicial");
        num = parseInt(num);

        var total= 1;

        //4! = 4 * 3 * 2 * 1 = 24

    while (num > 1) 
{
    total = total * num; //12
    num = num - 1; //1
    // num -= 1;
    // num--;
}
  console.log("o valor do fatorial é " +total );
