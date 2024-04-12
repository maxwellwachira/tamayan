import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import WarehouseOnly from "@/components/property/rental/warehouse";
import Head from "next/head";


const WareHousesPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All rental Ware Houses</title>
                <meta name="description" content="Tamayan Properties - All rental Ware Houses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <WarehouseOnly />
            <Footer />
        </>
    )
}

export default WareHousesPage;