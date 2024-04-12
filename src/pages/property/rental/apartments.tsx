import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ApartmentsOnly from "@/components/property/onsale/apartments";
import Head from "next/head";


const ApartmentsPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All  Rental Apartments</title>
                <meta name="description" content="Tamayan Properties - All Rental Apartments" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <ApartmentsOnly />
            <Footer />
        </>
    )
}

export default ApartmentsPage;