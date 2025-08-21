
function Portfolio() {
  return (
    <>
      {console.log("Portfolio component rendered")}
      <div>
        <h2>My Portfolio</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>A brief description of your first project.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>A brief description of your second project.</p>
      </div>
    </div>
    </>
  );
};

export default Portfolio;