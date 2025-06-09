import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen flex justify-center bg-gray-900 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-gray-100 cursor-pointer"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-gray-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl font-bold text-gray-100">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
