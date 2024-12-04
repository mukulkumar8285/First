import Dashboard from "./dashboard/mainDashboard/dashboard";
import Sidebar from "./dashboard/Sidebar/Sidebar";


export default function Home() {
  return (
    <div style={{display:"flex"}}>
      <div style={{width:"15%"}}>
    <Sidebar/>
    </div>
    <div style={{width:"85%"}}>
    <Dashboard/>
    </div>
    </div>
  );
}
