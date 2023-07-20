import Box from "./box";

const Center = ({ children }) => {
  return (
    <Box justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
};

export default Center;
