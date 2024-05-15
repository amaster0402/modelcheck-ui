import { Outlet } from "react-router-dom";
import config from "@/config/config";

export default function Layout() {

  return (
    <div>
      <Outlet />
    </div>
  );
}
