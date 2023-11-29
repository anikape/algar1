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

        </div>


     </div>

     </section>
    



    </section>
  )
}

export default Profile