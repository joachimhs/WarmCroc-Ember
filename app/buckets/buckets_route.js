LDBB.BucketsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('bucket');
    }
});