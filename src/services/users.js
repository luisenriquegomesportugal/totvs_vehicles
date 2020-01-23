const users = [
  {
    image: {uri: "https://image.flaticon.com/icons/svg/761/761824.svg"},
    name: "Luis Portugal",
    email: "luisenriquegomesportugal@gmail.com",
    password: "secret",
    profile: null
  }
];

export default {
  all() {
    return users;
  },
  save(user) {
    users.push(user);
    return user;
  },
  show(email) {      
    return users.find(user => user.email === email);
  },
  update(user) {
    const index = users.findIndex(({email}) => user.email === email);
    users[index] = user;
    
    return user;
  }
}