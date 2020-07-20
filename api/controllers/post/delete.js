module.exports = {
  friendlyName: "Delete",
  description: "Delete post.",
  inputs: {
    id: {
      type: "string",
      required: true,
    },
  },
  exits: {
    invalid: {
      description: "This was an invalid post to delete",
    },
  },
  fn: async function ({ id }) {
    //console.log('We are in delete post action')
    //console.log("trying to delete post with id: " + id)

    const record = await Posts.destroy({ id }).fetch();
    //console.log(record)
    if (record.length == 0) {
      throw { invalid: { error: "Record does not exist" } };
    }

    return "Finished deleting post";
  },
};
