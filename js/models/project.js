Portfolio.Project = DS.Model.extend({
  name: DS.attr('string'),
  gitRepo: DS.attr('string'),
  appLink: DS.attr('string')
})

Portfolio.Project.FIXTURES = [
{id: 1, name: 'GovTracker', gitRepo: "https://github.com/Michaeldean147/GovTrackerApp", appLink: "https://still-hamlet-6696.herokuapp.com/"},
{id: 2, name: 'Movie Search', gitRepo: "https://github.com/Michaeldean147/OMDB_Single_Page_App", appLink:"https://github.com/Michaeldean147/OMDB_Single_Page_App"},
{id: 3, name: "Drums N' Loops", gitRepo: "https://github.com/Michaeldean147/Drums-N-Loops", appLink: "http://michaeldean147.github.io/Drums-N-Loops/" },
{id: 4, name: "gCamp", gitRepo: "https://github.com/Michaeldean147/gCamp", appLink: "https://lit-brook-2436.herokuapp.com/"},
{id: 5, name: "ChowSpana", gitRepo: "https://github.com/Michaeldean147/ChowSpana", appLink: "https://pacific-caverns-6821.herokuapp.com/"}
]
