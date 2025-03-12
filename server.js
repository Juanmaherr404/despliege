const express = require('express');
const app = express();
const PORT = 3000;
const exec = require("child_process").exec;



app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.send('Testeo');
});



app.get ("/run-command", (req, res) => {
  exec("touch test.txt", (error, stdout, stderr) => {
    if (error) {
      console.log(`exec error: ${error}`);
      return res.status(500).json({ error: error.message });
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send("Script executed successfully");
  });
});


app.post("/recon", (req, res) => {
  console.log("Recived request to /recon");
  const domain = req.body.domain || req.query.domain;
  const APIKEY = req.body.APIKEY || req.query.APIKEY;

  console.log(`Domain: ${domain}`);
  console.log(`APIKEY: ${APIKEY}`);
  exec(`./recon.sh ${domain} > resultados`, (error, stdout, stderr) => {
    if (error) {
      console.log(`exec error: ${error}`);
      return res.status(500).send("Error executing script");
    } else {
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.send("Script executed successfully");
    }
  });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});