import React from 'react';

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <div id="mySidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
            <a href="javascript:void(0)" onClick={closeSidebar} className="closebtn">&times;</a>
            <a href="#introducao-ao-bac-bo" onClick={closeSidebar}>Introdução ao Bac Bo</a>
            <a href="#gestao-de-banca" onClick={closeSidebar}>Gestão de Banca</a>
            <a href="#estabelecendo-metas-no-cassino" onClick={closeSidebar}>Estabelecendo Metas no Cassino</a>
            <a href="#localizando-o-jogo" onClick={closeSidebar}>Localizando o Jogo</a>
            <a href="#nossa-estrategia-com-martingale" onClick={closeSidebar}>Nossa Estratégia com Martingale</a>
            <a href="#compreendendo-as-notificacoes" onClick={closeSidebar}>Compreendendo as Notificações</a>
            <a href="#realizando-a-entrada" onClick={closeSidebar}>Realizando a Entrada</a>
        </div>
    );
};

export default Sidebar;
