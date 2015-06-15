var $ = require ('jquery'),
	_ = require ('underscore'),
	Backbone = require ('backbone');

Backbone.$ = $

		

var ApplicationRouter = Backbone.Router.extend({

	initialize: function() {
//		console.log('app is routing')
		this.politiciansCollection = new LegislatorsCollection();
		this.homeView = new HomePageView({vCollection: this.politiciansCollection});
		console.log('router started')
		Backbone.history.start();
	},

	routes: {
		'*default': 'showHome'
	},

	showHome: function() {

		this.politiciansCollection.fetch().then(function(responseData) {
			console.log(responseData)

			console.log(this.politiciansCollection)
		this.homeView.vCollection = this.politiciansCollection
		this.homeView.render();

		}.bind(this))
	}
})

var HomePageView = Backbone.View.extend({
		el: '.container',

		template: function(){
			var oneGuy = this.vCollection.models[0]
			return `
					<h1>Backbone Explortions</h1>
					<h1>Joining a Fetched Collection a View</h1>
					<hr>
					<h3>Some Politician from the collection</h3>
					<p>${oneGuy.get('first_name')}${oneGuy.get('last_name')}::${oneGuy.get('chamber')}::${oneGuy.get('party')}`
					
		},
			render: function(){
				this.el.innerHTML = this.template()
		}
		
})
var Legislator = Backbone.Model.extend({
	
})
var LegislatorsCollection = Backbone.Collection.extend({
	
	model: Legislator,

	key:'7ba96d266cc84b168fab4d878d9aa141',

	url: function(){
		return `http://congress.api.sunlightfoundation.com/legislators?apikey=${this.key}`	
	},

	parse: function(sunlightResponse){
		return sunlightResponse.results
	}
})



export default ApplicationRouter