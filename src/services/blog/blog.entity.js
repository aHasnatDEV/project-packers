import Blogs from './blog.schema';

const allowedQuery = new Set(['page', 'limit', 'id', 'paginate']);

/**
 * This function is used for all blog.
 * @param {Object} req This is the request object.
 * @param {Object} res this is the response object
 * @returns It returns the data for success response. Otherwise it will through an error.
 */
export const allBlog = ({ db }) => async (req, res) => {
  try {
    console.log(req.query);
    const blog = await db.find({ table: Blogs, key: { query: req.query, allowedQuery: allowedQuery } });
    if (!blog) return res.status(400).send('error');
    res.status(200).send(blog);
  }
  catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

/**
 * This function is used for all blog.
 * @param {Object} req This is the request object.
 * @param {Object} res this is the response object
 * @returns It returns the data for success response. Otherwise it will through an error.
 */
export const singleBlog = ({ db }) => async (req, res) => {
  try {
    const blog = await db.findOne({ table: Blogs, key: { id: req.params.id } });
    if (!blog) return res.status(400).send('error');
    res.status(200).send(blog);
  }
  catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};
