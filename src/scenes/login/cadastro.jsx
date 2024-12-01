import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonBox, FormBox, InputBox, Login2, Title } from './stylend';
import api from '../../api/api';
import { toast } from 'react-toastify';
//import { toast } from 'react-toastify';

function Login() {


  const navigate = useNavigate();

 // const token = localStorage.getItem("token")
  
  //const [ users, setUser ] = useState([])
  const [ pass, setPass ] = useState(false)
  //const [ tk ] = useState(token)

  const [email, setEmail] = useState("")
  const [password, setPasword] = useState("")
  const [phone, setPhone] = useState("")
  const [image] = useState("https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png")
  const [name, setName] = useState("")
  const [age] = useState("20")
  const [access] = useState("Admin")

  //const dispatch = useDispatch()
  //window.location.reload();

  async function onSubmit(e){
    e.preventDefault()
    //console.log(e, email, password)
    let userCreatials = {
      email: email,
      name: name,
      password: password,
      age: age,
      access: access,
      image: image,
      phone: phone
    }
    
    await api.post("/user", userCreatials).then((res) => {
      toast.success("Usuario cadastrado com sucesso!")
    }).catch((err) => {
      toast.error("Houve um erro", err)
    })

    navigate("/login")

    //toast.success("Login efetuado com sucesso!")

  }
  
  return (//
    <>
      <Login2>
       <FormBox>
          <form onSubmit={onSubmit}>
            <Title>Formulario de Cadastro</Title>
            <InputBox>
              <p>
                {
                  pass === false ? <ion-icon name="lock-closed-outline" onClick={() => setPass(true)}></ion-icon> :
                  <ion-icon name="lock-open-outline" onClick={() => setPass(false)}></ion-icon>
                }
              </p>
              <input
                type={"text"} 
                name="name" 
                id="name" 
                onChange={(e) => setName(e.target.value)} 
                value={name.name} 
                required 
              />
              <label htmlFor="">Name</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email.email}  
                required
              />
              <label htmlFor="">E-mail</label>
            </InputBox>
            <InputBox>
              <p>
                {
                  pass === false ? <ion-icon name="lock-closed-outline" onClick={() => setPass(true)}></ion-icon> :
                  <ion-icon name="lock-open-outline" onClick={() => setPass(false)}></ion-icon>
                }
              </p>
              <input
                type={pass === false ? "password" : "text"} 
                name="password" 
                id="password" 
                onChange={(e) => setPasword(e.target.value)} 
                value={password.password} 
                required 
              />
              <label htmlFor="">Senha</label>
            </InputBox>
            <InputBox>
              <p>
                {
                  pass === false ? <ion-icon name="lock-closed-outline" onClick={() => setPass(true)}></ion-icon> :
                  <ion-icon name="lock-open-outline" onClick={() => setPass(false)}></ion-icon>
                }
              </p>
              <input
                type={"text"} 
                name="phone" 
                id="phone" 
                onChange={(e) => setPhone(e.target.value)} 
                value={phone.phone} 
                required 
              />
              <label htmlFor="">Telefone</label>
            </InputBox>
            
            <ButtonBox type="submit">
              Cadastra
            </ButtonBox>
            <div>
              <span></span>
              Já tenho conta: 
              <a href="/form">Fazer Login</a>
            </div>
          </form> 
          
      </FormBox>
    </Login2>
    </>
  );
}

export default Login;
