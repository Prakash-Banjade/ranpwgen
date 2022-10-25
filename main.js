let generateBtn = document.getElementById('btn');
let pwType = document.querySelectorAll('input[type="radio"]');
let pwFeature = document.querySelectorAll('input[type="checkbox"]');
let displayPw = document.getElementById('generatedPassword');
let copyBtn = document.querySelector('#copyBtn');


let pwFeatureArrKyes = ['upperCase', 'lowerCase', 'numbers', 'symbols'];


let funnyPasswordsArray = [
    'password', '123456', '123456789', 'qwerty', '12345678', '111111', '1234567890', '1234567', 'sunshine', 'iloveyou', 'princess', 'admin', 'welcome', '666666', 'abc123', 'football', '123123', 'monkey', '654321', '!@#$%^&*', 'charlie', 'aa123456', 'donald', 'password1', 'qwerty123', '1q2w3e4r', 'starwars', 'dragon', 'passw0rd', 'michael', 'shadow', 'master', 'hello', 'freedom', 'whatever', 'qazwsx', 'trustno1', 'jordan23', 'jennifer', 'zxcvbnm', 'zaq1zaq1', 'password123', 'ranger', 'buster', 'soccer', 'batman', 'killer', 'hottie', 'george', 'sexy', 'jessica', 'pepper', 'andrew', 'michelle', 'love', 'sunshine', 'jordan', 'ashley', 'nicole', 'daniel', 'babygirl', 'monkey', 'lovely', 'jessica', '654321', 'michael', 'ashley', 'qwerty', '111111', 'iloveyou', '000000', 'michelle', 'tigger', 'sunshine', 'chocolate', 'password', 'soccer', 'anthony', 'friends', 'butterfly', 'purple', 'angel', 'jessica', 'lovely', 'jordan', 'liverpool', 'justin', '123456', 'football', 'charlie', 'andrew', 'jennifer', 'jordan23', 'biteme', 'matthew', 'access', 'yankees', 'starwars', 'shadow', 'master', 'hello', 'freedom', 'whatever', 'qazwsx', 'trustno1', 'jordan23', 'jennifer', 'zxcvbnm', 'zaq1zaq1', 'password123', 'ranger', 'buster', 'soccer', 'batman', 'killer', 'hottie', 'george', 'sexy', 'jessica', 'pepper', 'andrew', 'michelle', 'love', 'sunshine', 'jordan', 'ashley', 'nicole', 'daniel', 'babygirl', 'monkey', 'lovely', 'jessica', '654321', 'michael', 'ashley', 'qwerty', '111111', 'iloveyou', '000000', 'michelle', 'tigger', 'sunshine', 'chocolate', 'password', 'soccer', 'anthony', 'friends', 'b', 'purple', 'angel', 'jessica', 'lovely', 'jordan', 'liverpool', 'justin', '123456', 'football', 'charlie', 'andrew', 'jennifer', 'jordan23', 'biteme', 'matthew', 'access', 'yankees', 'starwars', 'shadow', 'master', 'hello', 'freedom', 'whatever', 'qazwsx', 'trustno1', 'jordan23', 'jennifer', 'zxcvbnm', 'zaq1zaq1', 'password123', 'ranger', 'buster', 'soccer', 'batman', 'killer', 'hottie', 'george', 'sexy', 'jessica', 'pepper', 'andrew', 'michelle', 'love', 'sunshine', 'jordan', 'ashley', 'nicole', 'daniel', 'babygirl', 'monkey', 'lovely', 'jessica', '654321', 'michael', 'ashley', 'qwerty', '111111', 'iloveyou', '000000', 'michelle', 'tigger', 'sunshine', 'chocolate', 'password', 'soccer', 'anthony', 'friends', 'butterfly', 'purple', 'angel', 'jessica', 'lovely', 'jordan', 'liverpool', 'justin', '123456', 'football', 'charlie', 'andrew', 'jennifer', 'jordan23', 'biteme', 'matthew', 'access', 'yankees', 'starwars', 'shadow', 'master', 'hello', 'freedom', 'whatever', 'qazwsx', 'trustno1', 'jordan23', 'jennifer', 'zxcvbnm', 'zaq1zaq1', 'password123', 'ranger', 'buster', 'soccer', 'batman', 'killer', 'hottie', 'george', 'sexy', 'jessica', 'pepper', 'andrew', 'michelle', 'love', 'sunshine', 'jordan', 'ashley', 'nicole', 'daniel', 'babygirl', 'monkey', 'lovely', 'jessica', '654321', 'michael', 'ashley', 'qwerty', '111111', 'iloveyou', '000000', 'michelle', 'tigger', 'sunshine', 'chocolate', 'password', 'soccer', 'anthony', 'friends', 'butterfly', 'purple', 'angel', 'jessica', 'lovely', 'jordan', 'liverpool', 'justin', '123456', 'football', 'charlie', 'andrew', 'jennifer', 'jordan23', 'biteme', 'matthew', 'access', 'yankees', 'starwars', 'shadow', 'master', 'hello', 'freedom', 'whatever', 'qazwsx', 'trustno1', 'jordan23', 'jennifer', 'zxcvbnm', 'zaq1zaq1', 'password123', 'ranger', 'buster', 'soccer', 'batman', 'killer', 'hottie', 'george', 'sexy', 'jessica', 'pepper', 'andrew', 'michelle', 'love', 'sunshine', 'jordan', 'ashley', 'nicole', 'daniel', 'babygirl', 'monkey', 'lovely', 'jessica', '654321', 'michael', 'ashley', 'qwerty', '111111', 'iloveyou', '000000', 'michelle', 'tigger', 'sunshine', 'chocolate', 'password', 'soccer', 'anthony', 'friends', 'butterfly', 'purple', 'angel', 'jessica', 'lovely', 'jordan', 'liverpool', 'justin', '123456', 'football', 'charlie', 'andrew', 'jennifer', 'jordan23', 'biteme', 'matthew', 'access', 'yankees', 'starwars', 'shadow', 'master', 'hello', 'freedom', 'whatever', 'qazwsx', 'trustno1', 'jordan23', 'jennifer', 'zxcvbnm', 'zaq1zaq1', 'password123', 'ranger', 'buster', 'soccer', 'batman', 'killer', 'hottie', 'george', 'sexy', 'jessica'
];

