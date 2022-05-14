import "./App.css";
import {
  Home,
  ProductList,
  Product,
  Register,
  Login,
  Cart,
} from "./pages/index";
import styled from "styled-components"

const Container = styled.div`
width: 100vw;
`;


function App() {
  return (
    <Container>
      <Cart />
    </Container>
  );
}

export default App;
