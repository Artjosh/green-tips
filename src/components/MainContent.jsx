import React from 'react';

const MainContent = () => {
    return (
    <div className="container">
        <div className="gif-container">
        <img src="https://i.postimg.cc/90vXLZxY/V-deo-sem-t-tulo-Feito-com-o-Clipchamp.gif" className="responsive-gif" id="responsive-gif"/>
        </div>
            <div className="section-anchor" id="introducao-ao-bac-bo"></div>
            <div className="section-container">
                <div className="content-wrapper">
                    <div className="section-text">
                        <h2 className="section-title">Introdução ao Bac Bo: Um Jogo de Cassino Dinâmico</h2>
                        <p className="section-text">Bac Bo, um emocionante jogo de cassino ao vivo, é uma versão simplificada e ágil do tradicional jogo de dados. Os resultados possíveis são três: azul (player), vermelho (banker) e marrom (tie). Durante o jogo, dois dados de cada cor (azul e vermelho) são lançados, e a soma deles determina o vencedor: player, banker ou empate.</p>
                    </div>
                    <div className="section-image">
                        <img src="https://i.postimg.cc/wTrPXjSt/intro.png" alt="Introdução" />
                    </div>
                </div>
            </div>

            <div className="section-anchor" id="gestao-de-banca"></div>
            <div className="section-container" id="section1">
                <div className="content-wrapper">
                    <div className="section-image">
                        <img src="https://i.postimg.cc/KzP735CN/banca.jpg" alt="Gestão de Banca" />
                    </div>
                    <div className="section-text">
                        <h2 className="section-title">Gestão de Banca: A Chave para Apostas Inteligentes</h2>
                        <p className="section-text">Essencial no mundo das apostas, a Gestão de Banca é o equilíbrio entre ganhos e perdas, minimizando riscos. Esse controle é crucial; sem ele, as chances de perder todo o investimento são altas. A Gestão de Banca envolve definir apostas conservadoras ou agressivas, mantendo uma unidade de aposta consistente.</p>
                    </div>
                </div>
            </div>

            <div className="section-anchor" id="estabelecendo-metas-no-cassino"></div>
            <div className="section-container">
                <div className="content-wrapper">
                    <div className="section-text">
                        <h2 className="section-title">Estabelecendo Metas no Cassino</h2>
                        <p className="section-text" id="metas">É vital estabelecer metas claras, semelhantes às dos mercados financeiros. Uma boa prática é definir um limite de lucro diário de 3 a 5% (stop win) e um limite de perda de 7 a 10% (stop loss). Após um revés (red), é recomendável pausar e evitar sinais por um tempo, pois os reds tendem a ocorrer em sequência.</p>
                    </div>
                </div>
            </div>

            <div className="section-anchor" id="localizando-o-jogo"></div>
            <div className="section-container" id="section2">
                <div className="content-wrapper">
                    <div className="section-image">
                        <img src="https://i.postimg.cc/RZq19Yzr/localizando.png" alt="Localizando o Jogo" />
                    </div>
                    <div className="section-text">
                        <h2 className="section-title">Localizando o Jogo</h2>
                        <p className="section-text">Para acessar o Bac Bo, siga o link da mesa enviada, navegue até "Jogos Ao Vivo" clicando no botão localizado ao extremo sul direita da tela e selecione "Bac Bo".</p>
                    </div>
                </div>
            </div>

            <div className="section-anchor" id="nossa-estrategia-com-martingale"></div>
            <div className="section-container">
                <div className="content-wrapper">
                    <div className="section-text">
                        <h2 className="section-title">Nossa Estratégia com Martingale</h2>
                        <p className="section-text">Utilizamos a técnica Martingale, que consiste em dobrar a aposta após cada derrota, até uma vitória. Limitamos a três entradas: se a terceira for perdida, encerramos e partimos para a próxima rodada. Protegemos nossas apostas no empate (tie) com uma porcentagem do valor principal, porém apenas em entradas altas.</p>
                        <p>Supondo que o sinal enviar a cor vermelha.</p>
                        <p>1ª entrada: R$10,00</p>
                        <p>2ª entrada: R$20,00</p>
                        <p>3ª entrada: R$40,00</p>
                        <p>Caso não dê vermelho na entrada, repetimos a cor, em dobro, na próxima entrada. Mas caso dê vermelho em alguma das entradas, paramos por ali.</p>
                    </div>
                </div>
            </div>

            <div className="section-anchor" id="compreendendo-as-notificacoes"></div>
            <div className="section-container" id="section3">
                <div className="content-wrapper">
                    <div className="section-image">
                        <img src="https://i.postimg.cc/HWMpxqMw/mensagem.png" alt="Compreendendo as Notificações" />
                    </div>
                    <div className="section-text">
                        <h2 className="section-title" id="compreendendo-as-notificacoes">Compreendendo as Notificações</h2>
                        <p className="section-text">Fique atento às notificações de "Analisando" e "Entrada Confirmada", que indicam a cor a ser apostada e a proteção necessária.</p>
                    </div>
                </div>
            </div>

            <div className="section-anchor" id="realizando-a-entrada"></div>
            <div className="section-container">
                <div className="content-wrapper">
                    <div className="section-text">
                        <h2 className="section-title" id="realizando-a-entrada">Realizando a Entrada</h2>
                        <p className="section-text">Localize a mesa indicada na notificação, escolha o valor e selecione a cor da aposta. Em caso de derrota, use a opção "REPETIR" e depois "x2" para dobrar a aposta anterior, seguindo nossa estratégia. Mantenha-se atento ao cronômetro no canto superior direito.</p>
                    </div>
                    <div className="section-image">
                        <img src="https://i.postimg.cc/jjNB4bhK/aposta.png" alt="Realizando a Entrada" />
                    </div>
                </div>
            </div>
            <div className='content-wrapper'></div>
    </div>
    );
};

export default MainContent;