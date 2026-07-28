import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


interface Props {

    children: React.ReactNode;

}



function MainLayout({children}:Props){


    return (

        <>

            <Header />

            <main>

                {children}

            </main>


            <Footer />


        </>

    );

}


export default MainLayout;
