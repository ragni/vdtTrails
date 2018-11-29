import Controller from '@ember/controller';
import {LoginValidator} from '../../validators/login';
import EmberObject from '@ember/object';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default Controller.extend({
    init(){
        this._super(...arguments);
        const createCaseModel = EmberObject.extend({});
        // debugger
    this.changeset = new Changeset(createCaseModel, lookupValidator(LoginValidator), LoginValidator);  
    },
    actions: {
        signIn: function(changeset) {
            changeset.validate();
            console.log(changeset);
            if(changeset.get('isValid')){
                console.log('Redirecting');
                console.log(this.changeset.get('email'));
                this.transitionToRoute('home.welcome',{id: 'welcome', email: this.changeset.get('email')});
            }else {console.log("Not a valid user");}
        }
    }
});