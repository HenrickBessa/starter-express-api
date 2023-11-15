import Usuario from '../models/usuario.js';

export default {
  criarUsuario: (req, res) => {
    const novoUsuarioData = req.body;

    Usuario.create(novoUsuarioData, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });
      }
      return res.status(201).json({ message: mensagem });
    });
  },

  listarUsuarios: (req, res) => {
    
    Usuario.getAll((error, usuarios) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message });
      }
      return  res.status(200).json(usuarios), console.log(usuarios);
    });
  },

  obterUsuarioPorId: (req, res) => {
    const userId = req.params.id;

    Usuario.getById(userId, (error, usuario) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuário', details: error.message });
      }
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      return res.status(200).json(usuario);
    });
  },

  atualizarUsuario: (req, res) => {
    const userId = req.params.id;
    const usuarioData = req.body;

    Usuario.update(userId, usuarioData, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message });
      }
      return res.status(200).json({ message: mensagem });
    });
  },

  excluirUsuario: (req, res) => {
    const userId = req.params.id;

    Usuario.delete(userId, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao excluir usuário', details: error.message });
      }
      return res.status(200).json({ message: mensagem });
    });
  },
};