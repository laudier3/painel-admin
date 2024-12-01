import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { createSession } from '../api/api';
import ConsumeContextData from './SatateDate'
import { toast } from 'react-toastify';
//import axios from 'axios';
//import key from "../Key/key"

//import { useNavigate } from 'react-router-dom';

const AppProvider = ({ children }) => {
    
    //const navigate = useNavigate()


    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    //const [filmes, setFilmes] = useState([])

    useEffect(() => {
        (async () => {
            const req = await api.get(`/user`)
            setUsers(req.data)
        })()
    }, [])

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if (recoveredUser) {
            setUser(recoveredUser)
            api.defaults.headers.common [
                "Authorization"
            ] = `Bearer ${token}`
        }

        setLoading(false)
    }, [])


    const login = async (email, password) => {

      const response = await createSession(email, password)

      //console.log('login auth', response.data)

      try {

        if(response.data.token){
          toast.success("Login efetuado com sucesso, aguarde mais uns segubdos...")
          window.location.reload()
  
          const loggedUser = response.data.user.email
          const token = response.data.token
          const image = response.data.user.image
          const name = response.data.user.name
          //const token = response.data.data.
  
          //console.log(imagem)
  
          localStorage.setItem('user', JSON.stringify(loggedUser))
          localStorage.setItem('image', JSON.stringify(image))
          localStorage.setItem('name', JSON.stringify(name))
          localStorage.setItem('token', JSON.stringify(token))
          //localStorage.setItem('token', id)
  
          api.defaults.headers.common [
            "Authorization"
          ] = `Bearer ${token}`
          //console.log(token)
  
          setUser(loggedUser)
        }
      } catch (error) {
        toast.error("Usuario uo senha invalida tente novamente!")
      }
      
    }

		

    const logout = () => {
        //console.log('Logout')
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('imagem')
        localStorage.removeItem('name')
        api.defaults.headers.common [
					"Authorization"
				] = null;
    }

    return (
        <ConsumeContextData.Provider value={{ users, auth: !!user, user, loading, login, logout }}>
            {children}
        </ConsumeContextData.Provider>
    );
}

export default AppProvider;