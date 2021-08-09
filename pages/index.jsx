import Head from "next/head";
import {
	Video,
	SectionWrapper,
} from "../components";
import { PageLayout } from "../sections/hoc";
const BackgroundGraphicPath = "/home/background-large.svg";
const MobileGraphicPath = "/home/background-small.svg";
import {
  TopSection,
  WhatsHappening,
  ImpactSection,
  ContactSection,
} from "../sections/home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP | Home</title>
      </Head>
      <PageLayout>
				<SectionWrapper
					backgroundPath={BackgroundGraphicPath}
					mobilePath={MobileGraphicPath}
					mobileThreshold={700}
				>
					<TopSection />
				</SectionWrapper>
        <WhatsHappening />
        <Video
          embedId="f5jsJWl5WS0"
          titleText="Who Are We?"
          descriptionText="Founded in March 2018, Prospective Medical Professionals or PuMP for short is a Canadian charity founded by youth, led by youth. Our objective is to help aspiring life and health sciences students better prepare for a future in the biology by connecting them to real life experiences."
        />
        <ImpactSection />
        <ContactSection />
      </PageLayout>
    </div>
  );
}
