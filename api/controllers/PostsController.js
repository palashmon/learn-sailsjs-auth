/**
 * PostsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  posts: async function posts(req, res) {
    try {
      const posts = await Posts.find({});
      res.send(posts);
    } catch (error) {
      res.send(500, { error: "Database Error" });
    }
  },

  create: async function (req, res) {
    try {
      const { title, body } = req.body;
      //sails.log.warn(title + " " + body);
      await Posts.create({ title, body });
      //res.status(200).json({ message: "Post created successfully!" });
      return res.redirect("/home");
    } catch (error) {
      res.send(500, { error: "Database Error" });
    }
  },

  findById: async function posts(req, res) {
    try {
      const postId = req.params.id;
      const post = await Posts.findOne({ id: postId });

      if (post) {
        res.status(200).json({ post });
      } else {
        res.status(500).json({ error: "Failed to find post by id: " + postId });
      }
    } catch (error) {
      res.send(500, { error: "Database Error" });
    }
  },

  delete: async function (req, res) {
    try {
      const postId = req.params.id;
      await Posts.destroy({ id: postId });
      res.send("Finished deleting post");
    } catch (error) {
      res.send(500, { error: "Database Error" });
    }
  },
};
