import Category from './category.schema';

const allowedQuery = new Set(['id']);

/**
 * This function is used for all category.
 * @param {Object} req This is the request object.
 * @param {Object} res this is the response object
 * @returns It returns the data for success response. Otherwise it will through an error.
 */
export const allCategory = ({ db }) => async (req, res) => {
  try {
    console.log(req.query);
    const category = await db.find({ table: Category, key: { query: req.query, allowedQuery: allowedQuery } });
    if (!category) return res.status(400).send('error');
    res.status(200).send(category);
  }
  catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};
