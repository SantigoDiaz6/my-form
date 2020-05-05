import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    titulo: '',
    descripcion: '',
    completada: false,
    tareas: []
  };

  handleChange = (e) => {
    const titIsCheckbox = ['completada'];
    const { name } = e.target;
    const value = titIsCheckbox.includes(name) ? e.target.checked : e.target.value;

    this.setState({ [name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const { titulo, descripcion, completada } = this.state;
    const user = { titulo, descripcion, completada };
    const users = this.state.users.concat(user)

    this.state({
      users,
      titulo: '',
      descripcion: '',
      completada: false
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="titulo">Title</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.titulo}
            name="titulo"
            id="titulo"
          />
          <label htmlFor="descripcion">Description</label>
          <textarea
            //type="text"
            onChange={this.handleChange}
            value={this.state.descripcion}
            name="descripcion"
            id="descripcion"
          />
          <label htmlFor="completada">Completed</label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            value={this.state.completada}
            name="completada"
            id="completada"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default App;
