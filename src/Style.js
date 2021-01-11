import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    /* border: 1px solid black; */
    border-radius: 3px;
    box-sizing: content-box;
    width: 10%;
    min-width: 120px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 3px solid lightblue;
    border-radius: 3px;
    box-sizing: content-box;
    padding: .4em;
    font-size: .8em;
    /* background-color: lightgray; */
`
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: .1em;
  cursor: pointer;
`;