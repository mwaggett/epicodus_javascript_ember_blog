import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost(post) {
      var today = new Date();
      var params = {
        title: this.get('title'),
        text: this.get('text'),
        username: this.get('username'),
        date_added: today.toString()
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
