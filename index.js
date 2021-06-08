var parar = 0;
while (parar < 1){

console.log("Bem vindo a beauty glasses");
console.log("-------------------------");
console.log("Essas são nossas opcões:");
console.log(" ");
console.log("Óculos de sol  R$200,00");
console.log(" ");
console.log("Óculos de grau R$150,00");
console.log(" "); 
console.log("Óculos de brinquedo R$100,00");
console.log(" ");
console.log("-------------------------");

var expr = prompt("Escolha um modelo");
if (expr== 'oculos de sol'|| 'oculos de grau'|| 'oculos de brinquedo'){

switch(expr){ 
  case 'oculos de sol': 
  console.log("O modelo escolhido foi o 'oculos de sol' e o valor é de R$200,00");
  console.log(" ");
  break;
  case 'oculos de grau':
  console.log("O modelo escolhido foi o 'oculos de grau'e o valor é de R$150,00");
  console.log(" ");
  break;
  case 'oculos de brinquedo':
  console.log("O modelo escolhido foi o 'oculos de brinquedo' e o valor é de R$100,00 ");
  console.log(" ");
  break;
}
var confirma = prompt("Você confirma a sua escolha? Caso queira refazê-la aperte 1");
}


parar = parar + 1;
}

for (var para = 0; para < 1; para++) {


console.log("Qual a  forma de pagamento?");
console.log("-boleto");
console.log("-cartao");
console.log("-pix");
var er = prompt("Escolha uma forma de pagamento");
if (er== 'boleto'|| 'cartao'|| 'pix'){

switch(er){ 
  case 'boleto': 
   console.log("O boleto será emitido e enviado para o seu e-mail");
  var email = prompt("Digite seu e-mail:");
  console.log("Boleto enviado");
  console.log(" ");
  break;
  case 'cartao':
    console.log(" ")
  var numeroCartao = prompt("Número do cartao: ");
  var cvv = prompt("CVV: ")
  break;
  case 'pix':
  console.log("Chave PIX:551846327")
  var chavedeacesso = prompt("Digite a chave: ")
  if(chavedeacesso ==551846327 ){
    console.log("Pagamento recebido")
  }else{
    console.log("Chave incorreta")
  } 
  break;
}
}


}
var i = 0;
do {
   var endereco = prompt("Digite seu endereço: ")
   console.log("Seu endereço é:" + endereco)
   var confirmar = prompt("Você confirma seu endereço? ");
   i++
} while (i < 1);
console.log("O produto esta sendo enviado");