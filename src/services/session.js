let session = null;

export default {
  index() {
    return session;
  },
  create(user) {
    session = user;
  },
  destroy() {
    session = null;
  }
};
