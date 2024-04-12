import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import WarehouseOnly from "@/components/property/warehouse";
import Head from "next/head";


const WareHousesPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Ware Houses</title>
                <meta name="description" content="Tamayan Properties - All Ware Houses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <WarehouseOnly />
            <Footer />
        </>
    )
}

export default WareHousesPage;