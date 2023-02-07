const passport=require("passport");

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID="437056672159-me12q9n2u6jdrnmj4ec065khq4cgaiku.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET="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"

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
     return done(null, profile);
  }
));

passport.serializeUser(function(user,done){
    done(null,user);
})

passport.deserializeUser(function(user,done){
    done(null,user)
})