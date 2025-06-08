import Navbar from "./components/navbar";
import Searchbar from "./components/searchbar";
import Perfumelist from "./components/perfumelist";
import About from "./components/about";
import Footer from "./components/footer";

function App(){
    return(
    <div>
    <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Perfumelist></Perfumelist>
    <About></About>
    <Footer></Footer>
    </div>
    )
}

export default App