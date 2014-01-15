var LDBB = Ember.Application.create();

DS.RESTAdapter.reopen({
    namespace: "json"
});

LDBB.Store = DS.Store.extend({
    adapter: "DS.RESTAdapter"
})