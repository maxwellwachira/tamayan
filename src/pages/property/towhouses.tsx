import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Head from "next/head";


const TownhousesPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Townhouses</title>
                <meta name="description" content="Tamayan Properties - All Townhouses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
          
            <Footer />
        </>
    )
}

export default TownhousesPage;