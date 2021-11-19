import React, { useState } from 'react'
import Anime from "./Anime"
import anslider from './videos/anslider.mp4'

function Animated() {
  const [items, setItems] = useState(Anime);
  return (
    <>

      {/* video */}
      <div className="movie-responsive ">
        <video src={anslider} muted autoPlay allowFullScreen loop></video>
      </div>


      {/* main */}
      <main className="bg-black">
        <div className="album py-5 bg-img">
          <div className="container">
            <h2 className="web">Animated Movies  &  TV Shows</h2>
            <h4 className="descriptions">Cartoons for kids, anime for adults, animated adventures for teens–these films and shows feature a
              diverse slate of animated stories for a broad range of ages.</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
              {items.map((element) => {
                const { image, name, link } = element;
                return (
                  <div className="col">
                    <div className="card shadow-sm bg-black">
                      <a href={link}> <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="180"
                        src={image}
                        alt="image"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      /></a>
                      <a href={link} style={{ textDecoration: "none" }}><h6 className="mt-2 text-white">{name}</h6></a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <a href="https://www.netflix.com/in/browse/genre/4698" target="_blank">
                <button className="btn btn-danger mt-4" >
                  Load More
                </button></a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Animated

