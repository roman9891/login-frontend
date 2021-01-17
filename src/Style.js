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
    width: 10%;
    min-width: 120px;
`
export const Button = styled.button`
  background: ${props => props.primary ? "#299637" : "white"};
  color: ${props => props.primary ? "white" : "#299637"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #299637;
  border-radius: 3px;
  margin: .1em;
  cursor: pointer;
`