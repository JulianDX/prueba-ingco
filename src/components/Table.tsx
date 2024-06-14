import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Clients } from "../types";
import { TrashIcon } from "@heroicons/react/24/solid";
import { toggleAlert } from "../utils/alert";

type TableProps = {
  clients: Clients;
  setClients: Dispatch<SetStateAction<{ id: number; firstName: string; lastName: string; email: string; status?: boolean | undefined; }[]>>
};

export const Table = ({ clients, setClients }: TableProps) => {
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const id = Number(e.currentTarget.parentElement?.getAttribute("datatype"));
    toggleAlert(id, setClients, clients);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto overflow-x-scroll 2xl:overflow-auto px-4 mb-10">
        <div>
          <table className="w-full mt-5 table-auto shadow-md">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2">Nombre</th>
                <th className="p-2">Apellido</th>
                <th className="p-2">Email</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b text-center">
                  <td className="p-3 text-lg text-gray-800 font-semibold">
                    {client.firstName}
                  </td>
                  <td className="p-3 text-lg text-gray-800 font-semibold">
                    {client.lastName}
                  </td>
                  <td className="p-3 text-lg text-gray-800 font-semibold">
                    {client.email}
                  </td>
                  <td
                    datatype={`${client.id}`}
                    className="p-3 text-lg text-gray-800 flex justify-center gap-5"
                  >
                    <button
                      onClick={(e) => handleClick(e)}
                      className="bg-red-600 items-center flex flex-row justify-center hover:bg-red-500 hover:scale-105 transition-all text-white font-semibold py-1 w-full rounded-md"
                    >
                      <TrashIcon className="inline-block text-white h-6 w-6 mr-2 group-hover:text-gray-100 z-20" />
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
