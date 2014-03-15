module.exports = function(app) {
  
  /* Optionally include this to use this alternative template when wanting to create your own header and footer
  app.set("view options", {
    layout: "layout/layout-skills"
  });
  */
  
  app.get('/:page', function(req, res){
    res.render(req.params.page, {current_page: req.params.page});
  });
  app.get('/', function(req, res){
    res.render("index", {current_page: 'home', data: "some data passed in using res.locals"});
  });
};
