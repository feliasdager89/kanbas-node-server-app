export default function PathParameters(app) {
   
    //addition route
    app.get("/lab5/add/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) + parseInt(b);
      res.send(sum.toString());
    });

    // subtract route
    app.get("/lab5/subtract/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) - parseInt(b);
      res.send(sum.toString());
    });

    //multiply route
    app.get("/lab5/multiply/:a/:b", (req, res)=>{
        const {a, b} = req.params;
        const multiply = parseInt(a) * parseInt(b);
        res.send(multiply.toString());
    });

    //division route
    app.get("/lab5/divide/:a/:b", (req, res)=>{
        const {a, b} = req.params;
        const divide = parseInt(a) / parseInt(b);
        res.send(divide.toString());
    });

    

  };
  
  