"use client";

import Image from "next/image";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";
import { hero_img } from "@/assets/image";

const Homepage = () => {
  return (
    <>
      {/* NAVBAR SECTION */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero_sec">
        <div className="hero_inner">
          <p>hero section here</p>

          {/* IMAGE TEST */}
          <Image src={hero_img} width={100} height={100} alt="hero_img" />
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
};

export default Homepage;
