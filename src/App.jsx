import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Utils/ProtectedRoute";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
