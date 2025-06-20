import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css"; // 必要に応じて作成

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
