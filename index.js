const express=require('express');
const cookieParser=require('cookie-parser');
const port=process.env.PORT || 8000;
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');



const sassMiddleware=require('node-sass-middleware');
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}))
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('assets'));
app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routes'));
//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        consolr.log(`error is : ${err}`);
        return;
    }
    console.log(`port is running on port no.: ${port}`);




})