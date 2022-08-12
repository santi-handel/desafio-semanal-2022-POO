import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import "../assets/css/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
            </Routes>
          </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
