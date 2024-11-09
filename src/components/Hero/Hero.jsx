import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="wrap">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/044/876/360/small_2x/cat-with-glasses-meme-sticker-tshirt-illustration-free-png.png"
              alt=""
            />

            <div className="box">
              <h2>Lorem ipsum </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                modi, distinctio ex itaque repellat minus!
              </p>
              <button>lorem</button>
            </div>
          </div>
        </div>
        <div className="menu"></div>
      </section>
    </>
  );
};

export default Hero;
