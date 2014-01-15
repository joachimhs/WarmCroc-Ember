LDBB.Router.map(function() {
    this.resource('buckets', {path: "/"}, function() {
        this.resource('bucket', {path: "/buckets/:bucket_id"}, function() {

        })
    });
});