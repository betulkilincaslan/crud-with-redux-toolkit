import ScrollToTopButton from "components/common/ScrollToTopButton";
import ProtectedRoute from "components/routing/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomeScreen from "screens/HomeScreen";
import LoginScreen from "screens/LoginScreen";

const App = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <ScrollToTopButton />
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
      </Routes>
    </main>
  );
};

export default App;
