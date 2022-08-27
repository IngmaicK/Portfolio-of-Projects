import { Typewritter, AnimatedBackground } from "../components";
import "./Landing.css";

let msgArray = [
  " ",
  "A Tech Product Developer Specialist",
  "An Electrical and Mechanical Engineer",
  "Front-end developer",
  "Back-end developer",
  "Full stack developer",
  "Data Analist",
  "Or!",
  '"a coder"',
  " ",
];

function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>What am I?</div>
        <Typewritter data={msgArray} />
      </div>
    </AnimatedBackground>
  );
}

export default Landing;
