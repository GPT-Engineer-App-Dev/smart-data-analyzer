import { Container, Text, VStack, Input, Button, Wrap, WrapItem, Box } from "@chakra-ui/react";

const options = [
  "Todo",
  "Personal website",
  "Notes",
  "Band website",
  "Chat",
  "Dashboard",
  "Blog",
  "SaaS"
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="white">
      <VStack spacing={6} width="100%">
        <Text fontSize="4xl" fontWeight="bold">What do you want to build?</Text>
        <Input placeholder="e.g., A Music player" size="lg" bg="gray.800" border="none" _placeholder={{ color: 'gray.500' }} />
        <Wrap spacing={4} justify="center">
          {options.map(option => (
            <WrapItem key={option}>
              <Button size="lg" variant="outline" colorScheme="whiteAlpha">{option}</Button>
            </WrapItem>
          ))}
        </Wrap>
        <Button size="lg" colorScheme="whiteAlpha" width="100%">Create</Button>
      </VStack>
    </Container>
  );
};

export default Index;