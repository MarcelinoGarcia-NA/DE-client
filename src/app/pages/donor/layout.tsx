import MasterHeader from "@/app/components/MasterHeader";
import Navigation from "@/app/components/Navigation";
import styles from "../../pages/donor/styles/page.module.css";
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MasterHeader titleMasterHeader="" />
      <div className={styles.container}>
        <Navigation
          profile="donor"
          nameOptionOne="Meus Exames"
          srcImageOptionOne="/iconExams.png"
          linkOptionOne="/pages/donor/exams"

          nameOptionTwo="Nova Doação"
          srcImageOptionTwo="/iconDonation.png"
          linkOptionTwo="/pages/donor/newDonation"

          nameOptionThree="Notificações"
          srcImageOptionThree="/iconNotification.png"
          linkOptionThree=""

          nameOptionFour="Configurações"
          srcImageOptionFour="/iconSettings.png"
          linkOptionFour=""

          nameOptionFive=""
          srcImageOptionFive=""
          linkOptionFive=""
        />
         {children}
      </div>
     
    </>
  );
}