import Herosection from "../components/herosection";
import Feature from "../components/feature";
import Companyoverview from "../components/companyoverview";
import Joinus from "../components/joinus";
import Contactus from "../components/contactus";


const Landingpage = () => {
    return (
        <div className="flex flex-col w-full">
            <Herosection />
            <Feature />
            <Companyoverview />
            <Joinus />
            <Contactus />
        </div>
    )
}

export default Landingpage;
