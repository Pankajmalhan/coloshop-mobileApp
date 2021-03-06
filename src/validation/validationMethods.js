export default class ValidateionMethods{
    static isFieldEmpty=(value)=>{
          return value.trim().length==0?true:false
      };
  
      static matchName=(value)=>{
          let regx=new RegExp('[a-zA-Z]+$');
          return regx.test(value);
      }
  
      static matchMobile=(value)=>{
          let regx=new RegExp('((^[6-9]{1}[0-9]{9}$)|(^0[6-9]{1}[0-9]{8}$))');
          return regx.test(value);
      }
  
      static matchEmail=(value)=>{
          let regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return regx.test(value);
      }
      static matchPassword=(value)=>{
          return /([a-z]+)/.test(value)&&/([A-Z]+)/.test(value) && /([0-9]+)/.test(value)&& value.length>=8;
      }
  
      static comparePassowrd=(pass1,state)=>{
          return pass1==state.password;
      }
  
  }