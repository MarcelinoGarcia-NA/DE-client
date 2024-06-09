import Image from "next/image";
import styles from "../styles/navigation.module.css";
import Link from "next/link";

interface Props {
    profile: string,
    nameOptionOne: string;
    linkOptionOne: string;
    srcImageOptionOne: string;
    nameOptionTwo: string;
    linkOptionTwo: string;
    srcImageOptionTwo: string;
    nameOptionThree: string;
    linkOptionThree: string;
    srcImageOptionThree: string;
    nameOptionFour: string;
    linkOptionFour: string;
    srcImageOptionFour: string;
    nameOptionFive: string;
    linkOptionFive: string;
    srcImageOptionFive: string;
}

export default function Navigation(
    {
        profile,
        nameOptionOne,
        linkOptionOne,
        srcImageOptionOne,
        nameOptionTwo,
        linkOptionTwo,
        srcImageOptionTwo,
        nameOptionThree,
        linkOptionThree,
        srcImageOptionThree,
        nameOptionFour,
        linkOptionFour,
        srcImageOptionFour,
        nameOptionFive,
        linkOptionFive,
        srcImageOptionFive
    }: Props
): React.ReactElement {

    if (profile == "donor") {
        return (
            <nav className={styles.nav}>
                <ul className={styles.li}>
                    <li>
                        <Link href={linkOptionOne}>
                            <div>
                                <Image
                                    alt=""
                                    width={32}
                                    height={32}
                                    src={srcImageOptionOne} />
                            </div>
                        </Link>
                        <span>{nameOptionOne}</span>
                    </li>
                    <li>
                        <Link href={linkOptionTwo}>
                            <div>
                                <Image
                                    alt=""
                                    width={32}
                                    height={32}
                                    src={srcImageOptionTwo} />
                            </div>
                        </Link>
                        <span>{nameOptionTwo}</span>
                    </li>
                    <li>
                        <Link href={linkOptionThree}>
                            <div>
                                <Image
                                    alt=""
                                    width={32}
                                    height={32}
                                    src={srcImageOptionThree} />
                            </div>
                        </Link>
                        <span>{nameOptionThree}</span>
                    </li>
                    <li>
                        <Link href={linkOptionFour}>
                            <div className={styles.divSettings}>
                                <Image
                                    alt=""
                                    width={32}
                                    height={32}
                                    src={srcImageOptionFour} />
                            </div>
                        </Link>
                        <span>{nameOptionFour}</span>
                    </li>
                </ul>
            </nav>
        );
    }
    return (
        <nav>
            <ul>
                <li>
                    {nameOptionOne}
                </li>
                <li>
                    {nameOptionTwo}
                </li>
                <li>
                    {nameOptionThree}
                </li>
                <li>
                    {nameOptionThree}
                </li>
            </ul>
        </nav>
    );
}