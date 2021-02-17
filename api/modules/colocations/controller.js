const ColocationsRepository = require("./repository");

exports.createColocation = async function (req, res) {
  try {
    const [colocationId] = await ColocationsRepository.createColocation(req.body);
    if (!colocationId) {
      return res.status(204).send();
    }
    res.status(201).send({ colocationId });
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};

exports.getColocation = async function (req, res) {
  try {
    const colocation = await ColocationsRepository.getColocation({ id: req.params.id });
    if (!colocation) {
      return res.status(204).send();
    }
    res.status(200).send(colocation);
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};

exports.getColocations = async function (req, res) {
  try {
    const colocations = await ColocationsRepository.getColocations(req.query);
    if (!colocations.length) {
      return res.status(204).send();
    }
    res.status(200).send(colocations);
  } catch (err) {
    res.status(500).send({ error: "Une erreur s'est produite." });
  }
};
