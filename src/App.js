import { Center } from '@chakra-ui/react';
import './App.css';
import Container from './components/Container';
import { ConfirmationModalProvider } from './ConfirmationModalContext';

function App() {
  return (
    <ConfirmationModalProvider>
      <Center h="100vh" w="100%">
        <Container/>
      </Center>
    </ConfirmationModalProvider>
  );
}

export default App;
