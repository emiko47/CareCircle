import { register } from './services/register.js';
import { login } from './services/login.js';
import { verify } from './services/verify.js';
import { buildResponse } from './utils/util.js';

const healthPath = '/health'
const registerPath = '/register';
const loginPath = '/login';
const verifyPath = '/verify';

export async function handler(event) {
    console.log('Request Event: ', event);
    let response;
    switch (true) {
        case event.httpMethod == 'GET' && event.path === healthPath:
            response = buildResponse(200, { message: 'Healthy' });
            break;
        case event.httpMethod == 'POST' && event.path === registerPath:
            const registerBody = JSON.parse(event.body);
            response = await register(registerBody);
            break;
        case event.httpMethod == 'POST' && event.path === loginPath:
            const loginBody = JSON.parse(event.body);
            response = await login(loginBody);
            break;
        case event.httpMethod == 'POST' && event.path === verifyPath:
            const verifyBody = JSON.parse(event.body);
            response = verify(verifyBody);
            break;
        default:
            response = buildResponse(404, '404 Not Found');
    }
    return response;
}
