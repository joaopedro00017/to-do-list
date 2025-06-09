// ErrorPage.jsx
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Erro inesperado 😢</h1>
      <p className="mb-2">Algo deu errado ao carregar esta página.</p>
      <p className="text-sm opacity-70">{error.statusText || error.message}</p>
      <button
        className="mt-6 bg-red-700 px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        Voltar à página inicial
      </button>
    </div>
  );
}

export default ErrorPage;
