import React, { useState, useEffect } from "react";
import TodayForm from "./components/TodayForm";
import TodayList from "./components/TodayList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [chuckPhrase, setChuckPhrase] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };


  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedCount(completedCount + 1);
  };

  
  useEffect(() => {
    const fetchChuckPhrase = async () => {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      setChuckPhrase(response.data.value);
    };

    fetchChuckPhrase(); 
    const interval = setInterval(fetchChuckPhrase, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-sans font-bold mb-4">
        <span className="font-bold">To</span>
        <span className="font-normal">day</span>
      </h1>
      <p className="text-custom-gray-font mb-8">
        Wake up, go ahead, do the thing not tomorrow, do today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TodayList tasks={tasks} deleteTask={deleteTask} />

        <div>
          <div className="bg-custom-dark-soft p-4 rounded-lg mb-4 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold">Finished tasks quantity</h3>
            <p className="text-3xl font-bold">
              {completedCount > 0 ? completedCount.toString().padStart(2, "0") : "0"}
            </p>
          </div>
          <TodayForm addTask={addTask} />
        </div>
      </div>

      <p className="mt-4 text-custom-gray-font">"{chuckPhrase}"</p>
      <p className="text-sm text-custom-gray-font">By Chuck Norris.</p>

            <footer className="fixed bottom-0 mt-4 pb-4">
        <p className="text-sm">@Did from ♥ by Lucas Danilo</p>
      </footer>
    </div>
  );
}

export default App;
