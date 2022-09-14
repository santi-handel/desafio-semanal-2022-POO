import { useContext } from "react";
import Contexto from "../context/Contexto";
import { Navigate } from "react-router-dom";

export default function ProtetecRoute({ children }) {
  const { user, loading } = useContext(Contexto);

  if (loading) return <h1>loading</h1>

  if (!user) return <Navigate to='/login' />

  return (
    <>
      {children}
    </>
  )
}
