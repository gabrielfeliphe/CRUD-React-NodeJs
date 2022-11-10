import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "nomeCliente",
      type: "text",
      placeholder: "Digite Aqui...",
      errorMessage:
        "Digite seu nome compleot",
      label: "Nome do Cliente",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Digite Aqui...",
      errorMessage: "Digite um Email válido",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "Telefone",
      type: "text",
      placeholder: "Digite Aqui...",
      label: "Telefone",
    },
    {
      id: 4,
      name: "CNPJ",
      type: "text",
      placeholder: "Digite Aqui...",
      errorMessage:
        "Digite o CNPJ",
      label: "CNPJ",
      required: true,
    },
    {
      id: 5,
      name: "Endereco",
      type: "password",
      placeholder: "Digite Aqui...",
      label: "Endereço",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Novo Cliente</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default App;
