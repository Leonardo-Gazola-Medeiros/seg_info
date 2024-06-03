import { Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Register from "./pages/Register"

function App() {
    return(
        <ShoppingCartProvider>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/loja" element={<Store />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/cadastro" element={<Register />} />
                </Routes>
            </Container>
        </ShoppingCartProvider>
    )
}

export default App