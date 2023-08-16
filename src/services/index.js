import demo from './demo/demo';
import user from './user/user';
import products from './products/products';
import category from '../category/category';

export const services = (app) => {
  app.configure(demo);
  app.configure(user);
  app.configure(products);
  app.configure(category);
};
