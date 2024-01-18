import styled from 'styled-components'

export const App = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AppContainer = styled.div`
  background-color: #1b1c22;
  margin-left: 20px;
  display: flex;
  margin-right: 20px;
  width: 90%;
`
export const ImageContainer = styled.div`
  width: 40%;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 28px;
  color: #ffffff;
  text-align: center;
`
export const Image = styled.img`
  width: 300px;
  height: 300px;
`
export const TextEditorContainer = styled.div`
  background-color: #334155;
  display: flex;
  flex-direction: column;
  background-size: cover;
  width: 60%;
`
export const Header = styled.ul`
  height: 5vh;
  list-style-type: none;
  display: flex;
`

export const ListItems = styled.li`
  gap: 10px;
`
export const BoldButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  color: ${props => (props.under ? '#faff00' : '#f1f5f9')};
`

export const TextAreaContainer = styled.div`
  background-color: #1b1c22;
`
export const TextArea = styled.textarea`
  color: #ffffff;
  font-size: 18px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.under ? 'underline' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-family: 'Roboto';
  min-height: 300px;
  outline: none;
  background-color: #000000;
  width: 100%;
`
