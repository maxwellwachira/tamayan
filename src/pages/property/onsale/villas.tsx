import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import VillasOnly from "@/components/property/onsale/villas";
import Head from "next/head";


const ApartmentsPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Villas</title>
                <meta name="description" content="Tamayan Properties - All Apartments" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <VillasOnly />
            <Footer />
        </>
    )
}

export default ApartmentsPage;