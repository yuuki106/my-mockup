import { Link } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import GridViewIcon from "@mui/icons-material/GridView";
import { NestedListItem } from "./index";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">SuperB</h2>
      <div className="sidebar-content">
        <div>
          MAIN NAVIGATION
          <ul>
            <li>
              <Link to="/">
                <SpeedIcon style={{ verticalAlign: "middle", marginRight: 8 }} />
                ダッシュボード
              </Link>
            </li>
          </ul>
        </div>
        <div>
          メニュー{" "}
          <ul>
            <NestedListItem
              sx={{ minWidth: 0, marginRight: 0, paddingRight: 0 }}
              summaryText="工程管理"
              summaryIcon={<GridViewIcon />}
            ></NestedListItem>
            <NestedListItem summaryText="支払管理" summaryIcon={<GridViewIcon />}>
              {" "}
            </NestedListItem>
            <NestedListItem summaryText="発注管理" summaryIcon={<GridViewIcon />}>
              <ul>
                <li>
                  <Link to="/order-request">
                    <TripOriginIcon style={{ verticalAlign: "middle", marginRight: 8, color: "#1976d2" }} />
                    発注依頼登録
                  </Link>
                </li>
                <li>
                  <Link to="/order-request-list">
                    <TripOriginIcon style={{ verticalAlign: "middle", marginRight: 8, color: "#1976d2" }} />
                    発注依頼一覧
                  </Link>
                </li>
                <li>
                  <Link to="/order-request-list">
                    <TripOriginIcon style={{ verticalAlign: "middle", marginRight: 8, color: "#1976d2" }} />
                    発注依頼情報取込
                  </Link>
                </li>
              </ul>
            </NestedListItem>
          </ul>
        </div>
        <div>
          その他{" "}
          <ul>
            <li>
              <Link>
                <TripOriginIcon style={{ verticalAlign: "middle", marginRight: 8, color: "#f44336" }} />
                ユーザー管理
              </Link>
            </li>
            <li>
              <Link>
                <TripOriginIcon style={{ verticalAlign: "middle", marginRight: 8, color: "#ff9800" }} />
                お知らせ
              </Link>
            </li>
            <li>
              <Link>
                <TripOriginIcon style={{ verticalAlign: "middle", marginRight: 8, color: "#4caf50" }} />
                マニュアル
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ul></ul>
    </div>
  );
}

export default Sidebar;
