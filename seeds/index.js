const sequelize = requite('../config/connection');

const seedUsers = require('./userSeeds');
const seedPosts = requite('./postSeeds');
const seedComments = rquite('./commentSeeds');

const seedEverything = async () => {
    await sequelize.sync({ force: true });
    console.log("\n=== DATABASE SYNCED ===\n");

    await seedUsers();
    console.log('\n=== USERS SEEDED ===\n');

    await seedPosts();
    console.log('\n=== POSTS SEEDED ===\n');

    await seedComments();
    console.log('\n=== COMMENTS SEEDED ===\n');

    process.exit(0)
};

seedEverything();