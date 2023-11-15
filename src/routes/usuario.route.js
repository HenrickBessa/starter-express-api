import express from 'express';
import UsuarioController from '../controller/usuario.controller.js'; 
const router = express.Router();

router.post('/usuarios', UsuarioController.criarUsuario);
router.get('/usuarios', UsuarioController.listarUsuarios);
router.get('/usuarios/:id', UsuarioController.obterUsuarioPorId);
router.patch('/usuarios/:id', UsuarioController.atualizarUsuario);
router.delete('/usuarios/:id', UsuarioController.excluirUsuario);

export default router;
