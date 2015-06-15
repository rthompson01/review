var $ = require ('jquery'),
	_ = require ('underscore'),
	Backbone = require ('backbone');

Backbone.$ = $



var ApplicationRouter = Backbone.Router.extend({

	initialize: function() {
		console.log('app is routing')
		Backbone.history.start();
	},

	routes: {
		'*default': 'showHome'
	},

	showHome: function() {
		document.querySelector('container').innerHTML = "<h1>My Application</h1>"
	},

})

export default ApplicationRouter