let pwLength = 0;
Array.from(pwType).forEach((element)=>{
    element.addEventListener('click', function(e){
        if (pwType[2].checked) {
            pwFeature.forEach((element)=>{
                element.disabled = true;
            })
        }else{
            pwFeature.forEach((element)=>{
                element.disabled = false;
            })
        }
    });
})

const generateUpperCase = (length=8)=>{
    let upperCase = '';
    for (let i = 0; i < length; i++) {
        upperCase += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    return upperCase;
}

const generateLowerCase = (length=8)=>{
    let lowerCase = '';
    for (let i = 0; i < length; i++) {
        lowerCase += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    return lowerCase;
}

const generateNumbers = (length=8)=>{
    let numbers = '';
    for (let i = 0; i < length; i++) {
        numbers += Math.floor(Math.random() * 10);
    }
    return numbers;
}

const generateSymbol = (length=8)=>{
    let symbol = '';
    for (let i = 0; i < length; i++) {
        symbol += String.fromCharCode(Math.floor(Math.random() * 15) + 33);
    }
    return symbol;
}

const handleBtnClick = (e)=>{
    e.preventDefault();
    if (pwType[2].checked) {
        let ranNo = Math.floor(Math.random() * funnyPasswordsArray.length);
        displayPw.value = funnyPasswordsArray[ranNo];
        return
    }
    
    let ranPw = ''
    let generatedPw = ''
    let features = Array.from(pwFeature).filter((element)=>{
        return element.checked && !element.disabled;
    })

    let functionsToCall = features.map((element)=>{
        if(element.id === 'uppercase'){
            return generateUpperCase;
        }else if(element.id === 'lowercase'){
            return generateLowerCase;
        }
        else if(element.id === 'numbers'){
            return generateNumbers;
        }
        else if(element.id === 'symbols'){
            return generateSymbol;
        }
    })
    
    functionsToCall.forEach((element)=>{
        pwLength = pwType[0].checked? 8:16
        generatedPw += element(Math.floor(pwLength / functionsToCall.length));
    })

    ranPw = generatedPw.split('').sort(function(){return 0.5-Math.random()}).join('');
    
    displayPw.value = ranPw;
    copyBtn.style.display = 'block';
}



generateBtn.addEventListener('click', handleBtnClick);


let copyBtnBox = document.querySelector('#copyBtnBox');

copyBtn.addEventListener('click', function(e){
    navigator.clipboard.writeText(displayPw.value);
    copyBtnBox.setAttribute('val', `✔️Copied!`)

    
})
copyBtnBox.addEventListener('mouseover', function(e){
    copyBtnBox.classList.add('copyBtn')
})
copyBtnBox.addEventListener('mouseleave', function(e){
    copyBtnBox.classList.remove('copyBtn')
    copyBtnBox.setAttribute('val', `Copy`)

})
