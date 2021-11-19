import React, { useState } from 'react'
import PropTypes from "prop-types";
import trailer from './videos/trailer.mp4'
import Ddata from './Ddata'

function YoutubeEmbed() {
    const [items, setItems] = useState(Ddata);
    return (
        <>
            <div className="video-responsive">
                <video src={trailer} muted autoPlay allowFullScreen></video>
            </div>
            {/*Container*/}
            <main className="my-0">
                <div className="album py-5 bg-black my-0">
                    <div className="container my-0">
                        <h1 className="web">Documentaries</h1>
                        <h4 className="descriptions">The truth hurts. But sometimes it’s inspirational,
                            scary, sad, funny or anywhere in between.
                            Experience it all with our best documentary series and movies.</h4>
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
                       <a href="https://www.netflix.com/in/browse/genre/6839" target="_blank">
                            <button className="btn btn-danger mt-4" >Load More</button></a>
                        </div>
                    </div>
                   
                </div>
               
            </main>
        </>
    )
};
YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed

