const mongoose = require('mongoose')

// const VALUE = 200 

// const usersSchema = new mongoose.Schema({
//     userName:{
//         type: String,
//         required: true,
//         minlength: 2
//     },
//     rolse: {
//         type: String,
//         enum: ['player', 'admin'],
//         default: 'player'
//      },  
//     email:{
//         type: String,
//         required: false,
//         default: "noEmailAdrres@gmail.com"
//     },
//     staeps_acount: {
//         type: Number,
//         // defaultValue: (Math.random() * (200)).floor(),
//         default: Math.floor(Math.random() * (50))
//     },
//     goal_number:{
//         type: Number,
//         default: Math.floor((Math.random() * (99)))
//     },
//     isWinner:{
//         type: Boolean,
//         required: false,
//         default: false
//     }
//     // active_steps:{
//     //     type: Number
//     // }
// })


const usersSchema = new mongoose.Schema({
    userName: { type: String, required: true, minlength: 2 },
    role: { type: String, enum: ['player', 'admin'], default: 'player' },
    email: { type: String, default: "noEmailAdrres@gmail.com" },
    // Remove steps_acount and goal_number from user, handle per game!
    isWinner: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', usersSchema)