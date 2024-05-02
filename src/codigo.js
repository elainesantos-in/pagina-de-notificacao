var quantidadeNotificacao = document.querySelector('.textoquantidadeNotificacao');
var marcarTodos = document.querySelector('.marcaTodos');
var notificacoes = document.querySelectorAll('.divNotificacao');
var bolinhaNotificacao = document.querySelectorAll('.sinalizandoNotificacao');
var notificacoesNaoAbertas = notificacoes.length; // Inicialmente, todas as notificações estão não abertas

// Atualize o elemento que exibe a quantidade de notificações não abertas
function atualizarQuantidade() {
    quantidadeNotificacao.textContent = notificacoesNaoAbertas.toString();
}

notificacoes.forEach((notificacao, index) => {
        notificacao.addEventListener('click', () => {
        notificacao.classList.add('semBackground'); // Adicione a classe para remover o background
        bolinhaNotificacao[index].classList.add('apagando');
        notificacoesNaoAbertas--; // Diminua o número de notificações não abertas
        atualizarQuantidade(); // Atualize a quantidade na interface
         }); // Adicione a classe para esconder a bolinha
});

// Inicialize a quantidade na interface
atualizarQuantidade();

marcarTodos.addEventListener('click', todasLidas);

function todasLidas() {
    notificacoes.forEach((notificacao, index) => {
        //!notificacao >> Isso verifica se o elemento notificacao não possui a classe 'semBackground'.  
        //Se o elemento não tiver essa classe, a condição será avaliada
        //como verdadeira e o bloco de código dentro do if será executado.
        if (!notificacao.classList.contains('semBackground')) {
            notificacao.classList.add('semBackground');
            bolinhaNotificacao[index].classList.add('apagando');
            notificacoesNaoAbertas--;
        }
        });
            // Garante que o número de notificações não abertas nunca seja menor que zero
            if (notificacoesNaoAbertas < 0) {
                notificacoesNaoAbertas = 0;
            }
                    // Atualiza a quantidade na interface
                    atualizarQuantidade();
                    }

//nao posso chamar o indez diretamento do parametro notificacao, pois a variavel 
//notificações e bolinhaNotificações é chamada com querySelectorAll logo é um nodelist e não um array
//para converter em array poderia passar por --var notificacoesArray = Array.from(notificacoes)--            
//function (item, indice, array)