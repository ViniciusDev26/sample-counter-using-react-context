import '../styles/global.css';
import { CounterProvider } from "../contexts/CounterContext"

function MyApp({ Component, pageProps }) {
  return(
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  )
}

export default MyApp
