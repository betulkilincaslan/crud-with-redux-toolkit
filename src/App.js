import ProtectedRoute from "components/routing/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddTodoScreen from "screens/AddTodoScreen";
import HomeScreen from "screens/HomeScreen";
import LoginScreen from "screens/LoginScreen";
import UpdateTodoScreen from "screens/UpdateTodoScreen";

const App = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <ToastContainer />
      <Routes>
        <Route index element={<LoginScreen />} />
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/add" element={<AddTodoScreen />} />
        <Route path="/:id" element={<UpdateTodoScreen />} />
      </Routes>
    </main>
  );
};

export default App;
