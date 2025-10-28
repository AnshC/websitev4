import Coffee from "@/components/about/Coffee";
import Hero from "@/components/about/Hero";
import Tools from "@/components/about/Tools";

import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.aboutComponent}>
      <main className="h-[100vh]">
        <Hero />
      </main>
      <section className="h-[100vh]">
        <Coffee />
      </section>
      <section className="h-[100vh]">
        <Tools />
      </section>
    </div>
  );
}
