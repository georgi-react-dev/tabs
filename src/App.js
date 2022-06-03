import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Tabs from "./components/Tabs";

function App() {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://course-api.com/react-tabs-project");
      const tabs = await response.json();

      setTabs(tabs);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">Experience</h1>
        <hr className="title-underline" />
        <div className="app-container">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}

export default App;
