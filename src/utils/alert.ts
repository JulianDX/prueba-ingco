import Swal from "sweetalert2";
import { Dispatch, SetStateAction } from "react";
import { Clients } from "../types";

// Alerta antes de eliminar un cliente
export const toggleAlert = (
  id: number,
  setClients: Dispatch<SetStateAction<{ id: number; firstName: string; lastName: string; email: string; status?: boolean | undefined; }[]>>,
  clients: Clients
) => {
  Swal.fire({
    title: `¿Está seguro de eliminar el cliente con ID ${id}?`,
    text: "No se podrá revertir el cambio",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      setClients(clients.filter((client) => client.id !== id));
      console.log(clients)
      Swal.fire({
        title: "Eliminado",
        text: `El cliente ha sido eliminado`,
        icon: "success",
      });
    }
  });
};
