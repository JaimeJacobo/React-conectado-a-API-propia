import React, {useState} from 'react';
import './App.css';

function App() {

  const [myState, updateMyState] = useState({
    title: '',
    poster: '',
    comment: ''
  })

  const submitInfo = async (event)=>{
    event.preventDefault();
    await fetch('https://prueba-deployment.herokuapp.com/crear-jugadora', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: '123',
        apellido: '123',
        nacionalidad: '123',
        ranking: '123'
      })
    })

    console.log('Fetch realizado con exito')
  }

  return (
    <div className="App">
      <h1>Hola soy el componente App</h1>

      <form onSubmit={(event)=>submitInfo(event)}>

        <label htmlFor="title">title:</label>
        <input type="text" id="title" name="title" value={myState.title} onChange={(event)=>updateMyState({...myState, title: event.target.value})}/>
        <br />

        <label htmlFor="poster">poster:</label>
        <input type="text" id="poster" name="poster" value={myState.poster} onChange={(event)=>updateMyState({...myState, poster: event.target.value})}/>
        <br />

        <label htmlFor="comment">comment:</label>
        <input type="text" id="comment" name="comment" value={myState.comment} onChange={(event)=>updateMyState({...myState, comment: event.target.value})}/>
        <br />


        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default App;