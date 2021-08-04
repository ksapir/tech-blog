const router = require('express').Router();
const {Post, User, Comment} = require('../models');

router.get('/', async (req, res) => {
    try{
        const postsData = await Post.findAll(
          {
            attributes: [
                'id',
                'title',
                'post_content',
                'date_created',
                'post_content',
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'comment_content', 'post_id'
                ]},
                {
                model: User,
                attributes: ['username']
            }]
        }
        );

    const postsDataJson = postsData.map((post) => post.get({ plain: true }));
    res.render('dashboard',{
        postsDataJson,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        console.log(err)
        rest.status(500).json(err);
    }
});

module.exports = router;