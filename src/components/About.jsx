import aboutsvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle.jsx";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutsvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            After graduation from engineering college, I found my passion and
            love for programming especially web development, so i didicated my
            time to always learn and gain knowledge along the way and enhance
            all of that to produce good work as far as i can.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
