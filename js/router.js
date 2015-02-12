Portfolio.Router.map(function(){
  this.route ("Resume");
  this.resource("Portfolio", function(){
    this.route ('project', {path:'/:project_id'})
  });
});
