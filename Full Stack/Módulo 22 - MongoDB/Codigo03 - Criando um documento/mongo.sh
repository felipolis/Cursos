
# Criar um documento de usuário
$ db.users.insertOne({name: "John", password: "123456", email: "user1@gmail.com"})

# Criar varios documentos de usuário
$ db.users.insertMany([{name: "Frajola"}, {name: "Jack"}, {name: "Mike"}])