import React from 'react'
import Styles from './CompTitulo.module.css';

let CompTitulo = ({Titulo}) => {
  return (
    <div className={Styles.container}>
        <h2 className={Styles.Titulo}>{Titulo}</h2>
        <hr className={Styles.hr} />
    </div>
  )
}

export default CompTitulo;