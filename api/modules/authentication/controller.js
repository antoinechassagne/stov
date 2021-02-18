const Authenticator = require("./services/Authenticator");
const SessionCookie = require("./services/SessionCookie");
const UsersRepository = require("../users/repository");

exports.register = async function (req, res) {
  try {
    const { email, password, ...userInformations } = req.body;
    const userId = await Authenticator.register(email, password, userInformations);
    if (!userId) {
      return res.status(400).send({ error: "Une erreur s'est produite lors de la création du compte." });
    }
    const sessionId = await Authenticator.initializeSession(userId);
    SessionCookie.setCookie(res, sessionId);
    res.status(201).send({ userId });
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await Authenticator.authenticateByCredentials(email, password);
    if (!user) {
      return res.status(400).send({ error: "L'adresse email et/ou le mot de passe est incorrecte." });
    }
    const sessionId = await Authenticator.initializeSession(user.id);
    SessionCookie.setCookie(res, sessionId);
    console.log(sessionId);
    res.status(200).send({ userId: user.id });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};

exports.logout = async function (req, res) {
  const sessionId = SessionCookie.getCookie(req);
  await Authenticator.discardSession(sessionId);
  SessionCookie.discardCookie(res);
  res.status(204).send();
};

exports.getLoggedUser = async function (req, res) {
  const sessionId = SessionCookie.getCookie(req);
  const user = await Authenticator.authenticateBySessionId(sessionId);
  if (!user) {
    return res.status(403).send({ error: "Vous avez été déconnecté." });
  }
  const result = UsersRepository.getPublicFields(user);
  res.status(200).send(result);
};
