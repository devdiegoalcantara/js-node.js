const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) {
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// Um array de números
const numeros = [1, 2, 3, 4, 5];

// Uma função de callback que imprime o dobro do valor
function dobrar(valor) {
  console.log(valor * 2);
}

// Usando o forEach para percorrer o array e chamar a função de callback
numeros.forEach(dobrar); // Imprime 2, 4, 6, 8, 10
