/*
index – Lista os dados da tabela
show – Mostra um item específico
create – Retorna a View para criar um item da tabela
store – Salva o novo item na tabela
edit – Retorna a View para edição do dado
update – Salva a atualização do dado
destroy – Remove o dado
*/
const User = require('../models/User')
module.exports = {
  async store(req, res) {
    const { email } = req.body
    let user = await User.findOne({email})
    if(!user) {
      user = await User.create({email})
    }
    return res.json(user)
  }
}
