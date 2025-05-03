import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProjectModal = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        View Details
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-center">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">
                Abc
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Visit Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
