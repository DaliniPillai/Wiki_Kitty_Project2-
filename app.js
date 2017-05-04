//setting up the dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

//importing routes
const kittyRoutes = require('./routes/kittyRoutes');

//setting up port

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);

});
//setting up views 
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//setting up static file
app.use('/static', express.static(path.join(__dirname, 'public')));

//setting up logger 
app.use(logger('dev'));

//setting up body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// setting up routes
app.get('/', function(req,res) {
  res.render('index', {
    message: 'Wiki Kitty',
    documentTitle: 'Wiki Kitty',
    subTitle: 'Find your Meow!',
    showMore: true,
  });
});
app.use('/kitty', kittyRoutes);

//error handeling 
app.get('*', function(req, res) {
  res.status(404).send({message: 'oops! Not found.'});

});

