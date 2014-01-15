LDBB.BucketsController = Ember.ArrayController.extend({
    actions: {
        addBucket: function() {
            this.set('showAddBucket', true);
        },

        saveBucket: function() {
            var bucketName = this.get('newBucketName');

            var bucket = this.store.createRecord('bucket', {
                 id: bucketName
            });

            bucket.save().then(function(data) {
                this.set('newBucketName', null);
                this.set('showAddBucket', false);
            }, function(data) {
                alert('Persist failed');
            });


        },

        cancelBucket: function() {
            this.set('newBucketName', null);
            this.set('showAddBucket', false);
        }
    }
});