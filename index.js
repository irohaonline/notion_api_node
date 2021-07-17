const express = require("express");
const getPage = require("./notion/client/getPage");
const app = express();
const PORT = 3000;

app.use(express.json());
app.listen;

app.listen(PORT, () => console.log(`Port ${PORT} listening...`));

app.get("/", async (req, res) => {
  const fetchedPageContent = await getPage(process.env.NOTION_PAGE_ID);
  res.status(200).send(fetchedPageContent);
});
