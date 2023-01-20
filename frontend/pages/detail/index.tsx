import React, { useState, useEffect } from "react";
import Header from "pages/components/Header/index";
import Limonadier from "./components/limonadier/index";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import Slick from "pages/components/Slick/index";
import Footer from "pages/components/Footer/index";
function Detail() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div>
      <Header isMobile={isMobile} initialColor={false}></Header>
      <Limonadier isMobile={isMobile} />
      <Slick></Slick>
      <Footer></Footer>
    </div>
  );
}

export default Detail;
