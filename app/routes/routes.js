import Ember from 'ember';
import config from'./config/environement'

const Router =Ember.Router.extend({
	location: config.locationType

});

Router.map(function(){
	
});	
export default Router;