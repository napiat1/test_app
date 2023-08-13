//define data model
import mongoose from "mongoose";
//create schema, type of fields will be on our post
const Post= new mongoose.Schema({
    author: {type: String, required: true}, //name of author who made this post, it must present
    title: {type: String, required: true}, //title must be present
    content: {type: String, required: true}, //content of post req must be as well
    image: {type: String} //will keep in DB image url, in case if it will be provided
});
export default mongoose.model('Post', Post) //export our new model, name it with 'Post'