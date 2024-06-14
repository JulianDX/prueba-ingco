import { useEffect } from "react";
import { useClient } from "../hooks/useClient";
import { Table } from "../components/Table";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";

function App() {
  const { clients, getClients, loading, setClients, setLoading } = useClient();

  // Cuando el componente se cargue, realizar el llamado a la API
  useEffect(() => {
    // Solo hacer llamado a la API si no hay clientes
    if (clients.length === 0) {
      getClients();
    } else {
      setLoading(false);
      localStorage.setItem("clients", JSON.stringify(clients));
    }
  }, [loading, clients]);

  console.log(clients);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between mt-6">
          <h2 className="text-3xl font-extrabold text-slate-800 items-center">
            Administrar <span className="text-blue-700">Usuarios</span>
          </h2>
        </div>
        <Link
          to="/create"
          className="bg-blue-600 flex w-56 gap-2 text-xl mt-3 items-center hover:bg-blue-500 transition-all text-white font-semibold py-2 px-6 rounded-md"
        >
          Nuevo Usuario
          <UserIcon className="inline-block text-white h-6 w-6 mr-2 group-hover:text-gray-100 z-20" />
        </Link>
      </div>
      {/* En caso de carga se muestra un spinner, luego la tabla */}
      {loading ? (
        <Spinner />
      ) : (
        <Table clients={clients} setClients={setClients} />
      )}
    </>
  );
}

export default App;
