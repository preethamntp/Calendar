import styled, {
  css
} from 'styled-components'


export const CalendarHeaderElement = styled.div `
background-color:#fe7663;
display:flex;
justify-content:space-between;
align-items:center;
height:80px;
width:620px;
padding:1%;
`

export const YearContainer = styled.div `
background-color:#fe7663;
display:flex;
justify-content:space-between;
align-items:center;
/* height:80px;
width:620px; */
padding:1%;

  > .arrowIcon{
    cursor:pointer;
  }
`

export const MainContainer = styled.div `
  background: #ffff;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 20px 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%),  
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%);
    z-index: 2; */
  }`
export const WeekdayIndicatorElement = styled.div `
display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  background-color: #2196F3;
  padding: 10px;
`
export const DayIndicatorElement = styled.div `
display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  background-color: #ffffff;
  padding: 10px;
`
export const Section = styled.div `
display: flex;
  justify-content: center;
  align-items: center;
`

export const IndicatorElement = styled.div `
 position: relative;
    overflow: hidden;
    width: 50%; 
    padding:10px;
    /* left:20px; */
    /* background: ${({ active }) => active ? '#ffffff' :'#d3d3d3'}; */
    &:hover {
        background-color: #e6007e;
        transform: scale(1.05);
        width:50%;
        cursor: pointer;
    }
    &:active{
        background-color: #e6007e;
        cursor: pointer;
    }
    ${props =>
    props.selected &&
    css`
      color: cornflowerblue;
    `}
    ${props =>
    !props.dataActiveMonth &&
    css`
      color: #d3d3d3;
    `}
`

export const Container = styled.div `
  height: 50%;
  z-index: 1;
  width: inherit;
  max-width: 1100px;
  border: 1px solid black;
`


export const DropDownContent = styled.div `
${props => props.action && 
css`
  border:2px solid black;
   display: none;
  position: relative;
  background-color: #691d1d;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  
  &:hover {
  display: block;
  }
  
  `
}
`;

const StyledLi = styled.li `
  float: left;
`;
export const DateContainerElement = styled.div `
  background-color:whitesmoke;
  cursor: pointer;
`;

export const Btn = styled.div `
display: inline-block;
text-align: center;
&:hover {
  cursor: pointer;
}
`;


export const FormInput = styled.input `
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`;

export const DropDownLi = styled(StyledLi)
` display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;