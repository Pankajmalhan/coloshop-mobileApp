import passwordValidationRule from '../data/appData';

export var getPasswordValidations=()=>{
    var promise1 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 2000, passwordValidationRule);
      });
    return promise1;
}