const TaskTemplatesRepository = require("./repository");

exports.createTaskTemplate = async function (req, res) {
  try {
    const [taskTemplateId] = await TaskTemplatesRepository.createTaskTemplate(req.body);
    if (!taskTemplateId) {
      return res.status(204).send();
    }
    res.status(201).send({ taskTemplateId });
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};

exports.getTaskTemplate = async function (req, res) {
  try {
    const taskTemplates = await TaskTemplatesRepository.getTaskTemplate({ id: req.params.id });
    if (!taskTemplates) {
      return res.status(204).send();
    }
    res.status(200).send(taskTemplates);
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};

exports.getTaskTemplates = async function (req, res) {
  try {
    const taskTemplates = await TaskTemplatesRepository.getTaskTemplates(req.query);
    if (!taskTemplates.length) {
      return res.status(204).send();
    }
    res.status(200).send(taskTemplates);
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};

exports.updateTaskTemplate = async function (req, res) {};

exports.deleteTaskTemplate = async function (req, res) {};
