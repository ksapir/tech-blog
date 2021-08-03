const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Get all posts
router.get('/', async (req,res) => {
    try{
        const postData = await Post.findAll();
        const postDataJson = postData.map((post) => 
            post.get({ plain: true })
        );
        res.status(200).json(postDataJson)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// Get post by ID
router.get('/:id', async (req,res) => {
    try{
        const postData = await Post.findByPk(req.params.id);

            if (!postData) {
                res.status(404).json({ message: 'No post found with that id!' });
                return;
              }

            res.status(200).json(postData)
    } catch (err){
        console.log(err);
        res.status(500),json(err);
    }
})

module.exports = router;