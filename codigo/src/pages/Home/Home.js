import React from 'react';
import Styles from './Home.module.css';

import Navbar from '../../components/Navbar/Navbar.js';
import CompTitulo from '../../components/CompTitulo/CompTitulo.js';
import CompTexto from '../../components/CompTexto/CompTexto.js';

import img_dataLocal from '../../img/Data&Local.png';
import img_resumoestrategia from '../../img/imgMapa.webp';
import imgForcasPerdas1 from '../../img/Forças&Perdas1.jpg';
import imgForcasPerdas2 from '../../img/Forças&Perdas2.png';
import imgForcasPerdas3 from '../../img/Forças&Perdas3.jpg';
import imgTecnologiasTaticas from '../../img/bg_2.png';
import img_curiosidadesHistoricas from '../../img/CuriosidadesHistóricas.png'
import img_leiturasRecomendadas from '../../img/LeiturasRecomendadas.png'

let Home = () => {


    return (
        <div>
            <Navbar />
            <div className={Styles.Container}>
                <div className={Styles.Capa} id='InicioDirecao' />
                <div className={Styles.Main}>

                    {/* Container Tiutlo Site */}
                    <div className={Styles.Titulo}>
                        <h1>Stalingrado: ponto de virada no Leste</h1>
                        <p>Pesquisando a experiência de guerra. </p>
                    </div>
                    {/* FIM Container Tiutlo Site */}

                    {/* Container Data e Local */}
                    <div className={Styles.container_dataLocal} id='DataLocal'>
                        <div className={Styles.Texto}>
                            <CompTitulo Titulo={'Data e Local'} />
                            <CompTexto Texto={'A Batalha de Stalingrado ocorreu entre agosto de 1942 e fevereiro de 1943, na cidade de Stalingrado (atual Volgogrado), situada às margens do rio Volga. O local possuía uma importância estratégica imensa, pois era um grande centro industrial e de transportes, além de carregar o nome de Josef Stálin, líder soviético, o que dava ao confronto também uma forte dimensão simbólica. A cidade tornou-se o palco de um dos maiores embates da história militar, onde duas potências se enfrentaram não apenas pelo controle territorial, mas também pelo prestígio e pela moral de suas nações.'} Font={'🔗 Fonte: culturahistorica.org'} Url={'https://culturahistorica.org/wp-content/uploads/2020/02/beevor-stalingrad.pdf?'} />
                        </div>
                        <img src={img_dataLocal} className={Styles.img_dataLocal} />
                    </div>
                    {/* FIM Container Data e Local */}


                    {/* Container Resumo e Estrategias */}
                    <div className={Styles.container_resumoestrategia} id='ResumoEstrategia'>
                        <img src={img_resumoestrategia} className={Styles.img_resumoestrategia} />
                        <div className={Styles.Texto}>
                            <CompTitulo Titulo={'Resumo e Estratégia'} />
                            <CompTexto Texto={'O confronto marcou o fim da ofensiva alemã no sul da União Soviética. O exército de Hitler, confiante após vitórias rápidas na Europa e avanços no território soviético, acreditava que poderia conquistar Stalingrado com relativa facilidade. No entanto, a resistência determinada dos soldados soviéticos, somada às dificuldades logísticas alemãs e às condições severas do inverno russo, resultou em uma virada inesperada. A operação soviética conhecida como "Urano" conseguiu cercar a 6ª Armée de Friedrich Paulus, isolando mais de 250 mil soldados do Eixo dentro da cidade. Sem suprimentos adequados e sem possibilidade de retirada, o exército alemão foi aniquilado, e aproximadamente 91 mil soldados acabaram se rendendo. A derrota alemã em Stalingrado representou não apenas uma perda militar devastadora, mas também uma quebra simbólica no mito da invencibilidade nazista. Foi o ponto em que a guerra no Leste deixou de ser ofensiva alemã e passou a ser uma contraofensiva soviética até Berlim.'} Font={'🔗 Fonte: Wikipedia'} Url={'https://pt.wikipedia.org/wiki/Batalha_de_Stalingrado?utm_source=chatgpt.com'} />
                        </div>
                    </div>
                    {/* FIM Container Resumo e Estrategias */}

                    {/* Container Forças e Perdas */}
                    <div className={Styles.container_forcasPerdas} id='ForcasEPerdas'>
                        <CompTitulo Titulo={'Forças e Perdas'} />

                        <div className={Styles.galeriaFotos}>
                            <div className={Styles.boxfotoTop} >
                                <img src={imgForcasPerdas1} />
                                <img src={imgForcasPerdas2} />
                            </div>
                            <img src={imgForcasPerdas3} className={Styles.imgSoldado} />
                        </div>

                        <div className={Styles.textwidth}>
                            <CompTexto Texto={'O objetivo da Alemanha nazista era conquistar Stalingrado para garantir o controle sobre as rotas do rio Volga e abrir caminho para a exploração das riquezas petrolíferas do Cáucaso. No entanto, após meses de intensos combates, os soviéticos lançaram a Operação Urano, que envolveu um gigantesco contra-ataque de cerco às tropas alemãs. A manobra conseguiu isolar completamente a 6ª Exército, comandada pelo marechal Friedrich Paulus, que ficou sem suprimentos e sem chance de escapar. A derrota culminou na rendição alemã em fevereiro de 1943, representando o fim da ofensiva nazista no sul da União Soviética e marcando um ponto de virada decisivo na Segunda Guerra Mundial.'} Font={'🔗 Fonte: Wikipedia'} Url={'https://pt.wikipedia.org/wiki/Batalha_de_Stalingrado?utm_source=chatgpt.com'} />
                        </div>
                    </div>

                    <div className={Styles.container_tecnologiasTaticas}  id='TecnologiasTaticas'>
                        <CompTitulo Titulo={'Tecnologias e Táticas'} />

                        <div className={Styles.textwidth}>
                            <img src={imgTecnologiasTaticas} />
                            <CompTexto Texto={'O combate em Stalingrado destacou-se pelo uso massivo de tecnologias militares em um A Batalha de Stalingrado destacou-se pelo uso massivo de novas formas de guerra urbana. A luta se desenvolveu rua por rua, quarteirão por quarteirão, edifício por edifício. Artilharia pesada e ataques aéreos eram constantemente usados, mas, devido ao cenário urbano, soldados eram obrigados a combater em proximidade extrema. Tanques foram adaptados para funções de apoio direto à infantaria, enquanto lança-chamas e metralhadoras eram amplamente utilizados dentro de prédios destruídos. A logística também foi um desafio central: tanto alemães quanto soviéticos enfrentaram dificuldades para abastecer tropas em meio ao cerco e às condições climáticas severas. Essa experiência tornou Stalingrado um estudo de caso para táticas de guerra urbana e logística em conflitos modernos.'} Font={'🔗 Fonte: culturahistorica.org'} Url={'https://culturahistorica.org/wp-content/uploads/2020/02/beevor-stalingrad.pdf?'} />
                        </div>
                    </div>
                    {/* Container Curiosidades Históricas */}
                    <div className={Styles.container_curiosidadesHistoricas} id='CuriosidadesHistoricas'>
                        <CompTitulo Titulo={'Curiosidades Históricas'} />
                        <div className={Styles.textoImg}>
                            <div className={Styles.Texto}>
                                <CompTexto Texto={'Além da importância estratégica e política, Stalingrado também é lembrada por episódios únicos de brutalidade e resistência. Soldados lutavam em espaços confinados, disputando andares de edifícios em batalhas que se tornaram lendárias. A cidade em ruínas transformou-se em um verdadeiro campo de armadilhas, onde emboscadas e ataques surpresa eram constantes. Muitos relatos descrevem combates corpo a corpo, nos quais granadas, baionetas e até ferramentas improvisadas eram usadas. Essas experiências extremas fizeram da Batalha de Stalingrado um dos exemplos mais estudados da resistência humana em condições extremas de guerra.'} Font={'🔗 Fonte: culturahistorica.org'} Url={'https://culturahistorica.org/wp-content/uploads/2020/02/beevor-stalingrad.pdf?'} />
                            </div>
                            <img src={img_curiosidadesHistoricas} className={Styles.img_curiosidadesHistoricas} />
                        </div>
                    </div>
                    {/* FIM Container Curiosidades Históricas */}


                    {/* Container Leituras Recomendadas */}
                    <div className={Styles.container_leiturasRecomendadas} id='LeiturasRecomendadas'>
                        <CompTitulo Titulo={'Leituras Recomendadas'} />
                        <div className={Styles.textoImg}>
                            <img src={img_leiturasRecomendadas} className={Styles.img_leiturasRecomendadas} />
                            <div className={Styles.Texto}>
                                <CompTexto Texto={'O combate em Stalingrado destacou-se pelo uso massivo de tecnologias militares em um A Batalha de Stalingrado destacou-se pelo uso massivo de novas formas de guerra urbana. A luta se desenvolveu rua por rua, quarteirão por quarteirão, edifício por edifício. Artilharia pesada e ataques aéreos eram constantemente usados, mas, devido ao cenário urbano, soldados eram obrigados a combater em proximidade extrema. Tanques foram adaptados para funções de apoio direto à infantaria, enquanto lança-chamas e metralhadoras eram amplamente utilizados dentro de prédios destruídos. A logística também foi um desafio central: tanto alemães quanto soviéticos enfrentaram dificuldades para abastecer tropas em meio ao cerco e às condições climáticas severas. Essa experiência tornou Stalingrado um estudo de caso para táticas de guerra urbana e logística em conflitos modernos.'} Font={'🔗 Fonte: Wikipedia'} Url={'https://pt.wikipedia.org/wiki/Batalha_de_Stalingrado?utm_source=chatgpt.com'} />
                            </div>
                        </div>
                    </div>
                    {/* FIM Container Leituras Recomendadas */}
                </div>
                <footer>
                    <p>© {new Date().getFullYear()} - Todos direitos reservados. Gabriel Carvalho e Lucas Josué.</p>
                </footer>                    
            </div>
        </div>
    );
}

export default Home;