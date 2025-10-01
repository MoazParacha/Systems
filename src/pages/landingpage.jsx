import Herosection from "../componentes/herosection";
import Services from "../componentes/services";
import Feature from "../componentes/feature";
import Companyoverview from "../componentes/companyoverview";
import Joinus from "../componentes/joinus";
import Contactus from "../componentes/contactus";
import Footer from "../componentes/fotter";

const Landingpage = () => {
    return (
        <div className="flex flex-col w-full">
            <Herosection />
            <Services />
            <Feature />
            <Companyoverview />
            <Joinus />
            <Contactus />
            <Footer />
        </div>
    )
}

export default Landingpage;
