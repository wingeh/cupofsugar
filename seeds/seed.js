const sequelize = require('../config/connection');
const { User, Product } = require('../models');
const userData = require('./seedUser.json');
const postData = require('./seedPost.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
   await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    await Product.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
      });
    
    process.exit(0);
  };
seedDatabase();