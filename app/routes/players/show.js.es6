export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('player', params.player_id);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('levels', this.store.find('level'));

    return;
  },

  actions: {
    playGame: function(currentLevel) {
      var currentPlayer = this.get('currentModel');

      this.transitionTo('currentPlayer.play', currentLevel, currentPlayer);
      return;
    }
  }
});
