
# Alterar a senha do usuario 'Frajola' para 'queroDormir'
$ db.users.update({name: "Frajola"}, {$set: {password: "queroDormir"}})

# Adicionar um novo campo chamado "class" com o valor "2001" para todos os usuarios
$ db.users.updateMany({}, {$set: {class: "2001"}})

# Remover o campo "class" de todos os usuarios
$ db.users.updateMany({}, {$unset: {class: ""}})

# Alterar o documento do usuario "Jack" inteiro
$ db.users.replaceOne({name: "Jack"}, {name: "Jack", password: "novaSenha"})

# Alterar o documento do usuario "Lio" inteiro, e caso ele não exista, criar um novo
$ db.users.replaceOne({name: "Lio"}, {name: "Lio", password: "novaSenha"}, {upsert: true})