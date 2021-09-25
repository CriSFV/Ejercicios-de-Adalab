import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  let classNameadd = 'done';
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);
  const [userTask, setUserTask] = useState('');

  //cuando pinchamos, cambia el estado de completed
  const handleClick = (ev) => {
    const liClicked = ev.currentTarget.id;
    tasks[liClicked].completed = !tasks[liClicked].completed;
    setTasks([...tasks]);
  };
  const handleInput = (ev) => {
    //  const inputValue = ev.currentTarget.value;
    setUserTask(ev.currentTarget.value);
    // tasks.push(inputValue); //me escribe listas pero no rellena (porque porque no le estoy dando valor task??)
    // setTasks([...tasks]);
    // console.log(inputValue);
  };
  const renderList = () =>
    //faltaria un return de la funcion renderList
    //se filtra siempre en la función renderList

    tasks
      .filter((task) => {
        return task.task.toLowerCase().includes(userTask.toLowerCase());
      })
      .map((task, index) => {
        return (
          <li
            key={index}
            className={task.completed ? `${classNameadd}` : ''}
            onClick={handleClick}
            id={index}
          >
            {task.task}
          </li>
        );
      });

  const handleBtn = () => {
    console.log(handleInput());
    //tasks.push(handleInput());
    //setTasks([...tasks]);

    console.log(tasks);
  };
  return (
    <div>
      <h2>Mi lista de tareas</h2>
      <ol>{renderList()}</ol>
      <form action=''>
        <input type='text' onChange={handleInput} />
        <input type='button' value='Añadir' onClick={handleBtn} />
      </form>
      {/* filtrar de un listado */}
      <p>Tareas totales:</p>
      <p>Tareas completadas:</p>
      <p>Tareas pendientes:</p>
    </div>
  );
};

export default App;
