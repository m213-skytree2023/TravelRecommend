import React from "react";

import Search from "./Search";
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

const Screen = () => {
  return (
    <>
      <main className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <div className="text-center mt-5">
                  <h3>
                    どこに旅行に行きたい？
                    <span className="font-weight-light"></span>
                  </h3>
                </div>
                <p> </p>
                <div className="text-center">
                  <Search />
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p>「日本の魅力を全身で感じる旅へ」</p>
                      <p>
                        古き良き伝統と先進技術が共存する国、日本。
                        その魅力に包まれた国内旅行へと足を踏み入れませんか？桜の花が咲き誇る春、夏の海辺での涼やかな一時、紅葉が彩る秋、雪景色が広がる冬。四季折々の風景が心を魅了します。古都の街並みで歴史の息吹を感じ、温泉で心身を癒し、地元の味覚を堪能してみませんか？心温まるおもてなしと美しい風景が、あなたの旅を彩ります。日本国内旅行で、新たな発見と感動を体験しましょう。あなたの旅の思い出は、ここで生まれるはずです。
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Screen;
