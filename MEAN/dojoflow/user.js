var mongoose = require('mongoose'),
    UserSchema = new mongoose.Schema({
        login: String,
        id: Number,
        avatar_url: String,
        url: String,
        html_url: String,
        followers_url: String,
        following_url: String,
        gists_url: String,
        starred_url: String,
        subscriptions_url: String,
        organizations_url: String,
        repos_url: String,
        events_url: String,
        received_events_url: String,
        type: String,
        site_admin: Boolean,
        name: String,
        company: String,
        blog: String,
        location: String,
        email: String,
        hireable: Boolean,
        bio: String,
        public_repos: Number,
        public_gists: Number,
        followers: Number,
        following: Number,
        created_at: Date,
        updated_at: Date,
        ninja_stars: {type: Number, default: 0},
        favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
        questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
        answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answers'}],
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
    });

    UserSchema.statics.findOrCreate = function findOrCreate(profile, cb){
        this.findOne({ id : profile.id},function(err,result){
            if(!result){
                var newuser = new User(profile);
                newuser.save(cb);
            }else{
                cb(err,result);
            }
        });
    };

    mongoose.model('User', UserSchema);
