/* pre initialize the project with command -> npm init-y */

//JSON
/* add   "type": "module",  string as it needs for imports and exports
"start": "node index.js"   server name start, will run file index.js by node.js environment
"express": "^4.18.2"  pre-install backend framework 'Express' -> npm install Express */
//npm i -D nodemon (server auto-restart after code-changes), the D flag define as app is installed as Def dependence
//json -> "dev":"nodemon index.js"

//index.js contains main application, and index.js starts by server -> npm run dev
//MongoDB - build in cloud - npm install mongoose -> simplified DB connection tool from mongo
//install file upload module(middleware) -> npm i express-fileupload

import express from 'express'; //import/attach Express framework to project to be used for whole project
import mongoose from 'mongoose';
import router from "./router.js";
import fileUpload from 'express-fileupload';

const PORT = 4000; //define the server access port, the port must be free, not in use with other project
const DB_URL = `mongodb+srv://napiat1:trambler33@cluster0.vnsxfw3.mongodb.net/?retryWrites=true&w=majority`; //MongoDB connection url
const app = express() // define the main app

app.use(express.json()) //by default express don't recognise json format, we have to define it, it is necessary for req (post queries from browser)
app.use('/api', router) //router registration, endpoint
app.use(fileUpload({})) //'file upload' module registration
/*app.post("/", async (req,res)=> {
    try {
    const {author, title, content, image} = req.body //console.log(req.body) //console.log(req.query) --- browser: http://localhost:4000/?test=123&query=asdfg&third=lkjhg -> <console> {test: '123', query: 'asdfg', third: 'lkjhg'}
    const post = await Post.create(req.body)
    res.json(post)
    } catch(e) {
        res.status(500).json(e.message)
    }
}) */
//define the run function of our app, in case of error, log the message
async function startMyApp (){
    try {
        await mongoose.connect(DB_URL /*{useUnifiedTopology: true, useNewUrlParser: true}*/)
        app.listen(PORT, ()=> console.log('server started with port number '+ PORT));
    } catch (e) {
        console.log(e.message)
    }

}
startMyApp() // run our app