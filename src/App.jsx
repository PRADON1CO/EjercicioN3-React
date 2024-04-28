import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Mensaje from './components/Mensaje'
import { Container } from 'react-bootstrap'


function App() {
  const mensaje = "My Friend"

  return (
    <>
      <Container>
      <Mensaje mensaje = {mensaje}></Mensaje>
      </Container>
    </>
  )
}

export default App


