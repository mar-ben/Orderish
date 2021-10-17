import { useState } from "react";
import Header from "./components/Layout/Header";
import Order from "./components/Orders/Order";
import ProductList from "./components/Products/ProductList";
import Home from "./components/Home/Home";
import VendorList from "./components/Vendors/VendorList";
import LayoutTwoColumn from "./components/UI/LayoutTwoColumn";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("Orders");

  const onChangeNavigationHandler = (navItem) => {
    console.log("app.js " + navItem);
    setSelectedNavItem(navItem);
  };

  return (
    <div className="App">
      <Header onSelectNavigation={onChangeNavigationHandler} />
      <LayoutTwoColumn
        sideBar={<div> side bar</div>}
        mainContent={
          <div>
            {selectedNavItem === "Home" && <Home />}
            {selectedNavItem === "Orders" && <Order />}
            {selectedNavItem === "Products" && <ProductList />}
            {selectedNavItem === "Vendors" && <VendorList />}
          </div>
        }
      />
    </div>
  );
}

export default App;
