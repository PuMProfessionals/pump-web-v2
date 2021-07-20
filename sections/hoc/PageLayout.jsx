import { useRouter } from "next/router";
import styled from "styled-components";
import { Navbar } from "../Navbar"
import { Footer } from "../Footer";
import { media } from "../../utils";

export const PageLayout = ({ children, ...props }) => {
    // Logic for highlighting in same path
    const router = useRouter()
    const pathName = router.route;
    let mainPath = "";
    if (pathName !== "/") {
        mainPath = pathName.split("/")[1];
    }

    return (
        <div {...props}> 
            <Navbar path={mainPath} />
            {children}
            <Footer path={mainPath} />
        </div>
    );
};
