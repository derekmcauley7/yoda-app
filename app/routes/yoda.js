import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    translateClicked: function(comment){
      comment = comment.replace(/ /g,"%20");
      sessionStorage.SessionName = comment;
      this.transitionTo('yoda-answer');
    }
  }
});
