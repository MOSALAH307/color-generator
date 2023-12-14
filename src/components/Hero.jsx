/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className=" bg-emerald-100 py-24">
      <div className=" align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          {/* {name&job} */}
          <h1 className=" text-7xl font-bold tracking-wider">I'm Mohamed</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          {/* {social links} */}
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/MOSALAH307"
              className="h-8 w-8 text-slate-500 hover:text-black duration-300"
              target="blank"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-salah-7796b611b/"
              className="h-8 w-8 text-slate-500 hover:text-black duration-300"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/mohamed.sallah.940/"
              className="h-8 w-8 text-slate-500 hover:text-black duration-300"
              target="blank"
            >
              <FaFacebook />
            </a>
          </div>
        </article>
        {/* {image} */}
        <figure className="hidden md:block">
          <img src={heroImg} alt="hero" className="h-80 lg:h-96" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
