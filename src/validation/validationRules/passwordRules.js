export var PasswordValidationRules=[
    { 
      field: 'password', 
      method: 'matchPassword', 
      validWhen: true, 
      message: "Password doesn't meet requirements" 
    },
    { 
        field: 'confirm', 
        method: 'comparePassowrd', 
        validWhen: true, 
        message: "Doesn't match password" 
      },
  ];