//==========================Declarações de Variaveis=======================================
    //Objetos/Elementos
    var menu_botao = document.querySelector('#menu_botao')
    var menu = document.querySelector('#menu_mobile')//Recebe o Menu Mobile
    var nav_link = null//Recebe os Elementos Links(a) da Tag Nav
    //Numerico
    var largura = document.documentElement.clientWidth;//Recebe a Largura da Tela
    //Logico
    var lMobile = false //Valida se está no Modo Mobile
    var lAbre = false //Valida se a aba está em aberto

//============================Escopo==============================
    //Verifica se é dispositivo mobile
    if(largura <= 991){
        lMobile = true//Recebe verdadeiro por está em Mobile
        menu = document.querySelector('#menu_mobile');//Recebe o Menu Mobile
        AjustaMenu();//Chama Função Para ajustar Menu
    }    

//======================================Funções====================================
    /*  
    -----------------------------------------------------------------------------
    Função: AjustaMenu()
    -----------------------------------------------------------------------------
    Motivo: Ajusta Menu para mobiles
    -----------------------------------------------------------------------------
    Data: 21/10/2023
    -----------------------------------------------------------------------------
    Programador(a): Ighor Drummond
    -----------------------------------------------------------------------------
    */
    function AjustaMenu(){
        //Disabilita os Links do Menu Desktop
        for(nCont = 1; nCont <= 7; nCont++){
            nav_link = document.querySelector('#link'+ nCont.toString())
            nav_link.style.display= 'none'
        }

        //Habilitando Menu Mobile
        menu_botao.style.display = 'inline'//Ativa o Botão Menu Mobile
        menu_botao.style.background = " url('img/icone.png') no-repeat top right"//Inserir link Mobile
        menu_botao.style.backgroundSize = '100%'//Define o tamanho do Icone Menu Mobile
        menu_botao.style.border = 'none'//Desabilita a borda do botão
        menu_botao.style.height = '20px' //Define um tamanho para altura botão
        menu_botao.style.width = '20px' //Define um tamanho para largura botão
    }
    /*  
    -----------------------------------------------------------------------------
    Função: FechaAba()
    -----------------------------------------------------------------------------
    Motivo: Fecha a Aba Menu que está em aberto
    -----------------------------------------------------------------------------
    Data: 21/10/2023
    -----------------------------------------------------------------------------
    Programador(a): Ighor Drummond
    -----------------------------------------------------------------------------
    */
    function FechaAba(){
        //Verifica se está em modo mobile
        if(lMobile == true && lAbre == true){
            menu.style.animation = ''
            menu.style.animation = ' Fecha 1s 1'//Anima a saida da aba
            menu.style.display = 'none'//Desabilita a Aba Menu
            lAbre = false//Ativa opção para abrir a aba
        }
    }
    /*  
    -----------------------------------------------------------------------------
    Função: AbreAba()
    -----------------------------------------------------------------------------
    Motivo: Abre a Aba em modo mobile
    -----------------------------------------------------------------------------
    Data: 21/10/2023
    -----------------------------------------------------------------------------
    Programador(a): Ighor Drummond
    -----------------------------------------------------------------------------
    */
    function AbreAba(){
        //Verifica se está em modo mobile
        if(lMobile == true && lAbre == false){
            menu.style.animation = 'abre 1s 1'
            menu.style.display = 'block'//Ativa o Menu
            lAbre = true//Desativa a opção de abrir a aba
        }
    }
