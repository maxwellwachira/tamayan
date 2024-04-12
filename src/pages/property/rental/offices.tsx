import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import OfficesOnly from "@/components/property/rental/offices";
import Head from "next/head";


const OfficesPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Rental Offices</title>
                <meta name="description" content="Tamayan Properties - All Rental Offices" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <OfficesOnly />
            <Footer />
        </>
    )
}

export default OfficesPage;