module.exports = (express, app) => {
    const controller = require("../controllers/post.controller.js");
    const router = express.Router();
   
    // Create post
    router.post("/", controller.create);

    router.post("/upload-image", controller.uploadImage);

    // Get all posts
    router.post("/allposts", controller.all);

    router.get("/replies", controller.allReplies);

    router.post("/getbyid/:id", controller.getPostById);

    router.put("/update", controller.updatePost);

    router.post("/delete", controller.deletePost);

     // Add route to server
     app.use("/api/posts", router);
}