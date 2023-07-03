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
// core components
import TrNavbar from "components/Navbars/TrNavbar";

import SimpleFooter from "components/Footers/SimpleFooter";
import Title from "components/Title";
import Intro from "components/Intro";
import Gallery from "components/Gallery";

// index page sections

const Result = () => {
  const request_search = "";

  const contextValue = useContext(SearchStrContext);
  const searchStr = { search: contextValue.searchStr };

  // const [spotlist, setSpotList] = useState([]);
  // const [pics, setPics] = useState([]);

  const spotlist = [
    {
      id: 1,
      spot: "spot1",
      introduction: "XXXXXXXXX",
    },
    {
      id: 2,
      spot: "spot2",
      introduction: "XXXXXXXXX",
    },
    {
      id: 3,
      spot: "spot3",
      introduction: "XXXXXXXXX",
    },
  ];

  const pics = [
    {
      id: 1,
      spot: "spot1",
      pics: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHx0b2t5b3xqYXwwfHx8fDE2ODgzNjc5NDZ8MA&ixlib=rb-4.0.3", "url2", "url3", "url4", "url5"],
    },
    {
      id: 2,
      spot: "spot2",
      pics: ["url1", "url2", "url3", "url4", "url5"],
    },
    {
      id: 3,
      spot: "spot3",
      pics: ["url1", "url2", "url3", "url4", "url5"],
    },
  ];

  // useEffect(()=>{
  //   setSpotList(spottemp);
  //   console.log(spotlist);
  // }
  // )

  // setSpotList(spottemp);
  // console.log(spotlist);

  return (
    <>
      <TrNavbar />
      <Title />

      <Intro spot={spotlist[0].spot} intro={spotlist[0].introduction} />
      <Gallery pics = {pics[0].pics}/>

      <Intro spot={spotlist[1].spot} intro={spotlist[1].introduction} />
      <Gallery pics = {pics[1].pics}/>

      <Intro spot={spotlist[2].spot} intro={spotlist[2].introduction} />
      <Gallery pics = {pics[2].pics}/>

      <SimpleFooter />
    </>
  );
};

export default Result;
