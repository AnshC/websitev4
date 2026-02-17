import Coffee from "@/components/pages/about/Coffee";
import Hero from "@/components/pages/about/Hero";
import Tools from "@/components/pages/about/Tools";

import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.aboutComponent}>
      <main className="h-[100vh]">
        <Hero />
      </main>
      <section className="h-[100vh]">
        <Tools />
      </section>
    </div>
  );
}
