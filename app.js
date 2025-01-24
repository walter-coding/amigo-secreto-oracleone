let friends = [];
let updateFriendName = false;
let liElement = {};
let popupShown = false;
let selection = false;
let lista = {};
let newDiv = {};
let newDiv2 = {};
let nuevoLI = {};
let indexValue = -1;
let inputElement = document.querySelector('#amigo');
let buttonElement = document.querySelector('.button-add');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#amigo').focus();
});


inputElement.addEventListener('keydown',keyPressHandler);
inputElement.addEventListener('input',ignoreSpace);

function keyPressHandler(evt){
    if (evt.key === 'Enter') {
        agregarAmigo();
    }    
}

function ignoreSpace(evt) {
    let inputString = evt.target.value;

    if(inputString.startsWith(' ')){
        evt.target.value = inputString.trimStart();
    }
}

function agregarAmigo() {
    let friendName = toUpperCaseName(inputElement.value.trim());
    
    if(validateInput(friendName)){

        if(findFriend(friendName)){
                alert(`${friendName} ya se encuentra en la lista de amigos`);                
        }
        else{
                if(updateFriendName === true){
                    updateName(friendName);
                }else{
                    friends.push(friendName);
                    agregarElemento(friendName);
                }                    
        }

    }else{
        alert('Por favor, inserte un nombre.');
    }

    inputElement.value = "";
    inputElement.focus();
}

function validateInput(input) {
    const rexp = /^(?!.*[ºª])[\p{Script=Latin}\s]+$/u;
    return rexp.test(input);
}

function findFriend(friend) {
    return (friends.includes(friend)) ? true : false;
}

function toUpperCaseName(name) {
    return name.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

function agregarElemento(varFriendName) {
    lista = document.querySelector('#listaAmigos');
    newDiv = document.createElement('div');
    newDiv.className = 'div-items';
    nuevoLI = document.createElement('li');
    nuevoLI.textContent = varFriendName;
    nuevoLI.id = `${friends.length}`;   

    newDiv2 = document.createElement('div');
    newDiv2.style.display = 'none';
    newDiv2.className = 'div-message';
    newDiv2.id = `message-${friends.length}`;

    nuevoLI.addEventListener('click',handlingEvent);

    newDiv.appendChild(nuevoLI);
    newDiv.appendChild(newDiv2);
    lista.appendChild(newDiv);    
}

function handlingEvent(evt){
    liElement = evt.currentTarget;
    liElement.style.color = '#4B69FD';
    liElement.style.fontWeight = 'bold';

    let container = liElement.parentElement;
    let adyacentElement = container.querySelector('.div-message');
    adyacentElement.style.display = 'block';
    adyacentElement.textContent = ' -> Modificar este nombre';
    adyacentElement.style.fontWeight = 'bold';
    adyacentElement.style.color = '#e55720';
    
    console.log(`tag: ${liElement}`);

    let result = confirm('¿Desea modificar el nombre de su amigo/a?');
        
    if(result){
        updateFriendName = true;
        indexValue = friends.indexOf(evt.currentTarget.textContent);
        
        let titleElement = document.querySelector('.section-title');
        titleElement.textContent = 'Ingrese el nombre modificado';
        
        let allLI = document.querySelectorAll('.div-items > li');
            
        allLI.forEach(liItem => {
            if(liItem.id !== liElement.id){
                liItem.classList.add('desactivado');
            }
        });
            
        inputElement.value = evt.target.textContent;
        inputElement.focus();         
    }
}

function updateName(name) {
    let allLI = document.querySelectorAll('.div-items > li');
    let titleElement = document.querySelector('.section-title');
    titleElement.textContent = 'Digite el nombre de sus amigos';

    allLI.forEach(liItem => {
        if(liItem.id !== liElement.id){
            liItem.classList.remove('desactivado');
        }
    });

    friends[indexValue] = name;
    liElement.textContent = name;
    liElement.style.color = '#444444';
    liElement.style.fontWeight = 'normal';

    let divMessage = document.querySelector(`.div-items > #message-${liElement.id}`);

    divMessage.textContent = '';
    updateFriendName = false;            
} 

function sortearAmigo() {
    let indexNumber = Math.floor(Math.random() * friends.length);
    let resultElement = document.querySelector('#resultado');
    
    if(friends.length === 0){
        alert('No hay amigos para sortear. Por favor, agregue amigos en la lista.');
    }else{
        if(!popupShown){
            selection = confirm('¿La lista con los nombres de sus amigos está completa y con los nombres ingresados correctamente?');
            popupShown = selection === true ? true : false;
        }
        
        if(selection){
            cleanFriendsList();
            resultElement.textContent = `El amigo secreto sorteado es: ${friends[indexNumber]}`;
        }        
    }   
}

function cleanFriendsList(){
    let parentElement = document.querySelector('#listaAmigos');
    let elements = document.querySelectorAll('#listaAmigos > div');

    elements.forEach(element => {
        parentElement.removeChild(element);
    });
}


