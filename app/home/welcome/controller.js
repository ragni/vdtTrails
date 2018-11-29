import Controller from '@ember/controller';
import {LoginValidator} from '../../validators/login';
import EmberObject from '@ember/object';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default Controller.extend({
    user: null,
    init(){
        this._super(...arguments);
      },
    actions: {
        signIn: function(changeset) {
            changeset.validate();
            console.log(changeset);
            if(changeset.get('isValid')){
                console.log('Redirecting');
                console.log(this.changeset.get('email'));
                this.transitionToRoute('home.welcome');
            }else {console.log("Not a valid user");}
        }
    }
});