import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Semanal from "../containers/Semanal";
import Mensual from "../containers/Mensual";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Registro from "../components/Registro";
import "../assets/css/App.css";
import UsarContexto from "../context/UsarContexto";
function App() {
  return (
    <>
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/login" element={<Login />}></Route> 
              <Route exact path="/registro" element={<Registro />}></Route>  
              <Route exact path="/semanales2022" element={<Semanal />}></Route>
              <Route exact path="/mensuales2022" element={<Mensual />}></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}

export default App;
