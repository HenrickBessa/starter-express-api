import server from '../../index.js';

const Usuario = {
  create: (usuarioData, callback) => {
    try {
      
      const usuariosRef = server.database.ref('usuarios');
      usuariosRef.push(usuarioData, (error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Usuário criado com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

  getAll: (callback) => {
    try {
      const usuariosRef = server.database.ref('usuarios');
      usuariosRef.once('value', (snapshot) => {
        const usuarios = snapshot.val();
        callback(null, usuarios);
      }, (error) => {
        callback(error, null);
      });
    } catch (error) {
      callback(error, null);
    }
  },

  getById: (userId, callback) => {
    try {
      const usuariosRef = server.database.ref('usuarios');
      usuariosRef.child(userId).once('value', (snapshot) => {
        const usuario = snapshot.val();
        callback(null, usuario);
      }, (error) => {
        callback(error, null);
      });
    } catch (error) {
      callback(error, null);
    }
  },

  update: (userId, usuarioData, callback) => {
    try {
      const usuariosRef = server.database.ref('usuarios');
      usuariosRef.child(userId).update(usuarioData, (error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Usuário atualizado com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },

  delete: (userId, callback) => {
    try {
      const usuariosRef = server.database.ref('usuarios');
      usuariosRef.child(userId).remove((error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'Usuário excluído com sucesso');
        }
      });
    } catch (error) {
      callback(error, null);
    }
  },
};

export default Usuario;
