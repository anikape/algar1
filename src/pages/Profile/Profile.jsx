import React from 'react'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import Chat from '../../components/Chat/Chat'
import style from './profile.module.css'


const Profile = () => {
  return (
    <section >
      <Header />
     
     <section className={style.container}>
     <div className={style.content}>
      <List />
      <Chat />
     </div>
     
     <div className={style.principal}>

        <div className={style.card}>

          <div className={style.logoPerfil}>
            <img src='./assets2/yashina.svg' alt='' />
            <p>Perfil</p>
          </div>

          <div className={style.contentPerfil}>
            <p>Nome: Yáshina Gomes</p>
            <p>E-mail: yashinagm@gmail.com </p>
            <p>Telefone: (85) 99194-8378</p>
          </div>

          <div className={style.buttonContainer}>
            <button className={style.button}>Editar</button>
            <button className={style.button}>Excluir</button>
          </div>
        </div>
       
       

     </div>

     </section>
    



    </section>
  )
}

export default Profile