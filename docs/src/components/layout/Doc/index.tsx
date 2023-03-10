// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';

// Custom Common Components
import Header from 'components/common/Header';

// Custom Types
import Head from 'next/head';
import DocSidebar from 'components/common/Sidebar/Doc';
import Box from 'components/core/Box';
import AppBar from 'components/core/AppBar';
import Toolbar from 'components/core/Toolbar';
import MenuToggler from 'components/common/IconButton/MenuToggler';
import Logo from 'components/common/Link/Logo';
import GitHubIconButtonLink from 'components/common/Link/GitHub';
import Divider from 'components/core/Divider';
import DocHeader from 'components/common/Header/Doc';
import BodyOne from 'components/core/BodyOne';
import FooterOne from 'components/section/footer/One';
import OnThisPage from 'components/common/Sidebar/OnThisPage';
import DocsFooter from 'components/section/footer/Doc';
export interface PageLayoutProps {
  children?: ReactNode;
  page?: {
    title?: string;
  };
}

const DocumentLayout: FC<PageLayoutProps> = (props) => {
  // Props
  const { children, page } = props;

  const drawerWidth = 272;
  return (
    <>
      <Head>
        <title>{page?.title || 'Contenido'}</title>
      </Head>
      <DocHeader />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <DocSidebar />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box component='main'>
            <AppBarSpacer />
            <h1>Contenido - Overview</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              blanditiis! Numquam fugit accusamus cum totam doloremque corporis?
              Sint, architecto at.
            </p>
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              adipisci similique non dolor vero voluptatum doloribus iure minima
              reiciendis sequi ad dolorum sed officiis ex enim quaerat molestias
              odit veritatis, placeat, eligendi voluptate. Aliquid laborum,
              doloribus laudantium totam eligendi aliquam voluptates inventore
              qui facilis nam debitis aut blanditiis cumque similique esse est
              enim magnam, odit ad dicta quo nobis sequi, quaerat assumenda.
              Laudantium rem porro hic corrupti id ipsam aut neque perferendis,
              beatae labore veritatis facilis maiores architecto error deserunt.
              Qui necessitatibus nesciunt tenetur tempore ea. Ullam a repellat
              consectetur veritatis sequi porro animi saepe possimus delectus.
              Commodi, tenetur accusamus.
            </p>
            <h2>Why us?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              impedit quo tempora nobis culpa. Dolorum ratione fuga, consectetur
              explicabo commodi natus consequatur praesentium magni soluta odit
              quo perferendis voluptatem. Distinctio rem voluptate dignissimos.
              Praesentium temporibus quae quos eius. Esse labore repellat ipsam!
              Dignissimos, odio doloremque! Tempora, magnam! Accusamus magnam
              rerum nostrum quam illum dolorem quaerat, quas nesciunt vel quod
              quibusdam qui delectus sit excepturi suscipit dolores a? Amet
              voluptas eligendi ratione adipisci itaque maxime enim dolor
              impedit nobis exercitationem repellendus rem, quas dignissimos
              minima fugit harum tempore totam, aspernatur laboriosam saepe
              assumenda. Reprehenderit veniam est esse, repellendus, repellat
              tempore quidem distinctio quas velit dolorem eos? Voluptate error
              expedita ipsum deserunt ullam, quam nesciunt magnam perspiciatis
              sunt asperiores placeat fuga ducimus fugiat voluptas animi,
              quibusdam repudiandae. Voluptatem alias sed consectetur facere
              quis mollitia, sint reprehenderit quibusdam numquam molestias
              beatae totam consequatur molestiae quo, ex maiores consequuntur ea
              soluta. Magnam, sit enim!
            </p>
            <h2>Features</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              facilis possimus eveniet vitae debitis? Eos in vel nostrum nobis,
              illo earum adipisci omnis, consequatur aspernatur doloribus
              assumenda repellendus nemo necessitatibus perferendis accusantium
              fuga veniam. Animi, adipisci! Unde aliquid, beatae qui dolorem
              accusamus excepturi voluptatibus architecto ut laboriosam
              accusantium vel! Praesentium!
            </p>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Quae, veniam dolor.</li>
              <li>Animi</li>
              <li>consectetur</li>
              <li>architecto</li>
              <li>accusantium</li>
            </ul>
            {children}
          </Box>
          <Box sx={{ minWidth: '17rem' }} />
          <OnThisPage />
        </Box>
      </Box>
      <DocsFooter />
    </>
  );
};

export default DocumentLayout;
