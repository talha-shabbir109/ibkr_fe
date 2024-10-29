import SectionPage from "../components/SectionPage";
import SideManue from "../components/SideManu";

function Index() {
    return (
        <div className="lg:flex">
            <SideManue></SideManue>
            <SectionPage></SectionPage>
        </div>
    );
  }
  
export default Index;