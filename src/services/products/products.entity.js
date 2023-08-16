import Products from './products.schema';

const allowedQuery = new Set(['page', 'limit', 'id', 'paginate', 'role', 'category']);


/**
 * This function is used for all products.
 * @param {Object} req This is the request object.
 * @param {Object} res this is the response object
 * @returns It returns the data for success response. Otherwise it will through an error.
 */
export const allProducts = ({ db }) => async (req, res) => {
  try {
    console.log(req.query);
    const products = await db.find({ table: Products, key: { query: req.query, allowedQuery: allowedQuery } });
    if (!products) return res.status(400).send('error');
    res.status(200).send(products);
  }
  catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

/**
 * This function is used for all products.
 * @param {Object} req This is the request object.
 * @param {Object} res this is the response object
 * @returns It returns the data for success response. Otherwise it will through an error.
 */
export const singleProducts = ({ db }) => async (req, res) => {
  try {
    const products = await db.findOne({ table: Products, key: { id: req.params.id } });
    if (!products) return res.status(400).send('error');
    res.status(200).send(products);
  }
  catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

