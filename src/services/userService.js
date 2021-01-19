
const sessionKey = 'nextu-user';

const userService = {
  login: async (email, password) => {
    const user = await (await fetch('https://atabord-nextu-final.firebaseio.com/user/.json')).json();
    if(email !== user.email || password !== user.password) {
      throw new Error('unauthorized');
    } else {
      sessionStorage.setItem(sessionKey, user);
    }
  },

  logout: () => {
    sessionStorage.removeItem(sessionKey);
  },

  isLogged: () => {
    const user = sessionStorage.getItem(sessionKey);
    return user ? true : false;
  }
}

export default userService;
