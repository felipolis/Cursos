
# Encontrar todos os documentos/objetos da coleção "users"
$ db.users.find()

# Encontra o primeiro documento/objeto da coleção "users"
$ db.users.findOne()

# Encontra os 2 primeiros documentos/objetos da coleção "users"
$ db.users.find().limit(2)

# Encontra os 3 primeiros documentos/objetos da coleção "users" e visualiza no terminal de forma mais amigável
$ db.users.find().limit(3).pretty()

# Ecnontrar o usuario com a senha "123mudar"
$ db.users.find({password: "123mudar"})

# Encontrar os usuarios do tipo "admin"
$ db.users.find({type: "admin"})

# Descobrir quantos usuarios do tipo "admin" existem
$ db.users.find({type: "admin"}).count()

# Descobrir quantos usuarios existem
$ db.users.find().count()

# Listar todos os usuarios ordenados por ordem alfabetica de nome
$ db.users.find().sort({name: 1})

# Listar todos os usuarios ordenados por ordem alfabetica inversa de nome
$ db.users.find().sort({name: -1})