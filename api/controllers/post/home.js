module.exports = async function (req, res) {
  const allPosts = await Posts.find({});
  res.view("pages/home", { allPosts });
};
