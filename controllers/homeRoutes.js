const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

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
    console.log(req.session.logged_in);
    //pass the serialize data into the template
    res.render("homepage", {
      home_feed_posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["body", "createdAt"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const post = postData.get({ plain: true });
    console.log(post);
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {}
});

//edit post page
router.get("/edit/:id", async (req, res) => {
  try {
    const post_editData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const post = post_editData.get({ plain: true });
    console.log(post);
    res.render("edit", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {}
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
