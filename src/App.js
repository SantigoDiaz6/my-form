import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    titulo: '',
    descripcion: '',
    fecha: '',
    completada: false,
    users: []
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

    // const user = {
    //   titulo : this.state.titulo,
    //   descripcion : this.state.descripcion,
    //   fecha : this.state.fecha,
    //   completada : this.state.completada
    // }
    const { titulo, descripcion, fecha, completada } = this.state;
    const user = { titulo, descripcion, fecha, completada };
    const users = this.state.users.concat(user)

    // this.setState({ users:users })
    // console.log(this.state)

    this.setState({
      users,
      titulo: '',
      descripcion: '',
      fecha: '',
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
            type="text"
            onChange={this.handleChange}
            value={this.state.descripcion}
            name="descripcion"
            id="descripcion"
          />
          <label htmlFor="fecha">Date</label>
          <input
            type="date"
            onChange={this.handleChange}
            value={this.state.fecha}
            name="fecha"
            id="fecha"
          />
          <label htmlFor="completada">Completed</label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.completada}
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
