
# Inserir um campo chamado "visitas" com o valor 0 para todos os usuarios
$ db.users.updateMany({}, {$set: {visitas: 0}})

# Renomear o campo "visitas" para "views"
$ db.users.updateMany({}, {$rename: {"visitas": "views"}})

# Incrementar o valor do campo "views" em 1 para o usuario "Frajola"
$ db.users.updateOne({name: "Frajola"}, {$inc: {views: 1}})