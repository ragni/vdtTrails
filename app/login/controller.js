import Controller from '@ember/controller';
import {LoginValidator} from '../validators/login';
import EmberObject from '@ember/object';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default Controller.extend({
    init(){
        this._super(...arguments);
        const createCaseModel = EmberObject.extend({});
        this.changeset = new Changeset(createCaseModel, lookupValidator(LoginValidator), LoginValidator);  
    },
    actions: {
        loginAction: function(changeset) {
            changeset.validate();
            console.log(changeset);
            if(changeset.get('isValid')){
                this.transitionToRoute('home');
            }else {console.log("Not a valid user");}
        }
    }
});
