const { User } = require('../database/models');
const { generateToken } = require('../utils/generateToken');

const doLogin = async ({ email, password }) => {
    const alreadyExist = await User.findOne({ where: { email, password } });
    if (!email || !password) {
        return { error: {
            message: 'Some required fields are missing',
          },
        status: 400 };
    }
    if (alreadyExist === null) {
        return { error: {
            message: 'Invalid fields',
          },
        status: 400 };
    }
    const token = generateToken({ email });
    return { status: 200, token: { token } };
};

module.exports = {
    doLogin,
};