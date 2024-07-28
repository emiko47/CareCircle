import { DynamoDBClient, GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { buildResponse } from '../utils/util.js';
import bcrypt from 'bcryptjs';
const { hashSync } = bcrypt;

const ddb = new DynamoDBClient({ region: 'us-east-1' });
const userTable = 'CareCircle';

async function register(userInfo) {
    const { email, password, name, username } = userInfo;
    if (!email || !password || !name || !username) {
        return buildResponse(401, { message: 'Missing required fields' });
    }

    const dynamoUser = await getUser(username.toLowerCase().trim());
    if (dynamoUser && dynamoUser.username) {
        return buildResponse(401, { message: 'Username already exists! Please choose a different username.' });
    }

    const encryptedPassword = hashSync(password.trim(), 10);
    const user = {
        email,
        password: encryptedPassword,
        name,
        username: username.toLowerCase().trim(),
    };

    const saveUserResponse = await saveUser(user);
    if (!saveUserResponse) {
        return buildResponse(503, { message: 'Server Error. Error saving user. Please try again later' });
    }

    return buildResponse(200, { username, message: 'User registered successfully.' });
}

async function getUser(username) {
    const params = {
        TableName: userTable,
        Key: {
            username: { S: username }
        }
    };

    try {
        const data = await ddb.send(new GetItemCommand(params));
        if (!data.Item) {
            return null;
        }
        return {
            email: data.Item.email.S,
            password: data.Item.password.S,
            name: data.Item.name.S,
            username: data.Item.username.S,
        };
    } catch (error) {
        console.error('There is an error in getUser: ', error);
        return null;
    }
}

async function saveUser(user) {
    const params = {
        TableName: userTable,
        Item: {
            email: { S: user.email },
            password: { S: user.password },
            name: { S: user.name },
            username: { S: user.username }
        }
    };

    try {
        await ddb.send(new PutItemCommand(params));
        return true;
    } catch (error) {
        console.error('There is an error in saveUser: ', error);
        return false;
    }
}

const _register = register;
export { _register as register };
