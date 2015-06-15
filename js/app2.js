var $ = require ('jquery'),
	_ = require ('underscore'),
	Backbone = require ('backbone');

Backbone.$ = $

		

var ApplicationRouter = Backbone.Router.extend({

	initialize: function() {
//		console.log('app is routing')
		this.politiciansCollection = new LegislatorsCollection();
		this.homeView = new HomePageView();
		console.log('router started')
		Backbone.history.start();
	},

	routes: {
		'*default': 'showHome'
	},

	showHome: function() {
		this.homeView.render()

		this.politiciansCollection.fetch().then(function(responseData) {
			console.log(responseData)
		})
	}
})

var HomePageView = Backbone.View.extend({
		el: '.container',

		template: function(){
			return `
					<h1>Backbone Explortions</h1>`
		},
			render: function(){
				this.el.innerHTML = this.template()
		},
		
})
var Legislator = Backbone.Model.extend({
	
})
var LegislatorsCollection = Backbone.Collection.extend({
	
	model: Legislator,

	key:'7ba96d266cc84b168fab4d878d9aa141',

	url: function(){
		return `http://congress.api.sunlightfoundation.com/legislators?apikey=${this.key}`
	}
})


export default ApplicationRouter