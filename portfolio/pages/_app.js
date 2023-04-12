import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import smoothscroll from 'smoothscroll-polyfill';
import Layout from '../components/Layout';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
