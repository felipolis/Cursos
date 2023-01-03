
# Criar um novo banco de dados
$ use blog

# Criar uma nova coleção
$ db.createCollection("posts")

# Criar uma outra nova coleção
$ db.createCollection("users")

# Mostrar todas as coleções
$ show collections

# Deletar a coleção "users"
$ db.users.drop()
