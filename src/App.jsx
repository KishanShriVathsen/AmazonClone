import Nav_bar from "./Components/Nav_bar/Nav_bar";
import Home from "./pages/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Details from "./pages/details";
function App(){
  return(
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Nav_bar/>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Details/:id" element={<Details/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;