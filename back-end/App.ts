require('typescript-require')
var backend = require('./backend')
var restify = require('restify')

var server = restify.createServer();
var env = new backend.backend(3);

server.put(addPoints);
server.del(removePoints);
server.post("users/:username/:password",login) //signup + login
server.get("/points", getPoints);

server.listen(8080,function() {
    console.log('%s listening at %s', server.name, server.url);
});

function addPoints(req,res,next)
{
    try
    {
        let num = env.addPoints();

        res.json(200,{result:num});
        return next();
    }
    catch(e)
    {
        res.json(400,{error:e});
        return next();
    }
}

function removePoints(req,res,next)
{
    try
    {
        let points = env.removePoints();
        res.json(200,{result:points});
        return next();
    }
    catch (e)
    {
        res.json(400,{error:e});
        return next();
    }
}

function signUp(req,res,next)
{
    try
    {
        let results = env.signUp(req.params.username,req.params.password)
        res.json(200,{result:results});
        return next()
    }
    catch (e)
    {
        res.json(400,{error:e})
        return next();
    }
}

function login(req,res,next)
{
    try
    {
        let user = req.params.username;
        let pass = req.params.password;
        let resp = env.login(user,pass);
        res.json(200,{result:resp});
        return next();
    } catch (e)
    {
        res.json(400,{error:e});
        return next();
    }
}

function getPoints(req,res,next)
{
    try
    {
        res.json(200,{result:env.getPoints()});
    }
    catch (e)
    {
        res.json(400,{error:e});
        return next();
    }
}