export function getUser() {
    const user = sessionStorage.getItem('user');
    if (user === 'undefined' || user === null || !user) {
        return null;
    } else {
        return JSON.parse(user);
    }
}
export function getToken() {
    return sessionStorage.getItem('token');
}
export function setUserSession(user, token) {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', token);
}
export function removeUserSession() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
}