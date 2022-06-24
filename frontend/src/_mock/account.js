// ----------------------------------------------------------------------
const user = JSON.parse(localStorage.getItem('user'));

const account = {
  displayName: user ? `${user.firstName} ${user.lastName}` : "Asavari Ambavane",
  email: user ? `${user.email}` : "asa@gmail.com",
  photoURL: '/static/mock-images/avatars/avatar_default.jpg',
};

export default account;
