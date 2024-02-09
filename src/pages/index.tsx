import Header from "@/components/common/header";
import Head from "next/head";

const HomePage = () => {

  return (
    <>
      <Head>
        <title>Tamayan Properties | Home Page</title>
        <meta name="description" content="Tamayan Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  )
}

export default HomePage;