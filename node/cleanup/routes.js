const { log } = require("console");
const fs = require("fs");
const requesthandler = (req, res) => {
  // url method

  const url = req.url;
  const method = req.method;

  if (req.url === "/") {
    fs.readFile("formValues.txt", (err, data) => {
      let value = "";

      if (!err) {
        value = data.toString();
      }

      res.setHeader("Content-Type", "text/html");

      res.end(`
      <h2>${value}</h2>

      <form action="/message" method="POST">
        <label>Name :</label>
        <input type="text" name="username">
        <button type="submit">Add</button>
      </form>
    `);
    });
  } else {
    if (req.url == "/message") {
      res.setHeader("content-type", "text/html");

      let dataChunks = [];
      req.on("data", (chunks) => {
        // console.log(chunks);
        dataChunks.push(chunks);
      });

      //   req.on("end", () => {
      //     let combinedBuffer = Buffer.concat(dataChunks);
      //     console.log(combinedBuffer.toString());
      //     let value = combinedBuffer.toString().split("=");
      //     console.log(value);
      //   });

      req.on("end", () => {
        let buffer = Buffer.concat(dataChunks);
        // console.log(buffer);

        let formData = buffer.toString();
        console.log(formData);

        const formValues = formData.split("=")[1];

        fs.writeFile("formValues.txt", formValues, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          res.end();
        });
      });
    } else {
      if (req.url == "/read") {
        fs.readFile("formValues.txt", (err, data) => {
          console.log(data.toString());
          res.end(data.toString());
        });
      }
    }
  }
};
const anotherFunction = () => {
  console.log("This is another function");
};

// module.exports=(requesthandler);
// module.exports = { requesthandler, anotherFunction };

// module.exports = { handler: requesthandler, testFunction: anotherFunction };

module.exports.handler = requesthandler;
module.exports.testFunction = anotherFunction;
