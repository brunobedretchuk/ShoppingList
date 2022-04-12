# Projeto-1

# Introdução
O presente projeto foi desenvolvido para ser apresentado no Primeiro Módulo do curso DEVinHouse.
Trata-se de uma lista de compras onde o usuário terá um input para adicionar um item pelo seu nome.
Ademais, existem três botões, responsáveis, respectivamente, pelas funções que insere um item novo; que deleta todos os items da lista; que deleta os items marcados pela checkbox correspondente.
Em seguida, tem-se um total que corresponde ao preço somado dos items marcados, cujo preço é estabelecido por um prompt.
Por fim, o restante da página dispõe todos os items constantes na variável lista.

# Arquivos

O projeto foi dividido em três arquivos, da seguinte forma: 
- index.html: possui os componentes básicos da página; foi criado com auxílio do framework Bootstrap;
- style.css: determina a estilização visual dos componentes da página;
- app.js: possui a lógica por trás do frontend. Atua com funções e manipulação de elementos do DOM;
- variables.js: exporta para o app.js as variáveis que correspondem aos elementos do DOM que serão manipulados.


# Método de Desenvolvimento

Utilizou-se do versionamento do próprio github e de branches para a implementação de cada etapa do código, ao final sendo as alterações concentradas no Main branch.

# Funcionamento

O código foi devidamente organizado e comentado para facilitar a compreensão do funcionamento.
A variável 'list' agrupa os itens, representados, cada um, por um objeto com as seguintes chaves:
list = [{
id: id único gerado por uma função em variables.js
name: nome do item,
price: preço do item, adicionado ao clicar na checkbox,
isBought: booleano que serve para verificar se o item foi marcado ou não
}]

Em geral, o código utiliza as funções:
- showList: atualiza todas as alterações feitas na lista, apresentando-as por renderização na página. ShowList é executado após cada alteração feita por outras funções (addToList , eraseItem , etc...);
- eraseList: retira os elementos renderizados da página, para que após cada renderização não ocorra a repetição de valores já acrescidos à lista;
- addToList: adiciona novos itens, cujo nome é provido pelo input existente no topo da página, o id é gerado automaticamente e isBought por padrão é 'false';
- checkRepetido: verifica se o novo item que se está tentando adicionar já consta na lista, por uma comparação de item.name;
- eraseItem: retira o item correspondente da lista, por meio de uma comparação entre o ID passado como parâmetro e o ID do item correspondente;
- eraseAllItems: apaga todos os itens em 'list';
- markItem: função executada ao marcar uma checkbox. Nessa etapa um prompt será aberto para atribuir preço ao item, após algumas verificações. Ao final, caso sucedido, atribui-se um preço novo e isBought recebe 'true';
- eraseAllMarked: Apaga todos os itens marcados, através de uma verificação do atributo isBought;
- saveToLocal/loadFromLocal: utiliza o Local Storage do navegador, para manter o estado atual da página após fechá-la ou atualizá-la, dentro de uma mesma sessão do navegador. LoadFromLocal é executada ao inicializar o código.

#Eventos

Foram utilizados dois event listeners para a função addButton, executando-a caso o usuário clique no botão 'add' ou aperte 'enter' enquanto o input estiver em foco.
Por fim, foi criado um event listener tanto para a função eraseAllItems, como para a função eraseAllMarked, atribuídos, respectivamente, para os botões 'delete all' e 'delete marked'.




