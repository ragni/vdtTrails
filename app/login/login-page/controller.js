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
                if(true)
                {
                this.transitionToRoute('login.welcome');
                }
                else
                {
                    alert('Invalid Email or Password.');
                }
            }else {console.log("Not a valid user");}
        }
    }
});