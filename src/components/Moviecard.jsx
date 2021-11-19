import React, { useState } from 'react'
import Mdata from './Mdata'
import mslider from './videos/mslider.mp4'

function Moviecard() {

  const [items, setItems] = useState(Mdata);

  return (
    <>
{/* video */}
           <div className="movie-responsive ">
           <video src={mslider} muted autoPlay allowFullScreen loop></video>
            </div>

      <main>
        <div className="album py-5 bg-black">
          <div className="container">
            <h1 className="web">Movies</h1>
            <h4 className="descriptions">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between.
              So many titles, so much to experience.</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              {items.map((element) => {
                const { id, image, name, link } = element;
                return (
                  <div className="col">
                    <div className="card shadow-sm bg-black">
                      <a href={link}>
                        <img className="bd-placeholder-img card-img-top"
                          width="100"
                          height="180"
                          src={image}
                          role="img" aria-label="Placeholder: Thumbnail"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false" /></a>
                      <a href={link} style={{ textDecoration: "none" }}>
                        <h6 class="text-white mt-2 mname">{name}</h6></a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <a href="https://www.netflix.com/in/browse/genre/34399" target="_blank">
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

export default Moviecard

