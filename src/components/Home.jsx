import React from "react";
import kids from "./images/kids.png";
import mobile from "./images/mobile.jpg";
import tv from "./videos/netflixtv.jpg";
import wach from './videos/wach.jpg';
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero
        title="Unlimited movies, TV shows and more."
        desc="Watch anywhere. Cancel anytime"
        get="Ready to watch? Enter your email to create or restart your membership."
        btname="Get Started"

        title2="Enjoy on your TV."
        desc2="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        btname2="Watch Now"
        btsign="Sign in"

        image={tv}
        title3="Download your shows to watch offline."
        desc3="Save your favourites easily and always have something to watch."
        imgsrc={mobile}

        title4="Watch everywhere."
        desc4="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img={wach}

        title5="Create profiles for children."
        desc5="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        imgsrc5={kids}
      />
      
    </>
  );
};

export default Home;
