import { useState } from "react";
import Header from "./components/Layout/Header";
import OrderList from "./components/Orders/OrderList";
import LayoutTwoColumn from "./components/UI/LayoutTwoColumn";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  const onChangeNavigationHandler = (navItem) => {
    console.log("app.js " + navItem);
    setSelectedNavItem(navItem);
  };

  return (
    <div className="App">
      <Header
        defaultNavItem={selectedNavItem}
        onSelectNavigation={onChangeNavigationHandler}
      />
      <LayoutTwoColumn
        sideBar={<div> side bar</div>}
        mainContent={
          <div>
            <OrderList />
          </div>
        }
      />
    </div>
  );
}

export default App;
