import { allProducts, singleProducts } from "./products.entity";


export default function products() {
  /**
    * GET / products
    * @description This route is used to get all products.
    * @response {Object} 200 - all products.
    */
  this.route.get('/products', allProducts(this));

  /**
    * GET / products / :id
    * @description This route is used to get single product by id.
    * @response {Object} 200 - single products by id.
    */
  this.route.get('/products/:id', singleProducts(this));


}
