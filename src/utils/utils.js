export const isAdmin = () => {
    return localStorage.getItem('uid') === 'A0101D01';
};

export const getUsername = () => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    return name;
};

export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('user'));
}
