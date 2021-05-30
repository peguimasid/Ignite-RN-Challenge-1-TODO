import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((prevState) => [...prevState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleRemoveTask(id: number) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header
        isDark={isDarkTheme}
        changeTheme={() => setIsDarkTheme(!isDarkTheme)}
      />

      <TodoInput addTask={handleAddTask} isDark={isDarkTheme} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        isDark={isDarkTheme}
      />
    </>
  );
}
