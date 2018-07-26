export var signupUserNameValidationRules=[
    { 
      field: 'emailId', 
      method: 'isFieldEmpty', 
      validWhen: false, 
      message: 'Email is required.' 
    },
    { 
      field: 'emailId',
      method: 'matchEmail', 
      validWhen: true, 
      message: 'That is not a valid email id.'
    },
    { 
      field: 'userName', 
      method: 'isFieldEmpty', 
      validWhen: false, 
      message: 'UserName is required.'
    },
    { 
        field: 'userName', 
        method: 'matchName', 
        validWhen: true, 
        message: 'UserName is not valid.'
    }
  ];