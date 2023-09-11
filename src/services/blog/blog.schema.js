import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const schema = new Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    img: { type: String, required: true },
    date: { type: String, required: true }
  },
  blogContent: {
    title: { type: String, required: true },
    body: { type: String, required: true },
  }
}, { timestamps: true });

schema.plugin(paginate);
schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  return JSON.parse(JSON.stringify(obj).replace(/_id/g, 'id'));
};

export default model('Blog', schema);
