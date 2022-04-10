let nome = "";

try{

    if(nome == ""){
        throw new Error("Nome não pode ser vazio");
    }

} catch(err){

    console.log("Houve um erro", err);

} finally{

    console.log("Boa noite!");
    
}
