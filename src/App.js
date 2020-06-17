import React from 'react';
import ReactDOM from 'react-dom';
import marked from "marked";

const initialState =   

`This is a paragraph

**This is bolded text**

> Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3


[Visit my website](https://florin-pop.com)

This is a inline \`<div></div>\`
This is a block of code:

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

![React](https://www.geeknson.com/wp-content/plugins/slider/images/icon-img.png)
`;

class App extends React.Component {

state = {
  text: initialState
}

handleChange= (e) => {
this.setState({
  text: e.target.value
  })
}

render() {

const {text} = this.state;

const markdown = marked(text);

  return(
    <div>
      <h1 id="h1-css">Markdown Previewer</h1>
      <h2 id="h2-css">Markdown</h2>
      <div>
        <textarea id="editor" value={text} onChange={this.handleChange} rows="8" cols="50" >

        </textarea>
      </div>
      <h2 id="h2-css">Html</h2>
      <div id="preview-container">
      <p id="preview" dangerouslySetInnerHTML={{__html: markdown}}></p>
    </div>
    </div>
    );
  }
}

export default App
