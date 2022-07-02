import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import WebSocket from "../src/webSocket/ui/pages/WebSocket";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <WebSocket />
    </div>
  );
};

export default Home;
