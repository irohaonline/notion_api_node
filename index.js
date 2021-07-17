const express = require("express");
const getPage = require("./notion/client/getPage");
const app = express();

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

app.use(express.json());
app.listen;

app.get("/", async (req, res) => {
  const fetchedPageContent = await getPage(process.env.NOTION_PAGE_ID);
  res.status(200).send(fetchedPageContent);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
