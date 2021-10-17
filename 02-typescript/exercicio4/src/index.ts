type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// Exercício 04:

/*
a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript?
R: rodaria o comando tsc ./index.ts para criar na mesma pasta um arq compilado para o JS

b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
R: ./src/index.ts

c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
R: 
1. criar e configurar o arquivo tsconfig com tsc --init
2. rodar o comando tsc na pasta raiz

d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?

strict - Enable all strict type-checking options. 
"esModuleInterop": true, - Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
"forceConsistentCasingInFileNames": true - Disallow inconsistently-cased references to the same file.

Configurações diferentes. 
*/

