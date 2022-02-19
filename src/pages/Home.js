import React from "react";
import "./Home.css";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Content from "../components/content/Content";
import Button from "../components/button/Button";
import Button2 from "../components/button/Button2";
function Home() {
  return (
    <div>
      {/* header */}
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <Header />
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="cards">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <Card />
            </div>
            <div className="col-lg-6">
              {" "}
              <Card />
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Content />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="contianer-fluid m-4 text-center">
        <div className="row">
          <div className="col-2">
            <Button />
          </div>
          <div className="col-2">
            <Button2 />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
