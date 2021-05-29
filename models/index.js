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

Messages.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Messages, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.hasMany(Messages, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

Messages.belongsTo(Product, {
  foreignKey: 'product_id'
})

module.exports = { User, Product, Messages };