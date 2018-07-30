export var GET_PASSWORD_RULES='GET_PASSWORD_RULES';
export var LOAD_PASSWORD_RULES='LOAD_PASSWORD_RULES';
export var getPasswordRules=()=>{
    return {
        type:GET_PASSWORD_RULES
    }
};

export var loadPasswordRules=(data)=>{
    return {
        type:LOAD_PASSWORD_RULES,
        payload:data
    }
}

