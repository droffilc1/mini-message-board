const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Luffy",
    added: new Date()
  },
  {
    text: "Hello",
    user: "Zoro",
    added: new Date()
  }
];

function isValidPost(post) {
  return post.messageUser && post.messageUser.toString().trim() !== '' && post.messageText && post.messageText.toString().trim() !== '';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET on /new - display message form to client */
router.get('/new', function(req, res, next) {
  res.render('form')
})

/* POST message */
router.post('/new', function(req, res, next) {

  // validation - need to add an else statement (hey! please enter a name and message)
  if (isValidPost(req.body)) {
    // add new message to the array
    messages.push({
      text: req.body.messageText.toString().trim(),
      user: req.body.messageUser.toString().trim(),
      added: new Date()
    })
  }
  // send user back to homepage
  res.redirect('/')
})

module.exports = router;