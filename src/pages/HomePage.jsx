import MainContent from "./../components/MainContent";
import Sidebar from "./../components/Sidebar";

import "./../styles/components/pages/homepage.sass";

function HomePage() {

  return (
    <div id="portfolio">
      <h1>Yuri Tokio</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default HomePage