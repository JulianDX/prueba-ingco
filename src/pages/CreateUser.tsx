import { FormEvent, useState } from "react";
import { useClient } from "../hooks/useClient";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const { clients, setClients } = useClient();
  const navigate = useNavigate();

  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    status: true,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newClient = {
      id: Date.now(),
      ...client,
    };
    setClients([...clients, newClient]);
    const newList = [...clients, newClient];
    localStorage.setItem("clients", JSON.stringify(newList));
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col justify-between mt-6 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-slate-800 items-center">
          Crear Nuevo <span className="text-blue-700">Cliente</span>
        </h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="my-10 max-w-7xl bg-white p-10 shadow-md"
        >
          <div className="mb-4">
            <label className="text-gray-800 font-semibold" htmlFor="firstName">
              Nombre del Cliente:
            </label>
            <input
              id="firstName"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Ej. Camila, Roberto, Ángel..."
              name="firstName"
              value={client.firstName}
              onChange={(e) =>
                setClient({
                  ...client,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800 font-semibold" htmlFor="lastName">
              Apellido del Cliente:
            </label>
            <input
              id="lastName"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Ej. Rodríguez, Roa, Castaño..."
              name="lastName"
              value={client.lastName}
              onChange={(e) =>
                setClient({
                  ...client,
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="text-gray-800 font-semibold"
              htmlFor="clientEmail"
            >
              Correo del Cliente:
            </label>
            <input
              id="clientEmail"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Ej. ingco@gmail.com"
              name="clientEmail"
              value={client.email}
              onChange={(e) =>
                setClient({
                  ...client,
                  email: e.target.value,
                })
              }
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-blue-700 hover:bg-blue-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          >
            Nuevo Cliente
          </button>
        </form>
      </div>
    </>
  );
};