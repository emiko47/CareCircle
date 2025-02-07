import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { buildResponse } from '../utils/util.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/auth.js';
const { compareSync } = bcrypt;

const ddbClient = new DynamoDBClient({ region: 'us-east-1' });
const userTable = 'CareCircle';

async function login(user) {
    const username = user.username.toLowerCase().trim();
    const password = user.password;
    if (!username || !password) {
        return buildResponse(401, { message: 'Username and Password are required' });
    }

    const dynamoUser = await getUser(username);
    if (!dynamoUser || !dynamoUser.username) {
        return buildResponse(403, { message: 'User does not exist' });
    }

    const isValid = compareSync(password, dynamoUser.password);
    if (!isValid) {
        return buildResponse(403, { message: 'Password is incorrect' });
    }

    const userInfo = {
        username: dynamoUser.username,
        name: dynamoUser.name,
        email: dynamoUser.email
    };

    const token = generateToken(userInfo);
    const response = {
        user: userInfo,
        token: token
    };

    return buildResponse(200, response);
}

async function getUser(username) {
    const params = {
        TableName: userTable,
        Key: {
            username: { S: username }
        }
    };

    try {
        const data = await ddbClient.send(new GetItemCommand(params));
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

const _login = login;
export { _login as login };
