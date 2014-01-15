LDBB.Bucket = DS.Model.extend({
    keys: DS.hasMany('key', {async: true})
});