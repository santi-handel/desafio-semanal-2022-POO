import { useContext } from "react";
import Contexto from "../context/Contexto";
import { Navigate } from "react-router-dom";
import iconoCargador from "../assets/statics/loading.gif";
import "../assets/css/Loading.css";

export default function ProtetecRoute(props) {
  const { children } = props;
  const { user, loading } = useContext(Contexto);

  if (loading) return (<><div className="loading"><img src={iconoCargador} width="100" height="100vh" className="img-fluid mx-auto d-block" alt="cargador" /></div></>)

  if (!user) return <Navigate to='/login' />

  return (
    <>
      {children}
    </>
  )
}
