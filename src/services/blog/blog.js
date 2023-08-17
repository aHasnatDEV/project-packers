import { allBlog, singleBlog } from "./blog.entity";


export default function blog() {

  /**
  * GET / blog
  * @description This route is used to get all blog.
  * @response {Object} 200 - all blog.
  */
  this.route.get('/blog', allBlog(this));

  /**
  * GET / blog/:id
  * @description This route is used to get all blog.
  * @response {Object} 200 - all blog.
  */
  this.route.get('/blog/:id', singleBlog(this));

}
