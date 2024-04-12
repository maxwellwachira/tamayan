import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import TownHousesOnly from "@/components/property/rental/townhouses";
import Head from "next/head";


const TownHousesPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Rental houses</title>
                <meta name="description" content="Tamayan Properties - All Rental houses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <TownHousesOnly />
            <Footer />
        </>
    )
}

export default TownHousesPage;