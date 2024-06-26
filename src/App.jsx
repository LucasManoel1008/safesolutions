import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import firstImage from './assets/img/firstImage.png'



function App() {


  function abrirNav(){
    document.getElementById('menuOculto').style.marginLeft = "0";
    document.getElementById('menuOculto').style.transition = "0.5s";

  }

  function fecharNav(){
      document.getElementById('menuOculto').style.marginLeft = "-100vh";
  }

  function botaoScroll(){
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
          document.getElementById("botaoScroll").style.display = "block";
          
        } else {
          document.getElementById("botaoScroll").style.display = "none";
          
        }
      }

  function voltartopo(){
      var check = 'false'
      if(check){
      window.scrollTo({top:0, behavior: 'smooth'})
      check = 'true'
      }
      if(check = false){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }
  }
  function ajustarTexto(){
      document.getElementById('mensagem').style.height ='auto';
      document.getElementById('mensagem').style.height =mensagem.scrollHeight + 'px';
  }

    

  return (
    <div>
       <button id="botaoScroll" onClick={()=>{}}>&uarr;</button>
    <header className="header" id="header">      
        <div className="menuOculto" id="menuOculto">
            <button className="btn-close" onClick={()=>{}}>&times;</button>
            <a href="" id="active">AJUDA</a>
            <a href="">SERVIÇOS</a>
            <a href="">SOBRE NÓS</a>
            <a href="">ENTRAR</a>
        </div>

        <div className="elements-header">
            
            <button onClick={abrirNav}>
              <img src="img/Menu.svg" alt="Menu" id="elements-header" style={{fontSize: "30px", cursor: "pointer"}} />
            </button>
           

            <div className="elementsHeader-desktop">
                <a href="">SERVIÇOS</a>
                <a href="">SOBRE NÓS</a>
                <a href="" id="active">AJUDA</a>
            </div>
            <div className="logo">
                <a href="" id="logo-header"><img src="img/Logo.png" alt="" /></a>
            </div>
            <div className="left-header-desktop">
                <a href="" className="login">ENTRAR</a>
                <a href="" className="registro">REGISTRO</a>
            </div>
        </div>
    </header>

     <main >
        {/* <!-- Isso aqui é a primeira imagem do site "negócios rápidos resultados mains ainda"-
        Para ele funcionar, deixei os textos em position: absolute e a imagem no relative,
        por isso ainda falta responsivo nele --> */}
         <div className="main-info"> 
            <div className="main-image">
                  <img src={firstImage} alt="" className="main-image" />
                <div className="image-text">
                    <h1>Negócios rápidos</h1>
                    <h1 className="image-text2">Resultados mais ainda</h1>
                </div>
                <button className="btn-main" onClick={()=>{}}><p>Acesse já</p></button>
            </div>
        </div> 
    </main> 

    {/* <!--Área com todos os textos do corpo do site, Cada div text é um texto com seu icone,
    falta alterá-lo de acordo com o novo figma, está totalmente responsivo ja.--> */}
<main className="main-content">
    <h1 className="title-main-text">Sobre o Projeto</h1>
    <section className="text-body">
        <div className="Text">
            <h1>Todos em um só <span className="text-underline">Lugar</span></h1>
            <img src="img/Safety.svg" alt="Icon" className="icon-main-text" />
            <p> <span className="bold blue2">Descubra</span>, 
                <span className="bold blue2">contrate</span>
                e <span className="bold blue2">conecte-se</span> 
                com uma variedade de empresas oferecendo uma gama
                diversificada de serviços para resolver seus problemas.</p>
            <p> Focada em serviços e instalações  empresariais, a Safe Solutions
                oferece uma rede que interliga de forma prática e funcional 
                prestadoras de serviço com potenciais empresas-cliente que 
                necessitam de um serviço.</p>
        </div>
        <div className="Text">
            <h1>Como Nós <span className="text-underline">Operamos?</span></h1>
            <img src="img/tecnico_itb.svg" alt="tecnico_itb" className="icon-main-text"/>
            <p>Nosso Sistema divulga diversos serviços de empresas, para empresas, ao redor do Brasil.
                Publique serviços de sua empresa, ou procure dentre a vasta variedade de opções para
                a sua própria.
            </p>
        </div>
        
        <div className="Text">
            <h1 className="blue">Gastos desnecessários</h1>
            <img src="img/gastos.svg" alt="Icon" className="icon-main-text"/>
            <p>Cerca de 5% do faturamento bruto de sua empresa pode estar
                sendo gasto de forma inadequada com serviços superfaturados.
                <span>
                <a href="https://www.solucoesdynamicair.com.br/blog/atencao-aos-custos-de-manutencao-em-sua-industria" target="_blank" style={{color: "#234063", textDecoration: "underline"}}>
                    Saiba mais</a>
            </span>
            </p>
        </div>
        <div className="Text">
            <ul className="list">
                <h1 className="blue">Nossa <span style={{textDecoration: "underline"}}>Missão</span></h1>
                <img src="img/Quest.svg" alt="Quest" className="icon-main-text"/>
                <li>
                    <span className="blue2 text-underline bold">Otimizar</span> a busca de soluções de problemas.
                </li>
                <li><span className="blue2 text-underline bold">Capacitar</span> clientes para encontrar serviços que precisam, quando precisam.

                </li>
                <li><span className="blue2 text-underline bold">Facilitar</span> comunicação entre empresas.

                </li>
            </ul>
        </div>
    </section>
</main>
    <section className="comments-area">
        <h1 className="title-main-text">Feedback de nossos clientes</h1>
        <div className="comments">
            <div className="container">
            <img src="img/woman1.png" alt="Luiza Meneses" />
            <h1>Luiza Meneses</h1>
            <p>O sistema de serviços compartilhados
                é uma verdadeira revolução! Agora posso
                acessar uma variedade de serviços de
                 diferentes empresas em um só lugar. É 
                 incrível como isso facilita minha vida como 
                 empreendedora.</p>
        </div>
        <div className="container">
            <img src="img/man1.png" alt="José Santos" />
            <h1>José Santos</h1>
            <p>Como proprietário de uma pequena empresa,
                sempre estou buscando maneiras de expandir 
                minha rede de serviços sem gastar muito. O
                sistema de serviços compartilhados é uma 
                solução brilhante. Posso acessar uma ampla
                gama de serviços de alta qualidade sem comprometer
                meu orçamento.</p>
        </div>
        <div className="container">
            <img src="img/woman2.png" alt="Fernanda Almeida" />
            <h1>Fernanda Almeida</h1>
            <p>Como proprietária de uma loja no setor 
                de varejo, é importante manter uma 
                aparência impecável e oferecer um 
                ambiente agradável aos clientes. O 
                sistema de serviços compartilhados 
                torna mais fácil encontrar profissionais 
                confiáveis para lidar com as necessidades 
                de limpeza, manutenção e reparos, permitindo
                que eu me concentre em oferecer a 
                melhor experiência de compra para 
                meus clientes.
            </p>
        </div>
        <div className="container">
            <img src="img/man2.png" alt="André Ferreira" />
            <h1>André Ferreira</h1>
            <p>Como empresário, sempre estou em busca
                de soluções eficientes para otimizar
                minhas operações. O sistema de serviços
                compartilhados me permite acessar uma
                variedade de serviços essenciais para 
                minha empresa de forma rápida e fácil
                . É uma ferramenta indispensável para
                quem busca crescimento e eficiência 
                nos negócios.</p>
        </div>
    </div>
    </section>
    <hr/>
    <section className="FAQ">
        <h1 className="title-main-text blue2 align-text">Perguntas Frequentes</h1>
        <ul className="FAQ-container">
            <li>
                <input type="radio" name="faq" id="firstFAQ" />
                <label >Como usar a plataforma?</label>
                <div className="faq-content">
                    <p>
                        {/* <!-- placeholder --> */}
                     Como Provedor - você pode divulgar os serviços que sua empresa disponibiliza. <br/>  
                     Como Cliente - Você poderá ter acesso a diversoso serviços disponiveis.
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name="faq" id="secondFAQ" />
                {/* <!-- placeholder --> */}
                <label >Que tipo de segunrança a plataforma possui contra golpes?</label>
                <div className="faq-content">
                    <p>
                        Instalações e serviços empresariais, no geral, demandam muitas etapas, 
                        um contato individual com as servidoras, e uma burocracia que precisa
                        perder espaço com a rapidez do mercado moderno. A grandiosa vantagem 
                        da Safe Soluction© é reunir todas as etapas do processo num único lugar,
                         otimizando tempo e unificando também a contatação para todas as empresas,
                          sejam elas prestadoras ou solicitantes de serviços.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="faq" id="thirdFAQ" />
                <label >Por que usar a plataforma de vocês?</label>
                <div className="faq-content">
                    <p>
                        Instalações e serviços empresariais, no geral, demandam muitas etapas, 
                        um contato individual com as servidoras, e uma burocracia que precisa
                        perder espaço com a rapidez do mercado moderno. A grandiosa vantagem 
                        da Safe Soluction© é reunir todas as etapas do processo num único lugar,
                         otimizando tempo e unificando também a contatação para todas as empresas,
                          sejam elas prestadoras ou solicitantes de serviços.
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name="faq" id="fourthFAQ" />
                <label >A plataforma possui aplicativo móvel para facilitar o acesso em dispositivos móveis?</label>
                <div className="faq-content">
                    <p>
                        Sim, a plataforma possui uma versão mobile, que está disponível para Android e IOS. O aplicativo é essencial para quem busca praticidade e um acompanhamento
                      dos serviços e contatações mesmo longe dos dispositivos desktop.
                    </p>
                </div>
            </li>
        </ul>

    </section>

    <form className="forms">
        <div className="forms-title">
            <h1>Ainda dúvidas? Entre em Contato Conosco!</h1>
            <p>*Entrada Obrigatória</p>
        </div>
            <div className="forms-data">
                <input type="text" placeholder="*NOME" onFocus={()=>{}} id="name"/>
                <input type="text" placeholder="*SOBRENOME"/>
                <input type="email" placeholder="*EMAIL"/>
                <input type="tel" placeholder="TELEFONE"/>
                <input type="text" placeholder="CIDADE"/>
                <div className="razao">
                <p>*Assunto</p>
                <select name="Assunto" id="Assunto">
                    <option value="Assunto" defaultValue= "Assunto">*ASSUNTO</option>
                    <option value="Reclamacao" >RECLAMAÇÃO</option>
                    <option value="Elogio" >ELOGIO</option>
                    <option value="Informacao" >INFORMAÇÃO</option>
                </select>
                <div className="textarea">
                    <textarea  rows="1" placeholder="*Mensagem" id="mensagem" onInput={()=>{}}></textarea>
                </div>
            </div>
            </div>
            <input id="submit" type="submit" value="enviar"/>
    </form>

    {/* <!--Nosso rodapé inteiro, atualmente ele está responsivo, mas não da maneira certa,
    ao chegar a uns 720px (largura não precisa) ele precisa ficar em fileira, e não coluna--> */}
    <footer className="footer">
        <div className="elements-footer">
            <ul>
                <a href=""><h3>Sobre Nós</h3></a>
                <a href=""><h3>Política de Privacidade</h3></a>
                <a href=""><h3>Serviços</h3></a>
            </ul>
        </div>

            <ul className="icons-footer">
                <a href=""><img src="img/zap.svg" alt="Whatsapp"/></a>
                <a href=""><img src="img/x.svg" alt=""/></a>
                <a href=""><img src="img/Facebook.svg" alt=""/></a>
                <a href=""><img src="img/Instagram.svg" alt=""/></a>
                <a href=""><img src="img/LinkedIn.svg" alt=""/></a>
            </ul>
            <h1 className="align-text">© 2024 Safe Solutions. Todos os direitos reservados.</h1>
    </footer>

    </div>
  )
}

export default App
