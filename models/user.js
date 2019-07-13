var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name:{
		type: String,
		required:"Name cannot be blank!"
	},
	email:{
		type: String,
		required:"Email cannot be blank!"
	},
	phone_number:{
		type: String
	},
	adress:{
		type:String
	},
	about_me:{
		type:String 
	},
	country_id:{
		type:String
	},
	state_id:{
		type:String
	},
	city_id:{
		type:String
	}
});

var User=mongoose.model("User", userSchema);
module.exports = User;