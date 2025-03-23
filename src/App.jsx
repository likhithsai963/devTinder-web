import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
