const User = require('../models/User');
// const bcrypt = require('bcrypt')


const getAllUsers = async (req, res) => {
    const users = await User.find().lean()
    if (!users) {
        return res.status(404).json({ message: 'No user found' })
    }
    res.status(200).json(users);
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'User ID is required' })
    }
    const user = await User.findById(id).lean()
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(user);
}


const createUser = async (req, res) => {
    const { userName, role, email, steps_acount, goal_number, isWinner } = req.body;
    if (!userName) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // const existingUser = await User.findOne({ username }).lean()
    // if (existingUser) {
    //     return res.status(409).json({ message: 'Username already exists' })
    // }
    // const hashPwd = await bcrypt.hash(password, 10)
    const user = await User.create({ userName, role, email, steps_acount, goal_number, isWinner })
    if (!user) {
        return res.status(500).json({ message: 'Error creating user' })
    }
    res.status(201).json(user);
}

const createUsersPair = async (req, res) => {
    const { players } = req.body; // players: [name1, name2]
    if (!players || players.length !== 2) {
        return res.status(400).json({ message: 'Two player names required.' });
    }
    try {
        const userDocs = await Promise.all(players.map(name => User.create({ userName: name })));
        res.status(201).json({ players: userDocs });
    } catch (err) {
        res.status(500).json({ message: 'Error creating users', error: err });
    }
};

const updateUser = async (req, res) => {
    const { userName, role, email, steps_acount, goal_number, isWinner } = req.body;
    if (!userName) {
        return res.status(400).json({ message: 'User username is required' })
    }
    const user = await User.findById(id)
    if (!user) {
        return res.status(404).json({ message: ' not found User to update' })
    }
    const existsingUser = await User.findOne({ username })
    if (!existsingUser) {
        user.userName = userName
    }
    // if (password) {
    //     user.password = await bcrypt.hash(password, 10);
    // }
    // if (email) {
    //     user.email = email
    // }
    // if (rolse) {
    //     user.rolse = rolse
    // }
    const updatedUser = await user.save()
    res.status(200).json(user);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'User ID is required' })
    }
    const user = await User.findByIdAndDelete(id)
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json({ message: 'User deleted successfully' });
}

module.exports = { getAllUsers, getUserById, createUser, createUsersPair, updateUser, deleteUser }