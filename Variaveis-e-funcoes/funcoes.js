// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //2 -> valor de soma()
function imprimeTexto(texto) {
  console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());
// imprimeTexto("outro texto");

// três formas de escrever funções

function soma(){
  //outros códigos
  //vários console.log()
  const teste = 3 + 1
  console.log(teste)
  
  if (teste > 5) {
    return "verdadeiro" 
  } else {
    return 'falso'
  }
  
  

}

// console.log(soma())


function cumprimentar(){
  console.log ('Oi gente!')
 }
  
 cumprimentar()

 function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
 }
 
 cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”