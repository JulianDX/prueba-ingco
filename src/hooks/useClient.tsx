import axios from "axios";
import { useState } from "react";
import { Clients } from "../types";

export const useClient = () => {
  const [clients, setClients] = useState<Clients>(
    JSON.parse(localStorage.getItem("clients")!) || []
  ); // Manejo de clientes
  const [loading, setLoading] = useState(true); // Verificar si están cargando los clientes

  const getClients = async () => {
    try {
      const petition = await axios("https://api.fake-rest.refine.dev/users"); // Llamado a la API
      const result = petition.data;
      const verify = Clients.safeParse(result); // Validar la obtención de los datos recibidos que coincidan con el tipo
      if (verify.success) {
        const clientsOnlyTrue = verify.data.filter((client) => client.status); // Filtrar los clientes que solo tienen status true
        setClients(clientsOnlyTrue);
        localStorage.setItem("clients", JSON.stringify(clientsOnlyTrue));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getClients,
    clients,
    loading,
    setLoading,
    setClients,
  };
};
