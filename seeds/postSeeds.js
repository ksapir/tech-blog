const { Post } = require('../models');

const postData = [
    {
        title: "Software Developrs In Demand!",
        post_content: "Software developers are now higher in demand than ever before. Be sure to snag your spot quick",
        user_id: 2
    },
    {
        title: "Recipe Finder for Special Recipes Now Avaiable!",
        post_content: "The Recipe Finder application has just been released and now all those hungry people who follow special diets can now find recipes that suits their needs.",
        user_id: 1
    },
    {
        title: "Amazon Stocks Takes A Plummet",
        post_content: "Amazon stocks take a major dip as they get outsourced by their small business competitor Karenzon.",
        user_id: 3
    },
    {
        title: "Movie Theaters Hiring Software Developers",
        post_content: "Since the start of the pandemic, movie theaters have been searching for ways to get people to comt out and watch movies. Their answer? Do what everyone else is doing, hire software developers!",
        user_id: 5
    },
    {
        title: "Karen Pion, on the rise",
        post_content: "Software developer Karen Pion takes the tech inudstry on with leading ideas!",
        user_id: 4
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts