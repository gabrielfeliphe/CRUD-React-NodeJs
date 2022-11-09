import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
      <label>
        Nome do Cliente
        <input type="text" name="name" />
      </label>
      <label>
       Email
        <input type="email" name="email" />
      </label>
      <label>
        Telefone
        <input type="text" name="telefone" />
      </label>
      <label>
        CNPJ
        <input type="text" name="cnpj" />
      </label>
      <label>
        Endereço
        <input type="text" name="endereco" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
