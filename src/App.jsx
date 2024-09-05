import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "flowbite";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Daftar from "./pages/Daftar";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/daftar",
    element: (
      <>
        <Navbar />
        <Daftar />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
