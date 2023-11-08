"use client";

import Image from "next/image";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";
import {
  hero_img,
  linkedin_icon,
  medium_icon,
  twitter_icon,
} from "@/assets/image";

const Homepage = () => {
  return (
    <>
      {/* NAVBAR SECTION */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero_sec">
        <div className="hero_inner main_container sub_container">
          <div className="hero_left">
            <div className="hero_left_inner">
              <div className="hero_left_header">
                <h2>Blog Posts</h2>

                <p>I think so, this is it. </p>
              </div>

              <div className="hero_left_quotes small_text">
                <p>
                  Design begins after I begin to think about how to present an
                  experience most successfully, whether a button I put in can
                  solve a problem. The only point in design is not ui design, if
                  the user does not have a good experience at the end of the
                  product, the design will be considered unsuccessful in my
                  opinion.
                </p>
              </div>

              <div className="hero_left_btn_sec">
                <button>
                  <span>
                    <Image
                      src={twitter_icon}
                      width={25}
                      height={25}
                      alt="social_icon"
                    />
                  </span>
                  twitter
                </button>
                {/*  */}
                <button>
                  <span>
                    <Image
                      src={linkedin_icon}
                      width={25}
                      height={25}
                      alt="social_icon"
                    />
                  </span>
                  linkedin
                </button>
                {/*  */}
                <button>
                  <span>
                    <Image
                      src={medium_icon}
                      width={25}
                      height={25}
                      alt="social_icon"
                    />
                  </span>
                  medium
                </button>
              </div>
            </div>
          </div>

          <div className="hero_right">
            <div className="hero_right_inner">
              <Image src={hero_img} width={500} height={500} alt="hero_img" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
};

export default Homepage;
