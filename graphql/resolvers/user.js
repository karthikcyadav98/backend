const usersModel = require("../../models/users");

const userResolver = {
  createUser: async (parent, args, context, info) => {
    console.log("args", args);
    var newUser = new usersModel({
      name: args.name,
      age: args.age,
      phoneNumber: args.phoneNumber,
      status: args.status,
      email: args.email,
      token: args.token
    });
    try {
      let response = await newUser.save();
      return response;
    } catch (error) {
      return error;
    }
    //with promise
    // return new Promise((resolve, reject) => {
    //   newUser.save(function(err, user) {
    //     if (user) {
    //       resolve(user);
    //       return newUser;
    //     }
    //     if (err) reject(err);
    //   });
    // });
  },
  getAllUser: async (parent, args, context, info) => {
    console.log("ss");
    try {
      let response = await usersModel.find({});
      console.log("ALL user ", response);
      return response;
    } catch (error) {
      return error;
    }
    //with promise
    // return new Promise((resolve, reject) => {
    //   usersModel.find({}, function(err, user) {
    //     if (user) {
    //       resolve(user);
    //     }
    //     if (err) reject(err);
    //   });
    // });
  }
};

module.exports = userResolver;
