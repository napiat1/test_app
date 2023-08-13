import Post from "./post.js";
import postService from "./postService.js";
class postController {
    async create(req, res){
        try {
            console.log(req.files)
            const post = await postService.create(req.body) //use Service Method and apply data from request body
            res.json(post)
        } catch(e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req, res){
        try {
            const posts = await postService.getAll();
            return res.json(posts);
        } catch (e){
            res.status(500).json(e)
        }
    }
    async getOne(req, res){
        try {
            const post = await postService.getOne(req.params.id)
            return res.json(post)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async update(req, res){
        try {
                const updatedPost = await postService.update(req.body);
                return res.json(updatedPost);
            } catch (e){
            res.status(500).json(e)
        }
    }
    async delete(req, res){
        try {
            const postDelete = await postService.delete(req.params.id); // delete by id from req params
            return res.json(postDelete);
        } catch (e){
            res.status(500).json(e)
        }
    }

}
export default new postController();