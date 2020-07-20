module.exports = {
  friendlyName: "Create",
  description: "Create post.",
  inputs: {
    title: {
      description: "Title of post object",
      type: "string",
      required: true,
    },
    body: {
      type: "string",
      required: true,
    },
  },
  exits: {},
  fn: async function ({ title, body }) {
    // console.log("We are now inside of post/create action");
    await Posts.create({ title, body });
    return;
  },
};
