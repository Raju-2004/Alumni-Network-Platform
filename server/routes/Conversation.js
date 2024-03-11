const express  = require('express')
const router = express.Router();
const Conversation  =require('../models/Conversation')

router.post('/createOrGetConversation', async (req, res) => {
    try {
      const { members } = req.body;
      // Find a conversation that includes the provided members
      const conversation = await Conversation.findOne({
        members: { $all: members }
      });
      if (conversation) {
        // Conversation already exists
        res.json({ conversation });
      } else {
        // Create a new conversation
        const newConversation = new Conversation({ members });
        await newConversation.save();
        res.json({ conversation: newConversation });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  
  router.get("/:email", async (req, res) => {
    try {
      const conversation = await Conversation.find({
        members: { $in: [req.params.email] },
      });
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;