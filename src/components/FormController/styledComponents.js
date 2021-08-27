import styled from 'styled-components';


export const Form = styled.form `
   width: 100%;
`;
export const TextField = styled.textarea `
max-width:100%;
   width: 100%;
   height:5em;
   line-height: 30px;
   padding:5px;
   font-size: 15px;
   margin:2%;
   /* border-color: ${(error)=>error?'red':'green'} ; */
   &::placeholder{
      padding:10px;
      font-size: 15px;
      line-height: 30px;
   }
`;

export const InputForm = styled.input `
max-width:100%;
   width: 100%;
   line-height: 30px;
   padding:5px;
   font-size: 15px;
   margin:2%;
   border-color: ${(error)=>error? console.log(error):'black'} ;

`;

export const CustomButton = styled.button `
   width: 40%;
    height: 40%;
    background: #6c94d0;
    color: #000000;
   &:disabled{
      color:gray;
    background: #9dc0f5;
      
   }
`;

export const ButtonContainer = styled.div `
display:flex;
justify-content:center;
align-content:center;
align-items:center;
`;