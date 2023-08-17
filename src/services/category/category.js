import { allCategory } from "./category.entity";


export default function category() {

  /**
  * GET / products
  * @description This route is used to get all products.
  * @response {Object} 200 - all products.
  */
  this.route.get('/category', allCategory(this));

}
