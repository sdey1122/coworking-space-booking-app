import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetProducts } from "../actions/productsAction";
import HomeSlider from "./HomeSlider";
import News from "./News";
import Footer from "./Footer";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetProducts());
  }, []);

  return (
    <div>
      <HomeSlider />
      <Footer />
    </div>
  );
};

export default Home;
