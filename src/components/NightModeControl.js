import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const NightModeControl = ({ mode, setMode }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode);

  return (
    <Box>
      <Button onClick={toggleColorMode} my={10}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Heading>Lorem ipsum</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pellentesque ligula velit, scelerisque malesuada dolor aliquam non. Ut
        sit amet ex lorem. Duis id dui quis velit finibus fermentum. In sed
        dictum sem, a venenatis urna. Quisque luctus lorem sit amet mi faucibus
        consectetur nec nec est. Aenean vulputate mauris ac augue malesuada, in
        mattis leo ornare. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Vestibulum sit amet orci sed
        lorem sodales lacinia sit amet sit amet est.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pellentesque ligula velit, scelerisque malesuada dolor aliquam non. Ut
        sit amet ex lorem. Duis id dui quis velit finibus fermentum. In sed
        dictum sem, a venenatis urna. Quisque luctus lorem sit amet mi faucibus
        consectetur nec nec est. Aenean vulputate mauris ac augue malesuada, in
        mattis leo ornare. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Vestibulum sit amet orci sed
        lorem sodales lacinia sit amet sit amet est.
      </Text>
      <Heading>Lorem ipsum</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pellentesque ligula velit, scelerisque malesuada dolor aliquam non. Ut
        sit amet ex lorem. Duis id dui quis velit finibus fermentum. In sed
        dictum sem, a venenatis urna. Quisque luctus lorem sit amet mi faucibus
        consectetur nec nec est. Aenean vulputate mauris ac augue malesuada, in
        mattis leo ornare. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Vestibulum sit amet orci sed
        lorem sodales lacinia sit amet sit amet est.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pellentesque ligula velit, scelerisque malesuada dolor aliquam non. Ut
        sit amet ex lorem. Duis id dui quis velit finibus fermentum. In sed
        dictum sem, a venenatis urna. Quisque luctus lorem sit amet mi faucibus
        consectetur nec nec est. Aenean vulputate mauris ac augue malesuada, in
        mattis leo ornare. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Vestibulum sit amet orci sed
        lorem sodales lacinia sit amet sit amet est.
      </Text>
    </Box>
  );
};
