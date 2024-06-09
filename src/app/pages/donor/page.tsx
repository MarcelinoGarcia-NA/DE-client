import Navigation from "@/app/components/Navigation";

export default function Donor() {
    return (
        <>
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
        </>
    );
}