import Router from 'express'; //define routes for posts
import postController from "./postController.js";

const router = new Router()
//decompose
router.post('/posts', postController.create);
router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getOne);
router.put('/posts', postController.update);
router.delete('/posts/:id', postController.delete);

export default router;