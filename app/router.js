import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', function() {
    this.route('login-page');
  });

  this.route('home', function() {
    this.route('welcome', {path: '/:id'});
  });
});

export default Router;
