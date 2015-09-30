import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updateFormShow() {
      this.set('updatePostForm', true);
    },
    updatePost(post) {
      var today = new Date();
      var params = {
        title: this.get('title'),
        text: this.get('text'),
        username: this.get('username'),
        date_added: today.toString()
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
