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
          let regx=/^[a-zA-Z0-9]{8,}$/;
          console.log(regx.test(value));
          return regx.test(value);
      }
  
      static comparePassowrd=(pass1,state)=>{
          return pass1==state.password;
      }
  
  }