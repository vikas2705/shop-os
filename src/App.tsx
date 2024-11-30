import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./commnComponents/Layout";
import BaseHome from "./feature/home/BaseHome";
// import MyStore from "./feature/myStore/index";
// import WorkFlows from "./feature/workflows/index";
import AgentList from "./feature/home/Agents";
import Templates from "./feature/home/templates";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BaseHome />} />
          {/* <Route path='/my-store' element={<MyStore />} /> */}
          {/* <Route path="/work-flows" element={<WorkFlows />} /> */}
          <Route path="/agents" element={<AgentList />} />

          <Route path="/templates" element={<Templates />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
