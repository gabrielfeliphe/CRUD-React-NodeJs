import "./style/app.css";
import { useState } from "react";
import FormInput from "./components/FormInput";

const App = () => {
  let [values, setValues] = useState({
    nomeCliente: "",
    email: "",
    telefone: "",
    cnpj: "",
    endereco: "",
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
      name: "telefone",
      type: "text",
      placeholder: "Digite Aqui...",
      label: "Telefone",
    },
    {
      id: 4,
      name: "cnpj",
      type: "text",
      placeholder: "Digite Aqui...",
      errorMessage:
        "Digite o CNPJ",
      label: "CNPJ",
      required: true,
    },
    {
      id: 5,
      name: "endereco",
      type: "text",
      placeholder: "Digite Aqui...",
      label: "Endereço",
    }
  ];


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values)
  };

  let handleSubmit = async (e) => {
   e.preventDefault();
    try {
        await fetch("/InsertUser", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: values.nomeCliente,
          email: values.email,
          telefone: values.telefone,
          endereco: values.endereco,
          cidade: values.cidade,
          cnpj: values.cnpj,
        }),
      }).then(response => response.text()).then(t => console.log("rodou"))
      this.setValues("");
    } catch (err) {
      console.log(err);
    }

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
