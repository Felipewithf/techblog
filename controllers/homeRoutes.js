const router = require("express").Router();
const { Post, User } = require("../models");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    //serialize data so the template can read it.
    const home_feed_posts = postData.map((post) => post.get({ plain: true }));
    console.log(home_feed_posts);
    //pass the serialize data into the template
    res.render("homepage", {
      home_feed_posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

module.exports = router;
