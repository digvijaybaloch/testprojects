const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refresToken, profile, done) => {
			console.log(profile);
			//course me ye tha but ye kaam nahi kr raha tha new User({ googleId: profile.id }).save();
			const instance = new User({ googleId: profile.id });
			instance.save(function(err) {
				if (err) return handleError(err);
				// saved!
			});
			console.log(instance);
		}
	)
);
