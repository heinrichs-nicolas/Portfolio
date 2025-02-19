import "../../styles/cards/Welcome.css";
import IconButton from "../buttons/IconButton";

const Welcome = () => {
  return (
    <div className="card_wrapper">
      <h2 className="title">Welcome</h2>
      <div className="text">
        <p>
          Hi, I'm <strong>Nicolas Heinrichs</strong>, a fullstack web/mobile
          developer, with strong focus on the user experience, animations and
          micro interactions.
        </p>
        <p>
          I love to create beautiful and functional interfaces, I am passionate
          about technology and I am always looking for new challenges.
        </p>
      </div>
      <div className="buttons">
        <IconButton name="github" />
        <IconButton name="mail" />
      </div>
    </div>
  );
};

export default Welcome;
