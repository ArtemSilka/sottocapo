// dependencies
const express = require("express");
const router = express.Router();
const AssistantV2 = require("ibm-watson/assistant/v2");
const { Authenticator } = require("ibm-watson/auth");

// instance of assistant
const authenticator = new Authenticator({
  apikey: process.env.WATSON_ASSISTANT_APIKEY,
});

const assistant = new AssistantV2({
  version: "2020-11-01",
  authenticator: authenticator,
  url: process.env.WATSON_ASSISTANT_URL,
});

// handle session token
// GET /api/watson/session
router.get("/session", async (req, res) => {
  try {
    const session = await assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
    });
    res.json(session["result"]);
  } catch (err) {
    res.send("Ooops, something went wrong..");
    console.log(err);
  }
});

// handle messages

// export routes
module.exports = router;
 