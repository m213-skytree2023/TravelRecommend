/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { SearchStrContext } from "../components/providers/SearchStrProvider";
import ClipLoader from "react-spinners/ClipLoader";
// core components
import TrNavbar from "components/Navbars/TrNavbar";

import SimpleFooter from "components/Footers/SimpleFooter";
import Title from "components/Title";
import Intro from "components/Intro";
import Gallery from "components/Gallery";
import { requests, instance } from "components/axios";
import { Container, Row, Card } from "reactstrap";
import Search from "../components/Search";

// index page sections

const Result = () => {
  //search keyword
  const contextValue = useContext(SearchStrContext);
  const searchStr = contextValue.searchStr;
  const searchKey = { pref_name: searchStr };

  //search api route
  const request_search = "/combined";
  const request_weather = "/weather";
  const [content, setContent] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [blank, setBlank] = useState(false);

  useEffect(() => {
    console.log(searchKey);

    //stop when loading stop
    if (loading) {
      return;
    }

    instance
      .post(request_search, searchKey)
      .then((response) => {
        console.log("text response:" + response.data);
        if (response.data === false) {
          setBlank(true);
          setLoading(true);
        }
        setContent(response.data);
        console.log(content);
        if (content.length > 0) {
          if (content[0].pics.length > 0) {
            setCarousel((current) => [...current, { src: content[0].pics[0] }]);
          }
          if (content[1].pics.length > 0) {
            setCarousel((current) => [...current, { src: content[1].pics[0] }]);
          }
          if (content[2].pics.length > 0) {
            setCarousel((current) => [...current, { src: content[2].pics[0] }]);
          }
          setBlank(false);
          setLoading(true);
        }
      })
      .catch((error) => console.log(error));

    instance
      .post(request_weather, searchKey)
      .then((response) => {
        console.log("weather response:" + response.data);
        if (response.data === false) {
          setBlank(true);
          setLoading(true);
        }
        setWeather(response.data);
      })
      .catch((error) => console.log(error));
  }, [content, searchKey]);

  return (
    <>
      <TrNavbar />
      {loading ? (
        blank ? (
          <div>
            <main className="position-relative">
              <section className="section section-shaped">
                <div className="shape shape-style-1 shape-default">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <Container className="py-md">
                  <Row className="justify-content-center">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="px-4">
                      <div className="text-center mt-5">
                        <h3>
                          都道府県の名前を入力してください。
                          <span className="font-weight-light"></span>
                        </h3>
                      </div>
                      <p> </p>
                      <div className="text-center">
                        <Search />
                      </div>
                    </div>
                  </Row>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                    />
                  </svg>
                </div>
              </section>
            </main>
          </div>
        ) : (
          <div className="main-content">
            <Title items={carousel} place={searchStr} weather={weather} />

            <Intro spot={content[0].spot} intro={content[0].introduction} />
            <Gallery pics={content[0].pics} />

            <Intro spot={content[1].spot} intro={content[1].introduction} />
            <Gallery pics={content[1].pics} />

            <Intro spot={content[2].spot} intro={content[2].introduction} />
            <Gallery pics={content[2].pics} />

            <SimpleFooter />
          </div>
        )
      ) : (
        <div className="load-container">
          <section className="section section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-md">
              <Row className="justify-content-center">
                <br />
                <br />
                <h2 color="#ffffff">{searchStr}の観光スポットを検索しています</h2>
                <br />
                <br />
                <br />
              </Row>
              <Row className="justify-content-center">
                <br />
                <br />
                <br />
                <br />
                <br />
                <ClipLoader color="#ffffff" size={150} />
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Result;
