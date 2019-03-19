import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App(){
  const [ repositories, setRepositories ] = useState([
         {id:1,name:'teste1'},
         {id:2,name:'teste2'},
         {id:3,name:'teste3'}
  ])

  function handleAddRepository(){
       setRepositories([...repositories,{id:Math.random(),name:"Teste"}])
  }

  return (
    <>
      <ul>
        {repositories.map(item => {
            return <li key={item.id}>{item.name}</li>
        })}
      </ul>
      <button onClick={handleAddRepository}>Clicar</button>
    </>
  )
}
