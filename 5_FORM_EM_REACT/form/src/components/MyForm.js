import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  // 6 - controlled inputs

  // 3- gerenciamento de dados
  const [name,setName] = useState(user ? user.name : '');
  const [email,setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState("")
  
  const handleName = (e) => {
    setName(e.target.value)
  }
    
  //console.log(name);
  //console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email,bio);

    // 7 - limpar form
    setName("");
    setEmail("");
    setBio("")
  }

  return (
    <div>
        {/*Envio de form */}
        {/*Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Digite o seu nome' 
                    onChange={handleName}
                    value={name}
                />
            </div>
            {/*label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/*Simplifocação de manipulação de state */}
                <input 
                    type="email" 
                    name='email' 
                    placeholder='Digite o seu e-mail' 
                    onChange={(e) => setEmail(e.target.value) }
                    value={email} 
                />
            </label>
            {/* 8 -textarea */}
            <label>
              <span>Bio:</span>
              <textarea 
                name="bio" 
                placeholder='Descrição do usuario' 
                onChange={(e) => setBio(e.target.value)} 
                value={bio}
                ></textarea>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm