import React from "react";
import netblack from "./images/netblack.png";

const Hero = (props) => {
  return (
    <>
      <main className="bg-black">

        <div className="px-6 py-5 my-0  text-center  height bgimg">
          <h1 className="display-3 fw-bold text-white mt-5">{props.title}</h1>
          <div className="col-lg-6 mx-auto">
            <h2 className="lead mb-4 text-white fw-bold">{props.desc}</h2>
            <h4 className="text-white">Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="https://www.netflix.com/signup/password?locale=en-IN"><button
                type="button"
                className="btn btn-danger btn-lg px-10 gap-3"
              >
                {props.btname} <i className="bi bi-arrow-right-short" />
              </button></a>
            </div>
          </div>
        </div>


        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold text-white">{props.title2}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-white">{props.desc2}</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <a href="https://www.netflix.com/" target="_blank"> <button
                type="button"
                className="btn btn-danger btn-lg px-4 me-sm-3"
              >
                {props.btname2} <i className="bi bi-tv"></i>
              </button></a>
              <a href="https://www.netflix.com/in/login" target="_blank"><button
                type="button"
                className="btn btn-secondary btn-lg px-4"
              >
                {props.btsign}
              </button></a>
            </div>
          </div>
          <div className="overflow-hidden" >
            <div className="container px-5">
              <img src={props.image} style={{ maxHeight: "30vh", }} />
            </div>
          </div>
        </div>



        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={props.imgsrc}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
                {props.title3}
              </h1>
              <p className="lead text-white">{props.desc3}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3  text-white">
                {props.title4}
              </h1>
              <p className="lead text-white">{props.desc4}</p>
            </div>
            <div className="col-lg-6">
              <img src={props.img} style={{ maxHeight: "30vh", }} />

              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
          </div>
        </div>



        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={props.imgsrc5}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
                {props.title5}
              </h1>
              <p className="lead text-white">{props.desc5}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
          </div>
        </div>

        <img
          src={netblack}
          className="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="800"
          height="600"
          loading="lazy"

        />
        <p className="lead mb-0 text-white text-center">Netflix India</p>
      </main>

      <div className="gototop js-top">
			<a href="home" className="js-gotop"><i className="bi bi-arrow-90deg-up"></i>
			</a>
		</div>

    </>
  );
};

export default Hero;
