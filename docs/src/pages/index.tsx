// Custom Layout Components
import PageLayout from 'components/layout/Page';
import DemoOne from 'components/section/demo/One';
import FooterOne from 'components/section/footer/One';
import HowToInstall from 'components/section/install/HowToInstall';

// Custom Section Components
import LandingOne from 'components/section/landing/One';
import StylningOne from 'components/section/styling/One';
import StylingTwo from 'components/section/styling/Two';
import TipOne from 'components/section/tip/One';
import WhyContenido from 'components/section/why/One';

const Home = () => {
  return (
    <PageLayout>
      <LandingOne />
      <DemoOne />
      <WhyContenido />
      <StylningOne />
      <TipOne />
      <StylingTwo />
      <HowToInstall />
      <FooterOne />
    </PageLayout>
  );
};

export default Home;
