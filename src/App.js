import './App.css';
import { Plant } from './components/Plant/Plant';
import { PlantLine } from './components/PlantLine/PlantLine';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Echeverias</h1>
        <PlantLine
          p1name="Echeveria Derenbergii"
          p1src="echeveria/echeveria_derenbergii"
          p2name="Echeveria Lilacina"
          p2src="echeveria/echeveria_lilacina"
          p3name="Echeveria Olivia"
          p3src="echeveria/echeveria_olivia"
          p4name="Echeveria Perle Von Nurnberg"
          p4src="echeveria/echeveria_perle_von_nurnberg"
        />
        <PlantLine
          p1name="Echeveria Derenbergii"
          p1src="echeveria/echeveria_derenbergii"
          p2name="Echeveria Lilacina"
          p2src="echeveria/echeveria_lilacina"
          p3name="Echeveria Olivia"
          p3src="echeveria/echeveria_olivia"
          p4name="Echeveria Perle Von Nurnberg"
          p4src="echeveria/echeveria_perle_von_nurnberg"
        />
      </div>

    </div>
  );
}

export default App;
