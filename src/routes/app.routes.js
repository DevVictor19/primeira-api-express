const express = require("express");
const router = express();

const instrutores = require("../controllers/instrutores");

router.get("/instrutores", instrutores.listarInstrutores);
router.get("/instrutores/:id", instrutores.listarInstrutor);
router.post("/instrutores", instrutores.cadastrarInstrutor);
router.put("/instrutores/:id", instrutores.atualizarInstrutor);
router.patch("/instrutores/:id/status", instrutores.atualizarStatusInstrutor);
router.delete("/instrutores/:id", instrutores.deletarInstrutor);

module.exports = router;
