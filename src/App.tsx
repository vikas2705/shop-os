import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BaseHome from "./feature/home/BaseHome";

function App() {
  return (
    <Router>
      <Layout>
        <BaseHome />
      </Layout>
    </Router>
  );
}

export default App;
