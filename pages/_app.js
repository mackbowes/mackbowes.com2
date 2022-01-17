import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
