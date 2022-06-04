const { User } = require('../database/models');
const { generateToken } = require('../utils/generateToken');

const TESTEMAIL = /\S+@\S+\.\S+/;

const createUser = async (body) => {
    const { displayName, email, password, image } = body;
    if (displayName.length < 8) {
        return { status: 400,
            error: { message: '"displayName" length must be at least 8 characters long' } };
    }
    if (!TESTEMAIL.test(email)) {
        return { status: 400, error: { message: '"email" must be a valid email' } };
    }
    if (password.length < 6) {
        return { status: 400,
            error: { message: '"password" length must be at least 6 characters long' } };
    }
    const alreadyExistEmail = await User.findOne({ where: { email } });
    if (alreadyExistEmail) return { status: 409, error: { message: 'User already registered' } };
    await User.create({ displayName, email, password, image });
    const token = generateToken({ email });
    return { status: 201, token: { token } };
};

const findAllUsers = async () => {
    const allUsers = await User.findAll();
    const withoutPassword = allUsers.map((user) => {
        const { password, ...userNoPassword } = user.dataValues;
        return userNoPassword;
    });
    return withoutPassword;
};

const findById = async (id) => {
    const userById = await User.findOne({ where: { id } });
    if (userById === null) return null;
    const { password, ...userNoPassword } = userById.dataValues;
    return userNoPassword;
};

module.exports = {
    createUser,
    findAllUsers,
    findById,
};