import Route from '@ember/routing/route';

export default Route.extend({
    function () {
        console.log(changeset.get('email'));
        console.log('YEppp');
        
    },

    model(params) {
        console.log(params);
    }
});
