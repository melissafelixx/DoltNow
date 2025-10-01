export async function fetchTasks() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  if (!response.ok) {
    throw new Error("Erro ao buscar tarefas");
  }
  return response.json();
}

