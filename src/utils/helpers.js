export const fetchTodos = async () => {
  const url = "https://todo-api.albertedelmann.now.sh/tasks";
  try {
    const data = await (await fetch(url)).json();
    return data;
  } catch (error) {
    return [];
  }
};

export const newTodo = async value => {
  const url = "https://todo-api.albertedelmann.now.sh/tasks";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: value })
    });
    const item = await response.json();
    return item;
  } catch (error) {
    return [];
  }
};
