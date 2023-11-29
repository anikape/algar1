import React from 'react'
import List from '../List/List'
import About from '../About/About'
import style from './main.module.css'
import Chat from '../Chat/Chat'



function Main() {
  return (
    <section className={style.containerMain}>

      <div className={style.content}>
        <List />
        <Chat />
      </div>
      
    <About />

    </section>
  )
}

export default Main