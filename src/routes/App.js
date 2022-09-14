import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Semanal from "../containers/Semanal";
import Mensual from "../containers/Mensual";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Registro from "../components/Registro";
import "../assets/css/App.css";
import UsarContexto from "../context/UsarContexto";
import ProtetecRoute from "../components/ProtetecRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route exact path="/login" element={<Login />}></Route> 
              <Route exact path="/registro" element={<Registro />}></Route>  
              <Route exact path="/" element={<ProtetecRoute><Home /></ProtetecRoute>}></Route>
              <Route exact path="/semanales2022" element={<ProtetecRoute><Semanal /></ProtetecRoute>}></Route>
              <Route exact path="/mensuales2022" element={<ProtetecRoute><Mensual /></ProtetecRoute>}></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}

export default App;
