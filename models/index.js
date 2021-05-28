const User = require('./User');
const Product = require('./product');
const Messages = require('./messeges')

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

// Messages.belongsTo(User, {

// })

module.exports = { User, Product, Messages };