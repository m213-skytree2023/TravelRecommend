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

// index page sections

const Result = () => {
  const contextValue = useContext(SearchStrContext);
  const searchStr = contextValue.searchStr;
  const searchKey = {pref_name: searchStr};
  const request_search = "/pref";
  // const [content, setContent] = useState([]);
  // const [carousel, setCarousel] = useState([]);

  const [loading, setLoading] = useState(true);

  const content = [
    {
      id: 1,
      spot: "旭山動物園",
      spot_en: "Asahiyama Zoo",
      introduction:
        "北海道にある動物園で、多くの動物たちを見ることができます。特に有名なのは、冬になると行われるペンギンのウォークです。",
      pics: ["url1", "url2", "url3", "url4", "url5"],
    },
    {
      id: 2,
      spot: "函館山",
      spot_en: "Mount Hakodate",
      introduction:
        "函館市にある山で、展望台からは函館市街や夜景を一望することができます。特に夜景は美しく、観光客に人気です。",
      pics: ["url1", "url2", "url3", "url4", "url5"],
    },
    {
      id: 3,
      spot: "美瑛の丘",
      spot_en: "Biei Hills",
      introduction:
        "美しい風景が広がる美瑛町にある丘です。四季折々の風景が楽しめ、特に夏には美しい花畑が広がります。写真撮影スポットとしても人気です。",
      pics: ["url1", "url2", "url3", "url4", "url5"],
    },
  ];

  const carousel = [
    {
      src: require("assets/img/theme/img-1-1200x1000.jpg"),
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/theme/img-2-1200x1000.jpg"),
      altText: "",
      caption: "",
      header: "",
    },
  ];

  useEffect(() => {
    
    instance
      .get(request_search)
      .then((response) => {
        console.log(response);
        // setContent(response);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <TrNavbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            className="spinner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <ClipLoader color="#52bfd9" size={150} />
          </div>
        </div>
      ) : (
        <div className="main-content">
          <TrNavbar />
          <Title items={carousel} place={searchStr} />

          <Intro spot={content[0].spot} intro={content[0].introduction} />
          <Gallery pics={content[0].pics} />

          <Intro spot={content[1].spot} intro={content[1].introduction} />
          <Gallery pics={content[1].pics} />

          <Intro spot={content[2].spot} intro={content[2].introduction} />
          <Gallery pics={content[2].pics} />

          <SimpleFooter />
        </div>
      )}
    </>
  );
};

export default Result;
