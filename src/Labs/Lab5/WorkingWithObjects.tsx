import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });

      const [moduleObj, setModule] = useState({
        id: "CS101",
        name: "Web Development",
        description: "Learn how to build web apps with React and Node",
        course: "Software Engineering",
      });

      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

      return (
        <div id="wd-working-with-objects">
          <h3>Working With Objects</h3>
    
          {/* Assignment: Modify Title */}
          <h4>Modifying Properties</h4>
          <a
            id="wd-update-assignment-title"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
          >
            Update Title
          </a>
          <FormControl
            className="w-75 mb-2"
            id="wd-assignment-title"
            defaultValue={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
    
          {/* Assignment: Update Score */}
          <a
            id="wd-update-assignment-score"
            className="btn btn-success float-end"
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          >
            Update Score
          </a>
          <FormControl
            className="w-75 mb-2"
            id="wd-assignment-score"
            type="number"
            defaultValue={assignment.score}
            onChange={(e) =>
              setAssignment({ ...assignment, score: parseInt(e.target.value) })
            }
          />
    
          {/* Assignment: Update Completed */}
          <a
            id="wd-update-assignment-completed"
            className="btn btn-warning float-end"
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
          >
            Update Completed
          </a>
          <input
            className="form-check-input me-2"
            id="wd-assignment-completed"
            type="checkbox"
            checked={assignment.completed}
            onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
            }
            />
          <hr />
    
          {/* Assignment: Get Object */}
          <h4>Retrieving Objects</h4>
          <a
            id="wd-retrieve-assignments"
            className="btn btn-primary"
            href={`${ASSIGNMENT_API_URL}`}
          >
            Get Assignment
          </a>
          <hr />
    
          {/* Assignment: Get Title */}
          <h4>Retrieving Properties</h4>
          <a
            id="wd-retrieve-assignment-title"
            className="btn btn-primary"
            href={`${ASSIGNMENT_API_URL}/title`}
          >
            Get Title
          </a>
          <hr />
    
          {/* Module: Get Object & Name */}
          <h4>Module</h4>
          <a
            id="wd-retrieve-module"
            className="btn btn-primary me-2"
            href={`${MODULE_API_URL}`}
          >
            Get Module
          </a>
          <a
            id="wd-retrieve-module-name"
            className="btn btn-primary"
            href={`${MODULE_API_URL}/name`}
          >
            Get Module Name
          </a>
          <hr />
    
          {/* Module: Update Name */}
          <h4>Modifying Module</h4>
          <a
            id="wd-update-module-name"
            className="btn btn-primary float-end"
            href={`${MODULE_API_URL}/name/${moduleObj.name}`}
          >
            Update Module Name
          </a>
          <FormControl
            className="w-75 mb-2"
            id="wd-module-name"
            defaultValue={moduleObj.name}
            onChange={(e) =>
              setModule({ ...moduleObj, name: e.target.value })
            }
          />
    
          {/* Module: Update Description */}
          <a
            id="wd-update-module-description"
            className="btn btn-secondary float-end"
            href={`${MODULE_API_URL}/description/${moduleObj.description}`}
          >
            Update Module Description
          </a>
          <FormControl
            className="w-75"
            id="wd-module-description"
            defaultValue={moduleObj.description}
            onChange={(e) =>
              setModule({ ...moduleObj, description: e.target.value })
            }
          />
          <hr />
        </div>
      );
    }