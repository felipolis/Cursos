module.exports = {
    posts: [
        {
            id: "vfvrwgwgwgwg",
            title: "Teste do Mural",
            description: "Descrição do teste do mural"
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {

        this.posts.push({
            id: generateID(),
            title,
            description
        })
    },

}

function generateID() {
    return Math.random().toString(36).substr(2, 9);
}