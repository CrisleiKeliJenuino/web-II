const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuariosController");

router.get("/", controller.getUsuarios);
router.get("/:id", controller.getUsuarioById);

router.post("/", controller.postUsuarios);

router.put("/:id", controller.putUsuario);

router.delete("/:id", controller.deleteUsuario);

module.exports = router;
