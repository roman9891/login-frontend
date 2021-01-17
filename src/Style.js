import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    /* justify-content: center; */
    border: 1px solid lightblue;
    border-radius: 3px;
    box-sizing: content-box;
    width: 16vw;
    height: 22vh;
    min-height: 22vh;
    min-width: 120px;
`
export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* border: 1px solid lightblue; */
    /* border-radius: 3px; */
    box-sizing: content-box;
    width: 16vw;
    height: 22vh;
    min-height: 22vh;
    min-width: 120px;
    font-size: .8em;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    /* border: 1px solid black; */
    border-radius: 3px;
    box-sizing: content-box;
    padding: .4em;
    font-size: .8em;
    width: 10%;
    height: 10%;
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