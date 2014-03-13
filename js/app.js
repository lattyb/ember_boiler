App = Ember.Application.create();

App.Router.map(function() {
	this.resource('about');
	this.resource('posts');
})

var posts = [{
	id: '1',
	title: "Wicked"
}]

$(document).foundation();

var mainIMage {};

mainImage.background = "";

mainImage.