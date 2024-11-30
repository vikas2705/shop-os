import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./commnComponents/Layout";
import BaseHome from "./feature/home/BaseHome";
// import MyStore from "./feature/myStore/index";
import WorkFlows from "./feature/workflows/index";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<BaseHome />} />
          {/* <Route path='/my-store' element={<MyStore />} /> */}
          <Route path='/work-flows' element={<WorkFlows />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
