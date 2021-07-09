import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const Id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(Id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Todo Id - ${id}
    Todo title - ${title}
    Todo completed - ${completed}
  `);
};
