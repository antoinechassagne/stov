const TasksRepository = require("./repository");

exports.getTask = async function (req, res) {
  try {
    const tasks = await TasksRepository.getTask({ id: req.params.id });
    if (!tasks) {
      return res.status(204).send();
    }
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};

exports.getTasks = async function (req, res) {
  try {
    const tasks = await TasksRepository.getTasks(req.query);
    if (!tasks.length) {
      return res.status(204).send();
    }
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};
