import React from "react";

const MySkills = () => {
  return (
    <div className="container pt-4">
      <h6 className="text-center mt-5">Get To Know My Skills!</h6>
      <h2 className="text-brand pb-4 mb-2">My Skills</h2>
      <div className="row">
        <div className="col-md-offset-3 col-md-6">
          <h3 class="progress-title">HTML5</h3>
          <div class="progress green">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>

        <div className="col-md-offset-3 col-md-6">
          <h3 class="progress-title">Javascript</h3>
          <div class="progress green">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
        </div>
        <div className="col-md-offset-3 col-md-6">
          <h3 class="progress-title">CSS3</h3>
          <div class="progress blue">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "85%", background: "#70d6ff" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
        </div>
        <div className="col-md-offset-3 col-md-6">
          <h3 class="progress-title">React</h3>
          <div class="progress blue">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "75%", background: "#70d6ff" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
        </div>
        <div className="col-md-offset-3 col-md-6">
          <h3 class="progress-title">Bootstrap</h3>
          <div class="progress orange">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "85%", background: "#b661f2" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
        </div>
        <div className="col-md-offset-3 col-md-6">
          <h3 class="progress-title">Nextjs</h3>
          <div class="progress orange">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "85%", background: "#532b88" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
        </div>
        <div className="col-md-offset-3 col-md-6">
          <h3 class="progress-title">Nodejs</h3>
          <div class="progress green">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "75%", background: "#70e000" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
        </div>
        <div className="col-md-offset-3 col-md-6">
          <h3 class="progress-title">MongoDB</h3>
          <div class="progress green">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "70%", background: "#38b000" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
