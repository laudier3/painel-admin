import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Compras from "./scenes/form/Compras";
import FormUpdate from "./scenes/form/updateProduct";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./scenes/login/login";
//import Cadastro from "./scenes/login/cadastro";
import AppProvider from './Context/Provaider';
import AppContext from './Context/SatateDate'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true) 

  const local = localStorage.getItem("token")

  const Private = ({ children }) => {
    const { auth, loading } = useContext(AppContext)

    if (loading) {
        return (
            setTimeout(() => {
                <div className="container">
                    <img src="lod.gif" alt="img" className="marg" />
                </div>
            }, 6000)
        )
    }

    if (!auth) {
        setTimeout(() => {
            <div className="container">
                <img src="lod.gif" alt="img" className="marg" />
            </div>
        }, 6000)
        return (
            <Navigate to="/login" />
        )
    }

    return children

}

  //console.log(local)
  //console.clear()

  return (
    <AppProvider>
      <ToastContainer autoClose={3000} />
      {local === null 
      ? 
      <Routes>
        <Route path="*" element={<Login />} />
        {/*<Route path="/cadastro" element={<Cadastro />} />*/}
      </Routes>
      :
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Private><Dashboard /></Private>} />
                <Route path="/team" element={<Private><Team /></Private>} />
                <Route path="/contacts" element={<Private><Contacts /></Private>} />
                <Route path="/invoices" element={<Private><Invoices /></Private>} />
                <Route path="/form" element={<Private><Form /></Private>} />
                <Route path="/compras" element={<Private><Compras /></Private>} />
                <Route path="/formupdate" element={<Private><FormUpdate /></Private>} />
                <Route path="/bar" element={<Private><Bar /></Private>} />
                <Route path="/pie" element={<Private><Pie /></Private>} />
                <Route path="/line" element={<Private><Line /></Private>} />
                <Route path="/faq" element={<Private><FAQ /></Private>} />
                <Route path="/calendar" element={<Private><Calendar /></Private>} />
                <Route path="/geography" element={<Private><Geography /></Private>} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    }
    </AppProvider>
  );
}

export default App;
