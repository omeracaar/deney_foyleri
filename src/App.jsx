import { useState } from "react";
import { experiments } from "./data/experiments";
import Experiment from "./components/Experiment";
import "./App.css";

function App() {
  const [selectedExperiment, setSelectedExperiment] = useState(null);

  if (selectedExperiment) {
    return (
      <div className="app">
        <button
          className="back-button"
          onClick={() => setSelectedExperiment(null)}
        >
          ← Deneylere Geri Dön
        </button>

        <Experiment experiment={selectedExperiment} />
      </div>
    );
  }

  return (
    <div className="app">
      <div className="home-header">
        <h1>Deney Föyleri</h1>
        <p>Bir deney seçerek öğrenmeye başlayabilirsin.</p>
      </div>

      <div className="experiment-card-list">
        {experiments.map((experiment, index) => (
          <div
            key={experiment.id}
            className="experiment-card"
            onClick={() => setSelectedExperiment(experiment)}
          >
            <div className="experiment-number">{index + 1}</div>

            <h2>{experiment.title}</h2>
            <p>{experiment.description}</p>

            <button>Deneye Başla</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;