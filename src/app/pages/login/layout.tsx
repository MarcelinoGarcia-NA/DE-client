import Image from "next/image";
import styles from "./styles/page.module.css";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={styles.main}>
            <section className={styles.login}>
                {children}
            </section>
            <section className={styles.banner}>
                <Image width={750} height={500} alt={"imagem enfermeira"} src={"/bannerLogin.png"}/>
            </section>
        </main>
    );
}