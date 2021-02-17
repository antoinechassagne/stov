const UsersRepository = require("../../users/repository");
const SessionsRepository = require("../repository");
const Crypto = require("./Crypto");

const SESSION_MAX_AGE = 3024000000; /* 5 weeks */

async function register(email, password, userInformations) {
  const existingUser = await retrieveUser({ email });
  if (existingUser) {
    return;
  }
  const userId = createUser({ email, password, ...userInformations });
  return userId;
}

async function authenticateByCredentials(email, password) {
  const user = await retrieveUser({ email });
  if (!user) {
    return;
  }
  const isPasswordValid = checkPassword(password, user);
  if (!isPasswordValid) {
    return;
  }
  return user;
}

async function authenticateBySessionId(sessionId) {
  const session = await retrieveSession({ id: sessionId });
  if (!session) {
    return;
  }
  const user = await retrieveUser({ id: session.userId });
  if (!user) {
    return;
  }
  return user;
}

async function initializeSession(userId) {
  await removePreviousUserSessions(userId);
  const sessionId = createSession(userId);
  return sessionId;
}

function discardSession(sessionId) {
  return SessionsRepository.deleteSessions({ id: sessionId });
}

async function createUser(user) {
  const { password, email, ...userInformations } = user;
  const { salt, hash } = hashPassword(password);
  const [id] = await UsersRepository.createUser({
    registrationDate: new Date().toISOString(),
    email: email,
    salt,
    password: hash,
    confirmationToken: generateToken(),
    active: false,
    ...userInformations,
  });
  return id;
}

async function createSession(userId) {
  const [sessionId] = await SessionsRepository.createSession({
    userId,
    expirationDate: new Date(Date.now() + SESSION_MAX_AGE).toISOString(),
  });
  return sessionId;
}

function removePreviousUserSessions(userId) {
  return SessionsRepository.deleteSessions({ userId });
}

function retrieveUser(query) {
  return UsersRepository.getUser(query);
}

function retrieveSession(query) {
  return SessionsRepository.getSession(query);
}

function hashPassword(password) {
  return Crypto.hashPassword(password);
}

function checkPassword(password, user) {
  return Crypto.comparePassword(password, user.salt, user.password);
}

function generateToken() {
  return Crypto.generateToken();
}

module.exports = {
  register,
  authenticateByCredentials,
  authenticateBySessionId,
  initializeSession,
  discardSession,
};
