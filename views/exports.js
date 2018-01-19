function render_page(req, res, user_name) {
    var context = { user : user_name,
                    times : req.session.views,
                    login_link : authorizationUri };

    var htmlOutputString = index_hbs.run(context);
    res.send(htmlOutputString);    
}

function compile_handlebars(name){
    template = {};
    template['run'] = hbs.Handlebars.compile(read_handlebars_sync(name));
    return template;
}
function read_handlebars_sync(name){
    return fs.readFileSync(__dirname + "/views/" + name + ".hbs").toString();
}
module.exports = {};
module.exports.render_page = render_page;
module.exports.compile_handlebars = compile_handlebars;