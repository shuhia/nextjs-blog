import "../styles/global.scss";
import "../styles/Footer.scss";
import "../styles/Todolist.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Layout from "../components/main/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
