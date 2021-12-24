let amigo = {
    nome: 'jose', 
    sexo: 'M',
    peso: 89.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
console.log(typeof(amigo))
console.log(`${amigo.nome} pesa ${amigo.peso} Kilos`)
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso} Kilos`)
