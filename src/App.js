import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Route";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <Router/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
