import React from 'react'
import Styles from './Navbar/Navbar.module.css';

import localData from '../img/Icons_localData.png';
import forcasPerdas from '../img/logoForcas&Perdas-03.png';
import tecnologiasTaticas from '../img/LogoTecnologias-03.png';
import curiosidadesHistoricas from '../img/logoCuriosidadesHistoricas-04.png';
import leiturasRecomendadas from '../img/LogoLeiturasObrigatorias-05.png';

const IconsNavbar = () => {
return (
        <div>

            <ul>

                {/* Inicio */}
                <li className={Styles.item_menu}>
                    <a href='#InicioDirecao'>
                        <span className={Styles.icon}><i class="bi bi-house-fill" /></span>
                        <span className={Styles.txt_link}>Início</span>
                    </a>
                </li>

                {/* Data Local */}
                <li className={Styles.item_menu}>
                    <a href='#DataLocal'>
                        <span className={Styles.icon}><img src={[localData]} /></span>
                        <span className={Styles.txt_link}>Data e Local</span>
                    </a>
                </li>

                {/* Resumo Estratégico */}
                <li className={Styles.item_menu}>
                    <a href='#ResumoEstrategia'>
                        <span className={Styles.icon}> <i class="bi bi-file-earmark-text-fill" /></span>
                        <span className={Styles.txt_link}>Resumo Estratégico</span>
                    </a>
                </li>

                {/* Forças e Perdas */}
                <li className={Styles.item_menu}>
                    <a href='#ForcasEPerdas'>
                        <span className={Styles.icon}><img src={[forcasPerdas]} /></span>
                        <span className={Styles.txt_link}>Forças e Perdas</span>
                    </a>
                </li>
                {/* Técnologias e Táticas */}
                <li className={Styles.item_menu}>
                    <a href='#TecnologiasTaticas'>
                        <span className={Styles.icon}><img src={[tecnologiasTaticas]} /></span>
                        <span className={Styles.txt_link}>Técnologias e Táticas</span>
                    </a>
                </li>
                {/* Curiosidades Históricas */}
                <li className={Styles.item_menu}>
                    <a href='#CuriosidadesHistoricas'>
                        <span className={Styles.icon}><img src={[curiosidadesHistoricas]} /></span>
                        <span className={Styles.txt_link}>Curiosidades Históricas</span>
                    </a>
                </li>
                {/* Leituras Recomendadas */}
                <li className={Styles.item_menu}>
                    <a href='#LeiturasRecomendadas'>
                        <span className={Styles.icon}><img src={[leiturasRecomendadas]} /></span>
                        <span className={Styles.txt_link}>Leituras Recomendadas</span>
                    </a>
                </li>

            </ul>
        </div>

    );
};

export default IconsNavbar;