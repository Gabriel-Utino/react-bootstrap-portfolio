import React from 'react';
import reactImage from "../images/react.png";
import jsImage from "../images/js.png";
import HTMLImage from "../images/html.png";
import BootstrapImage from "../images/Bootstrap.png";
import profileImage from "../images/icon.jpg";
import cssImage from "../images/css.svg";

function HomePage() {
  return (
    <div className="container text-center">
      <h1>Gabriel</h1>

      <img src={profileImage} className="profileImage" alt="profile" />

      <p>
        Gabriel Casimiro Utino
      </p>

      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 className="section-subheading text-muted mb-5">私が作った作品一覧です</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Todoリスト</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore
                harum ex magni, dicta impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">レスポンシブサイト</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore
                harum ex magni, dicta impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">ウェブセキュリティ</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore
                harum ex magni, dicta impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="text-center">
          <h1 className="title">スキル</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img src={jsImage} alt="javascript" />
              <h4>Javascript</h4>
            </div>
            <div className="col-md-4 services">
              <img src={reactImage} alt="React" />
              <h4>React</h4>
            </div>
            <div className="col-md-4 services">
              <img src={BootstrapImage} alt="Bootstrap" />
              <h4>Bootstrap</h4>
            </div>
            <div className="col-md-4 services">
              <img src={HTMLImage} alt="HTML" />
              <h4>HTML</h4>
            </div>
            <div className="col-md-4 services">
              <img src={cssImage} alt="HTML" />
              <h4>CSS</h4>
            </div>
          </div>
          <button type="button" className="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
