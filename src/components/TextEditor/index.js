import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  App,
  AppContainer,
  ImageContainer,
  Image,
  Heading,
  TextEditorContainer,
  Header,
  ListItems,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextAreaContainer,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {inputText: '', bold: false, italic: false, underline: false}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  clickedBold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  clickedItalic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  clickedUnderline = () => {
    this.setState(prev => ({underline: !prev.underline}))
  }

  render() {
    const {inputText, bold, italic, underline} = this.state
    return (
      <App>
        <AppContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextEditorContainer>
            <Header>
              <ListItems>
                <BoldButton
                  data-testid="bold"
                  onClick={this.clickedBold}
                  bold={bold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </ListItems>
              <ListItems>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.clickedItalic}
                  italic={italic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </ListItems>
              <ListItems>
                <UnderlineButton
                  data-testid="underline"
                  onClick={this.clickedUnderline}
                  under={underline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </ListItems>
            </Header>
            <TextAreaContainer>
              <TextArea
                rows={10}
                onChange={this.onChangeInput}
                value={inputText}
                bold={bold}
                italic={italic}
                under={underline}
              />
            </TextAreaContainer>
          </TextEditorContainer>
        </AppContainer>
      </App>
    )
  }
}

export default TextEditor
