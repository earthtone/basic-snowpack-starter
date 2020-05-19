/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { html, render } from 'lit-html'
import './styles.css'

const app = ({ name }) => html`
  <h1>Hello, ${name}!</h1>
`

render(app({ name: 'World' }), document.querySelector('main#app'))
