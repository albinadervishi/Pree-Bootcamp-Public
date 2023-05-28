const User = require('../model/person.model');

module.exports.findAllUsers = (req, res) => {
    User.find() 
         .then((allUsers) =>{res.json({user: allUsers })})
         .catch ((err) => {res.json({ message: "Something went wrong", error: err})});
}

module.exports.getUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.json(user))
        .catch(err => response.json(err));
}

module.exports.createUser = (request, response) => {
    const { firstName, role } = request.body;
    User.exists({ firstName })
      .then(firstNameExists => {
        if (firstNameExists) {
          return Promise.reject({ errors: { firstName: { message: 'This firstname is already taken' } } });
        } else {
          return User.exists({ role: 'Teacher' });
        }
      })
      .then(teacherExists => {
        if (teacherExists) {
          return Promise.reject({ errors: { role: { message: 'A user with the role Teacher already exists' } } });
        } else {
          return User.create(request.body);
        }
      })
      .then(user => response.json(user))
      .catch(err => response.json(err));
  };

// if you want to check different variables at the same time
//   module.exports.createUser = (request, response) => {
//     const { firstName, role } = request.body;
    
//     User.exists({ $or: [{ firstName }, { role: 'Teacher' }] })
//       .then(userExists => {
//         if (userExists) {
//           return Promise.reject({ errors: { firstName: { message: 'This user already exists' } } });
//         } else {
//           return User.create(request.body);
//         }
//       })
//       .then(user => response.json(user))
//       .catch(err => response.json(err));
//   };

module.exports.updateUser = (request, response) => {
    const { id } = request.params;
    const { firstName, email, imgURL, role, belt, degree } = request.body;
  
    User.findById(id)
      .then(user => {
        if (firstName !== user.firstName) {
          User.exists({ firstName: firstName })
            .then(userExists => {
              if (userExists) {
                return response.json("This user already exists");
              }
              updateUser(user);
            })
            .catch(err => response.status(500).json(err));
        } else {
          updateUser(user);
        }
      })
      .catch(err => response.status(500).json(err));
  
    function updateUser(user) {
      user.firstName = firstName;
      user.email = email;
      user.imgURL = imgURL;
      user.role = role;
      user.belt = belt;
      user.degree = degree;
  
      user.save()
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.status(500).json(err));
    }
  };

// module.exports.updateUser = (request, response) => {
//     const { id } = request.params;
//     const { firstName, email, imgURL, role, belt, degree } = request.body;
//     User.findOneAndUpdate(
//       { _id: id, firstName: { $ne: firstName } },
//       { $set: { firstName, email, imgURL, role, belt, degree } },
//       { new: true, runValidators: true }
//     )
//       .then(updatedUser => {
//         if (updatedUser) {
//           return response.json(updatedUser);
//         } else {
//           return response.json("This user already exists");
//         }
//       })
//       .catch(err => response.json(err));
//   };

module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}