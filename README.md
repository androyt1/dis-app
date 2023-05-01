import React from 'react'
import {Row,Column,Textarea,Button,HelpText} from '@innovaccer/design-system/'

const App = () => {

  const[contactEmail,setContactEmail] = React.useState({
    value: '',
    error: '',
    caption: ''
  })

  
   const handleChanges = (value) => {
   
 const myemailRegex = /^[a-z0-9]{1,4}(?:-[a-z0-9]{1,5}){0,1}@[a-z]+\.[a-z]{2,3}(?:;[a-z0-9]{1,4}(?:-[a-z0-9]{1,5}){0,1}@[a-z]+\.[a-z]{2,3})*$/


    const emailArray = value.split(';');
    const uniqueEmailArray = [...new Set(emailArray)];
    const invalidEmailArray = emailArray.filter((email) => !myemailRegex.test(email));
    if (value === '') {
      setContactEmail({
        value: '',
        error: true,
        caption: 'Please enter a valid email address'
      })
    }
    else if (emailArray.length !== uniqueEmailArray.length) {
      setContactEmail({
        value: value,
        error: true,
        caption: 'Please enter unique email addresses'
      })
    }
    else if (invalidEmailArray.length > 0) {
      setContactEmail({
        value: value,
        error: true,
        caption: 'Please enter a valid email address'
      })
    }
    else {
      setContactEmail({
        value: value,
        error: '',
        caption: 'Looks good! Press the button to send email'
      })
    }
   }

  return (
    <>
    <Row className='p-5'>
      <Column size={2} className='d-flex align-items-center'>Contact Email</Column>
      <Column size={3}><Textarea  onChange={(e)=>{handleChanges(e.target.value)}} onBlur={(e)=>{handleChanges(e.target.value)}} error={contactEmail.error}/></Column>
    </Row>
    <Row>
      <Column size={2}></Column>
      <Column size={3}><HelpText error={contactEmail.error} message={contactEmail.caption} /></Column>
    </Row>
    </>
  )
}

export default App
