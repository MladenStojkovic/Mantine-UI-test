import "@/styles/globals.css";
import { Notifications } from "@mantine/notifications";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Notifications />
      <Component {...pageProps} />
    </>
  );
}
