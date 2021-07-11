import "../styles/global.scss";
import "../styles/Footer.scss";
import "../styles/Todolist.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Layout from "../components/main/layout";
import TodosState from "../contexts/TodosState";

export default function App({ Component, pageProps }) {
  return (
    <TodosState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodosState>
  );
}
