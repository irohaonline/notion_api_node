require("dotenv").config();

const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

module.exports = async (id) => {
  const page = await notion.pages.retrieve({
    page_id: id,
  });

  const blocks = await notion.blocks.children.list({
    block_id: id,

    // Max is 100
    page_size: 100,
  });

  return {
    page,
    blocks,
    id: page.id,
    title: page.properties.title.title[0].plain_text,
  };
};
