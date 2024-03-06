import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import TownHousesOnly from "@/components/property/townhouses";
import Head from "next/head";


const TownHousesPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Townhouses</title>
                <meta name="description" content="Tamayan Properties - All Townhouses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <TownHousesOnly />
            <Footer />
        </>
    )
}

export default TownHousesPage;