import Post from "./post.js";

class postService { //that class define business-logic, main tasks/deals
    async create(post, picture) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID not defined')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) { //in case of lost id
            throw new Error('ID not defined')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true}) //update the post by id, post itself, and return updated version of it
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID not defined')
        }
        const postDelete = await Post.findByIdAndDelete(id);
        return postDelete;
    }
};
export default new postService();