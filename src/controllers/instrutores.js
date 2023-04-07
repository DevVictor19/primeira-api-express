let { indentificadorInstrutores, instrutores } = require("../data/db");
const isSafeFalsy = require("../utils/isSafeFalsy");

const listarInstrutores = (req, res) => {
  return res.json(instrutores);
};

const listarInstrutor = (req, res) => {
  const { id } = req.params;

  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (isSafeFalsy(instrutor)) {
    return res.status(404).json({ message: "Instrutor não encontrado" });
  }

  return res.json(instrutor);
};

const cadastrarInstrutor = (req, res) => {
  const { nome, email, status } = req.body;

  if (isSafeFalsy(nome)) {
    return res.status(400).json({ message: "O campo nome é obrigatório" });
  }

  if (isSafeFalsy(email)) {
    return res.status(400).json({ message: "O campo email é obrigatório" });
  }

  const instrutor = {
    id: indentificadorInstrutores++,
    nome,
    email,
    status: status ?? true,
  };

  instrutores.push(instrutor);

  return res.status(201).json(instrutor);
};

const atualizarInstrutor = (req, res) => {
  const { id } = req.params;
  const { nome, email, status } = req.body;

  if (isSafeFalsy(nome)) {
    return res.status(400).json({ message: "O campo nome é obrigatório" });
  }

  if (isSafeFalsy(email)) {
    return res.status(400).json({ message: "O campo email é obrigatório" });
  }

  if (isSafeFalsy(status)) {
    return res.status(400).json({ message: "O campo status é obrigatório" });
  }

  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (instrutor === undefined) {
    return res.status(404).json({ message: "Instrutor não encontrado" });
  }

  instrutor.nome = nome;
  instrutor.email = email;
  instrutor.status = status;

  res.status(204).json(instrutor);
};

const atualizarStatusInstrutor = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (isSafeFalsy(status)) {
    return res.status(400).json({ message: "O campo status é obrigatório" });
  }

  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (instrutor === undefined) {
    return res.status(404).json({ message: "Instrutor não encontrado" });
  }

  instrutor.status = status;

  return res.status(204).send();
};

const deletarInstrutor = (req, res) => {
  const { id } = req.params;

  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (instrutor === undefined) {
    return res.status(404).json({ message: "Instrutor não encontrado" });
  }

  instrutores = instrutores.filter((instrutor) => instrutor.id !== Number(id));

  return res.status(204).send();
};

module.exports = {
  listarInstrutores,
  listarInstrutor,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarStatusInstrutor,
  deletarInstrutor,
};
