import { createTheme, MantineProvider } from '@mantine/core';
import Header from './components/header/Header'

const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {


  return (
    <>
      <MantineProvider theme={theme}>
        <Header />
      </MantineProvider>

    </>
  )
}

export default App
