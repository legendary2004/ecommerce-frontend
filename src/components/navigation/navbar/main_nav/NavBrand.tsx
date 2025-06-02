import { GrTechnology } from "react-icons/gr";
import { primaryTextColors } from "../../../../variables/styles/colors";

const NavBrand = () => {
    return (
        <div className={`${primaryTextColors} me-5 text-2xl flex items-center justify-center`}>
            TechStore 
            <GrTechnology className="w-10 h-10" />
            <div className="lg:hidden ms-1">

            </div>
        </div>
    )
}

export default NavBrand