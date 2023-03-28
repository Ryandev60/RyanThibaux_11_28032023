import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <main className='error'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
        <NavLink to="/">Retourner sur la page d'acceuil</NavLink>
    </main>
  )
}

export default Main