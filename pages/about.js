import heroStyles from "./hero.module.scss";

const About = () => {
  return (
    <div className={heroStyles.Hero}>
      <img src="/man2.jpg" alt="" className={heroStyles.Hero__testImg} />
    </div>
  );
};

export default About;
