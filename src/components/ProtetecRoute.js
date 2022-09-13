import { useState, useContext } from "react";
import Contexto from "../context/Contexto";

export default function ProtetecRoute({children}) {
    const { user, logout, loading} = useContext(Contexto);
  return (
    <div>ProtetecRoute</div>
  )
}
