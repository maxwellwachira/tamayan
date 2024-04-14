import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import TownHousesOnly from "@/components/property/furnished/townhouses";
import Head from "next/head";


const TownHousesPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Furnished houses</title>
                <meta name="description" content="Tamayan Properties - All Furnished houses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <TownHousesOnly />
            <Footer />
        </>
    )
}

export default TownHousesPage;