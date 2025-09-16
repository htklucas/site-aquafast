import React from 'react'
import Styles from './CompTexto.module.css'

let CompTexto = ({ Texto, Font, Url }) => {
    return (
        <div>
            <div>
                <span className={Styles.texto}>
                    {Texto}
                </span>
            </div>
            <div  className={Styles.espaco}/>
            <a href={Url} className={Styles.font}><span>{Font}</span></a>
        </div>
    )
}

export default CompTexto;