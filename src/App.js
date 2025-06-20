import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import OrderRequest from "./pages/OrderRequest ";
import OrderRequestList from "./pages/OrderRequestList";
import RequestDetail from "./pages/RequestDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="order-request" element={<OrderRequest />} />
          <Route path="order-request-list" element={<OrderRequestList />} />
          <Route path="request-detail" element={<RequestDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
