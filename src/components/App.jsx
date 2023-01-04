import { Routes, Route } from "react-router-dom";
import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { NotFound } from "./Pages/NotFound/NotFound";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
