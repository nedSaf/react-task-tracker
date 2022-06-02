import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>This is a simple React app that I built to learn React.</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
