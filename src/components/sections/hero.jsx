import { Flex, Box, Heading, Text } from '@radix-ui/themes';
import { Button } from '@/components/shadcn/ui/button';

export const Hero = () => {
  return (
    <Flex justify='between' py='9'>
      <Box width='600px'>
        <Heading as='h1' size='9' mb='4'>
          Empowering individuals and communities for a better world
        </Heading>
        <Text>
          Empowering individuals and communities for a better worldAt Harmonia, we believe in the power of connection,
          collaboration, and sustainable solutions. Join us in creating a better world together.
        </Text>
        <Flex gap='4' mt='4'>
          <Button variant='secondary'>Learn More</Button>
          <Button>Sign Up</Button>
        </Flex>
      </Box>
      <Box>
        <img src='https://placehold.co/400x400' alt='Hero' />
      </Box>
    </Flex>
  );
};
