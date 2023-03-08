import { Routes, Route } from "react-router-dom";
import { UsersPage } from "./pages/users";
import { HomePage } from "./pages/home"

export const Main = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
