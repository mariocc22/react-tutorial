import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="chewie" animal="dog" breed="pekines" />
    <Pet name="loki" animal="bird" breed="cacao" />
    <Pet name="golem" animal="cat" breed="mixed" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
