import { Outlet } from 'react-router-dom';
import { Flex, Box, Container } from '@radix-ui/themes';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';

export default function RootLayout() {
  return (
    <>
      <Box>
        <Flex direction='column' className='min-h-svh'>
          <Container p='5'>
            <Box flexGrow='1'>
              <Nav />
              <Outlet />
            </Box>
          </Container>
          <Footer />
        </Flex>
      </Box>
    </>
  );
}
