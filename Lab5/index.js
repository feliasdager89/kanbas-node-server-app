import PathParameters from "./PathParameters.js";
import QueryParameters from "./QuaryParameters.js";
import WorkingWithArrays from "./WorkWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";

export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
      res.send("Welcome to Lab 5");
    });
    PathParameters(app);
    QueryParameters(app);
    WorkingWithObjects(app);
    WorkingWithArrays(app);
  };
  
  