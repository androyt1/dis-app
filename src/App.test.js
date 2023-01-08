import { render, screen } from '@testing-library/react';
import App from './App';


describe('App.js file',()=>{
  it('expects heading to be in the document',()=>{
    render(<App/>)
  const headingElement=screen.getByRole('heading',{name:/welcome to the homepage/i})
  expect(headingElement).toBeInTheDocument()
  })

  it('Expects heading to be welcome to the homepage',()=>{
    render(<App/>)
    const headingElement=screen.getByRole('heading',{level:1})
    expect(headingElement.textContent).toBe("Welcome to the Homepage")
  })
})