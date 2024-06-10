import MasterHeader from "@/app/components/MasterHeader";
import Navigation from "@/app/components/Navigation";
import DashBoard from "./components/Dashboard";
import styles from "../../pages/donor/styles/page.module.css";

export default function Donor() {
    return (
        <>
            <MasterHeader titleMasterHeader=""/>
            <div className={styles.mainDash}>
            <Navigation
                profile="donor"
                nameOptionOne="Meus Exames"
                srcImageOptionOne="/iconExams.png"
                linkOptionOne=""

                nameOptionTwo="Nova Doação"
                srcImageOptionTwo="/iconDonation.png"
                linkOptionTwo=""

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
            <DashBoard/>
        </div>
        </>
    );
}