import { DashboardComponent } from "../components/Dashboard/Dashboard";
import { SidebarComponent } from "../components/Sidebar/Index";

export function PageHome() {
  return (
    <>
      <SidebarComponent />;
      <DashboardComponent />
    </>
  );
}
