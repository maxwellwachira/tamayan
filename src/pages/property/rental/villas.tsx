import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import VillasOnly from "@/components/property/rental/villas";
import Head from "next/head";


const ApartmentsPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Rental Villas</title>
                <meta name="description" content="Tamayan Properties - All Rental Villas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <VillasOnly />
            <Footer />
        </>
    )
}

export default ApartmentsPage;