# Boas vindas ao repositório da Mentoria de Javascript!!

Essa mentoria tem objetivo de colocar em prática o javascipt revisando algumas HoF's utilizadas em arrays, como filter, map e reduce, não limitando a essas, através de alguns exercícios que deverão ser desenvolvidos em grupo durante a mentoria.

---

# Desafios

### Durante a Mentoria

#### Desafio 01 - Retorne uma lista com a frequência por tipo de Pet, que sejam machos, e tenham a idade equivalente a idade humana\* maior ou igual a 10.

Dado uma lista de animais de estimação (file: data/Pets.json)
Retorne uma lista com a frequência por tipo de Pet, que sejam machos, e tenham a idade equivalente a idade humana\* maior ou igual a 10.

_idade humana = para efeitos práticos, neste exercícios vamos considerar o fator de multiplicação para encontrar a idade humana de um Pet o número sete, ou seja, se um pet tem 2 anos, em idade humana equivalente seria 14 (2 _ 7)

Resultado esperado:
`{ Dog: 3, Cat: 3, Turtle: 1, Rabbit: 1, Parrot: 1, Fish: 2 }`

#### Desafio 02 - Retorne em formato texto, conforme abaixo, contendo o nome e a idade de todas as gatas.

Dado uma lista de animais de estimação (file: data/Pets.json)
Retorne em formato texto, conforme abaixo, contendo o nome e a idade de todas as gatas.

Resultado esperado:

`- Emma: 3 anos`
`- Sophia: 6 anos`
`- Minie: 3 anos`
`- Harper: 1 ano`

#### Desafio 03 - Retorne a soma das idades de todos os pets que não são cachorros nem gatos.

Dado uma lista de animais de estimação (file: data/Pets.json)
Retorne a soma das idades de todos os pets que não são cachorros nem gatos.

Resultado esperado:
`43`

### Bônus para praticar

#### Bônus ForEach - Escreva uma função que:

- Dado um array como parâmetro, exiba a frase 'O número N é divisível por 2 e 3', onde N deve ser os elementos do array que satisfazem a condição da frase. - Use ForEach1.json

- Dados dois arrays por parâmetro, adicione em um terceiro array os elementos que estão presentes nos dois arrays ao mesmo tempo. Importante: Não é permitido usar o método .includes - Use ForEach1.json e ForEach2.json

#### Bônus Filter - Escreva uma função que:

- Dado um array como parâmetro, retorne as pessoas que possuem nome contendo a letra i. - Use TimeT12.json

- Dado um array como parâmetro, retorne somente os elementos que possuem rating maior que 3. - Use TimeT12.json

- Dados dois arrays contendo vários elementos, retire os elementos que sejam do tipo numérico de ambos e retorne esses valores em um novo array. Ex: arr1 = ['a', 3, 'b'], arr2 = [5, 4, 'asd'], arraRetorno = [3, 5, 4], - Use Filter1.json e Filter2.json

#### Bônus Map - Escreva uma função que:

- Dado um array como parâmetro, retorne um novo array alterando a chave nomi para nome. - Use TimeT12.json

- Dado um array como parâmetro, retorne um novo array que multiplica o rating por 2 para para pessoas com rating menor que 3. Pessoas com rating maior ou igual a 3 devem ser mantidos. - Use TimeT12.json

- Dado um array como parâmetro, retorne um novo array somente com o nome das pessoas. - Use TimeT12.json
