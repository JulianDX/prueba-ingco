export const Footer = () => {
  const date = new Date();
  return (
    <footer className="text-center font-semibold bg-blue-700 text-white p-4">
      Desarrollado por Julián Fernando Roa Palacio - {date.getFullYear()}
    </footer>
  );
};
