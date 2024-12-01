import React, { useState, useContext } from "react";
import { ButtonBox, FormBox, InputBox, Login2, Title } from "./stylend";
import { useNavigate } from "react-router-dom";
import StoreContext from "../../Context/SatateDate";

//import { userLogin } from "../../redux/user/userSlice";
//import { useDispatch } from "react-redux";
//import { toast } from 'react-toastify';

function Login() {
  // const token = localStorage.getItem("token")

  //const [ users, setUser ] = useState([])
  const [pass, setPass] = useState(false);
  //const [ tk ] = useState(token)

  const { login } = useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("submit", { email, password })

    if (password && email) {
      //console.log("submit", { email, password })
      //const email2 = JSON.parse(localStorage.getItem("user"))

      login(email, password);

      setTimeout(() => {
        navigate("/");
      }, 1200);
    }
  };

  return (
    //
    <>
      <Login2>
        <FormBox>
          <form onSubmit={handleSubmit}>
            <Title>Formulario de Login</Title>
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
                {pass === false ? (
                  <ion-icon
                    name="lock-closed-outline"
                    onClick={() => setPass(true)}
                  ></ion-icon>
                ) : (
                  <ion-icon
                    name="lock-open-outline"
                    onClick={() => setPass(false)}
                  ></ion-icon>
                )}
              </p>
              <input
                type={pass === false ? "password" : "text"}
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password.password}
                required
              />
              <label htmlFor="">Password</label>
            </InputBox>
            <ButtonBox type="submit">Login</ButtonBox>
            {/*<div>
              <span></span>
              Não tenho uma conta:
              <a href="/cadastro">Criar conta</a>
            </div>*/}
          </form>
        </FormBox>
      </Login2>
    </>
  );
}

export default Login;
