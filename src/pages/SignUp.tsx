import { Box } from '@mantine/core'
import { Footer } from '../components/footer/Footer'
import { Form } from '../components/form/Form'
import Header from '../components/header/Header'
import classes from './Pages.module.css'

function SignUp() {
  return (
    <>
    <Header />  
    <Box className={classes.pageWrapper}>
      <Form type={"signUp"}/>
    </Box>
    <Footer />
    </>
  )
}

export default SignUp