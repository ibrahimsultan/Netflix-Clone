import React, { useState }  from 'react'
import Wdata from './Wdata'
import wslider from './videos/wslider.mp4'

function Moviecard() {

  const [items, setItems] = useState(Wdata);

  return (
    <>

<div className="movie-responsive ">
           <video src={wslider} muted autoPlay allowFullScreen loop></video>
            </div>

      <main>
        
        <div className="album py-5 bg-black">
          <div className="container">
          <h1 className="web">TV Shows</h1>
          <h4 className="descriptions">These days, the small screen has
           some very big things to offer. From sitcoms to dramas to travel and talk shows,
           these are all the best shows on TV.</h4>
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
                  focusable="false"/></a> 
                       <a href={link} style={{textDecoration: "none"}}>
                          <h6 class="text-white mt-2 mname">{name}</h6></a>
                </div>
              </div>
                );
              })}
            </div>
            <div className="text-center">
              <a href="https://www.netflix.com/in/browse/genre/83" target="_blank">
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

