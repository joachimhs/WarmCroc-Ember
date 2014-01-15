LDBB.BucketRoute = Ember.Route.extend({
    model: function(bucket) {
        return this.store.find('bucket', bucket.bucket_id);
    }
});