import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {

  const [ repositories, setRepositories ] = useState([])

  useEffect(  async () => {
    const repositories = await (await fetch('https://api.github.com/users/kauai/repos')).json()
    setRepositories(repositories)
  },[])

  useEffect(() => {
    document.title = repositories.filter(item => {
       return item.favorite
    }).length

  },[repositories])

  function handleFavorite(id) {
     const newRepositories = repositories.map(repo => {
        return repo.id == id ? {...repo, favorite:!repo.favorite } : repo
     })
     setRepositories(newRepositories)
  }


  return (
    <>
    {console.log(repositories)}
      <ul>
        {repositories.map(item => {
            return <li key={item.id}>{item.name}
               { item.favorite && <img style={{verticalAlign:"bottom"}} className="App-logo" width="40" src={logo}/>} 
               <button onClick={(id) => handleFavorite(item.id)}>Favoritar</button>
            </li>
        })}
      </ul>
      {/* <button onClick={handleAddRepository}>Clicar</button> */}
    </>
  )
}
