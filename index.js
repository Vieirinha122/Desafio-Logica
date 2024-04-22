let nomeHeroi = "Vieira"
let qtdXp = "500"
let nivel 

switch(true) {
    case qtdXp < 1000: 
        nivel = "Ferro"; 
        break; 
    case qtdXp >= 1001 && qtdXp <= 2000: 
        nivel = "Bronze"; 
        break; 
    case qtdXp >= 2001 && qtdXp <= 5000:  
        nivel = "Prata"; 
        break; 
    case qtdXp >= 5001 && qtdXp <= 7000:  
        nivel = "Ouro"; 
        break; 
    case qtdXp >= 7001 && qtdXp <= 8000:  
        nivel = "Platina"; 
        break; 
    case qtdXp >= 8001 && qtdXp <= 9000:  
        nivel = "Ascendente"; 
        break; 
    case qtdXp >= 9001 && qtdXp <= 10000:  
        nivel = "Imortal"; 
        break; 
    case qtdXp >= 10001:  
        nivel = "Radiante"; 
        break; 
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível " + nivel); 