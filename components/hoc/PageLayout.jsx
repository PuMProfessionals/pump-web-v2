import Image from "next/image";
import styled from "styled-components";
import { Navbar } from "../Navbar"
import { media } from "../../utils";

export const PageLayout = ({ children }) => (
    <div> 
        <Navbar />
        {children}
    </div>
);

const Wrapper = styled.div`
   
`;
