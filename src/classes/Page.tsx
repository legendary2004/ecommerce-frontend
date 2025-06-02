import { PropsWithChildren } from "react";
import Theme from "./Theme";
import MainNav from "../components/navigation/navbar/main_nav/MainNav";
import { primaryBgColors } from "../variables/styles/colors";
import MainFooter from "../components/footer/MainFooter";
import AiAssistant from "../components/modal/AiAssistant";

const Page: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Theme>
            <div className={`${primaryBgColors} py-5`}>
                <MainNav />
                {children}
                <MainFooter />
                <AiAssistant />
            </div>
        </Theme>
    )
}

export default Page