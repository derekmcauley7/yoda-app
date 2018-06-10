import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
model: function() {
    var url =  'http://api.funtranslations.com/translate/yoda.json?text=' + sessionStorage.getItem("SessionName");
    return Ember.$.getJSON(url);
},
actions: {
  goBack: function(){
    this.transitionTo('yoda');
  }
}
// model for testing
// model: function() {
//   return [{
//   success: {
//       "total": 1
//   },
//   contents: {
//       translated: "Lost,  master obiwan has",
//       "text": "Master Obiwan has lost a planet",
//       "translation": "yoda"
//   }
// }]
// }
});
