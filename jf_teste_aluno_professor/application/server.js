const app = require('./app');
const { sequelize } = require('./models')

sequelize.sync().then( () => {
    app.listen(3000, () => console.log('server running on port 3000'))
})
