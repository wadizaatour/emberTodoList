import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.route('todoL', function(){
		this.route('todo_list',{path:'/:id'})
	});
	this.route('new', { path: '/new/:id' });
});

export default Router;
