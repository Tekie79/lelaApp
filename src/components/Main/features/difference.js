import workersImg from "../../assets/diff.jpg";

export const Difference = () => {
  return (
    <div className="differences">
      <h1>Zega's Difference</h1>
      <div className="difference_card">
        <div className="diff_description">
          <h2>Work should be free to flow.</h2>
          <p>
            These days, it’s not enough for IT systems to just work, they need
            to help you work smarter. That’s why we’re here – because we believe
            in the limitless potential of IT. But more than that, we believe in
            applying practical solutions to help our clients realize that
            potential.{" "}
          </p>
          <p>
            That’s what we call{" "}
            <em>
              <b>Applied IT Productivity</b>
            </em>
            . And it only happens when your people, processes, and tools are
            working with each other – not just “making it work.” When you
            eliminate the roadblocks and break away from the limitations of
            legacy tech, work is free to flow.
          </p>
        </div>
        <div className="diff_image-container">
          <img src={workersImg} alt="workers_image" className="diff_image" />
        </div>
      </div>
    </div>
  );
};
