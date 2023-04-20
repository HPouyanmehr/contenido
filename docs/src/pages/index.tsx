import dynamic from 'next/dynamic';

// Custom Layout Components
import PageLayout from 'components/layout/Page';

// Custom Section Components
import LandingOne from 'components/section/landing/One';
import StylingOne from 'components/section/styling/One';
import StylingTwo from 'components/section/styling/Two';
import TipOne from 'components/section/tip/One';
import WhyContenido from 'components/section/why/One';
import FooterOne from 'components/section/footer/One';
import HowToInstall from 'components/section/install/HowToInstall';
const DemoOne = dynamic(() => import('components/section/demo/One'), {
  ssr: false,
});

const Home = () => {
  return (
    <PageLayout>
      <LandingOne />
      <DemoOne />
      <WhyContenido />
      <StylingOne />
      <TipOne />
      <StylingTwo />
      <HowToInstall />
      <FooterOne />
    </PageLayout>
  );
};

export default Home;
