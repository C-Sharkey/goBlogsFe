import { Box } from '@mantine/core'
import { Footer } from '../components/footer/Footer'
import { Form } from '../components/form/Form'
import Header from '../components/header/Header'
import classes from './Pages.module.css'
function SignIn() {
  return (
    <>
    <Header />
      <Box className={classes.pageWrapper}>
        <Form type={"signIn"} />
      </Box>
    <Footer />
    </>
  )
}

export default SignIn