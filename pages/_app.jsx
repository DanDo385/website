// pages/_app.jsx
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Pass all props from pageProps to the Component
  return <Component {...pageProps} />;
}

export default MyApp;
