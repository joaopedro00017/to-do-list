import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-gray-800 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o Título da Tarefa"
        className="bg-gray-900 text-white border border-gray-600 outline-gray-500 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a Descrição da Tarefa"
        className="bg-gray-900 text-white border border-gray-600 outline-gray-500 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setdescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os Campos da Tarefa");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setdescription("");
        }}
        className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-600 cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
