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
// core components
import TrNavbar from "components/Navbars/TrNavbar";

import SimpleFooter from "components/Footers/SimpleFooter";
import Title from "components/Title";
import Intro from "components/Intro";
import Gallery from "components/Gallery";


// index page sections


class Result extends React.Component {
  render() {
    return (
      <>
        <TrNavbar />
        <Title />
        <Intro />
        <Gallery />
        <Intro />
        <Gallery />
        <Intro />
        <Gallery />
        <SimpleFooter/>
      </>
    );
  }
}

export default Result;
