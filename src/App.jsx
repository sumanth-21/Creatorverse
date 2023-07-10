import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";

import "@picocss/pico/css/pico.min.css";

import ShowCreators from "./pages/ShowCreators/ShowCreators";
import ViewCreator from "./pages/ViewCreator/ViewCreator";
import AddCreator from "./pages/AddCreator/AddCreator";
import EditCreator from "./pages/EditCreator/EditCreator";
import Dashboard from "./components/Dashboard/Dashboard";
import Loader from "./utilities/Loader/Loader";

import { supabase } from "./client";

function App() {
  const [creators, setCreators] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("creators")
          .select("*")
          .order("id", { ascending: false });

        if (data) {
          setCreators(data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  function onUpdateCreatorHandler(updatedCreator) {
    setCreators((prevCreators) =>
      prevCreators.map((prevCreator) =>
        prevCreator.id === updatedCreator.id ? updatedCreator : prevCreator
      )
    );
  }

  function onDeleteCreatorHandler(id) {
    setCreators((prevCreators) =>
      prevCreators.filter((prevCreator) => prevCreator.id !== id)
    );
  }

  function onAddCreatorHandler(newCreator) {
    setCreators((prevCreators) => [newCreator, ...prevCreators]);
  }

  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <ShowCreators creators={creators} />,
          children: [],
        },
        {
          path: "/viewcreator/:creatorId",
          element: (
            <ViewCreator
              creators={creators}
              onDelete={onDeleteCreatorHandler}
            />
          ),
        },
        {
          path: "addcreator",
          element: <AddCreator onAdd={onAddCreatorHandler} />,
        },
        {
          path: "/editcreator/:creatorId",
          element: (
            <EditCreator
              creators={creators}
              onUpdate={onUpdateCreatorHandler}
              onDelete={onDeleteCreatorHandler}
            />
          ),
        },
      ],
    },
  ]);

  return <>{isLoading ? <Loader /> : element}</>;
}

export default App;
