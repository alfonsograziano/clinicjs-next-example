import styles from "./page.module.css";
import { headers } from "next/headers";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  const headersList = headers();
  await wait(1000);
  return (
    <main className={styles.main}>{JSON.stringify(headersList, null, 2)}</main>
  );
}
