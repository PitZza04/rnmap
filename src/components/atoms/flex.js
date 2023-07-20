import * as React from "react";
import Box from "./box";

const Flex = (props) => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
);

export default Flex;
