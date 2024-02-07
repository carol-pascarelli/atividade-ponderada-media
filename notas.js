// Controle de notas dos alunos 
var nota1 = 9;
var nota2 = 6;

// Verificando se passou ou reprovou 
var mediaPassar = 6.5;
var Passou = (nota1 + nota2)/2 >= mediaPassar;
var Reprovou = (nota1 + nota2)/2 < mediaPassar;

// Resultado 
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Média para passar:", mediaPassar);

if (Passou) {
  console.log("Aluno passou");
} else if (Reprovou) {
  console.log("Aluno reprovou");
} else {
  console.log("Aluno em recuperação");
}