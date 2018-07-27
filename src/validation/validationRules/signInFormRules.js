export default  signInFormValidationRules=[
    { 
      field: 'userName', 
      method: 'isFieldEmpty', 
      validWhen: false, 
      message: "User name can't be empty" 
    },
    { 
      field: 'password',
      method: 'isFieldEmpty', 
      validWhen: false, 
      message: 'Enter password for username'
    }
  ];