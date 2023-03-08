import { Routes, Route } from "react-router-dom";
import { UsersPage } from "./pages/users";

export const Main = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
};
