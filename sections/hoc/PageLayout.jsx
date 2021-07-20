import { useRouter } from "next/router";
import styled from "styled-components";
import { Navbar } from "../Navbar"
import { media } from "../../utils";

export const PageLayout = ({ children, ...props }) => {
    const router = useRouter()
    const pathName = router.route;
    let mainPath = "/";
    if (pathName !== "/") {
        mainPath = pathName.split("/")[1];
    }
    console.log(mainPath);

    return (
        <div {...props}> 
            <Navbar path={mainPath} />
            {children}
        </div>
    );
};
