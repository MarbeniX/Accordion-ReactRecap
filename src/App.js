import Acoordion from "./components/Acoordion";
import "./index.css";
import { faqs } from "./data.js";

function App() {
    return (
        <div>
            <Acoordion data={faqs} />;
        </div>
    );
}

export default App;
