import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import api from '../config/api'
import { reset } from "../src/routes/navigation.actions";
import { NAVIGATORS } from "../src/routes/constants/route-names";

const defautValues = {
  loggedIn: false,
  user: {},
  loading: true,
  setLoading: () => { },
  changeJWT: () => { }
};

const AuthContext = createContext(defautValues);

export function useAuth() {
  return useContext(AuthContext);
}

const storeJWT = async (value) => {
  try {
    await SecureStore.setItemAsync("seven_jwt", value);
  } catch (e) {
    console.log(`STORAGE ERROR: ${JSON.stringify(e)}`)
  }
}

const removeJWT = async () => {
  try {
    await SecureStore.deleteItemAsync("seven_jwt");
  } catch (e) {
    // saving error
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [jwt, setJWT] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getToken() {
      setLoading(true)
      try {
        const token = await SecureStore.getItemAsync("seven_jwt");
        console.log(`TOKEN = ${token}`)
        if (token) {
          api.headers = { "Authorization": `Bearer ${token}` }
          console.log(token)
          verifyAuth(token)
        } else {
          logout()
        }
      } catch (e) {
        console.log("GETTING TOKEN ERROR:" + JSON.stringify(e))
      }
    }
    getToken()
  }, [jwt])

  const changeJWT = (jwt) => {
    api.headers = { "Authorization": `Bearer ${jwt}` }
    setJWT(jwt)
    storeJWT(jwt)
  }

  const verifyAuth = (jwt) => {
    api.get('/patient').then(r => {
      console.log(r)
      if (r.status == true) {
        setUser(r.data)
        console.log("LOGADO:" + JSON.stringify(r.data))
        setLoggedIn(true)
        setLoading(false)
        reset(NAVIGATORS.APP_NAVIGATOR)
      }
      if (r.message == "Unauthenticated.") {
        logout()
        setError(r.message)
        console.log("NÃO LOGADO:" + r.message)
      }
    })
  }

  const login = (email, password) => {
    setLoading(true)
    api.post('/patient/login', JSON.stringify({ email: email, password: password }), { "Content-Type": "application/json" }).then(r => {
      if (r.status == false) {
        setLoading(false)
        setError(r.message.email ? r.message.email : r.message)
        console.log(r.message)
      } else {
        changeJWT(r.token);
        console.log(`RESPOSTA : ${JSON.stringify(r)}`)
      }
    }).catch(err => console.log(err))
  }

  const logout = () => {
    reset(NAVIGATORS.AUTH_NAVIGATOR)
    removeJWT()
    setUser({})
    setLoggedIn(false)
    setLoading(false)
  }

  const value = {
    user, loggedIn, login, logout, error, loading, setLoading, changeJWT
  }

  return (
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  )
}