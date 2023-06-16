import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerStep from '../../components/banner/step';
import BreadcrumbSteps from '../../components/breadcrumbSteps';
import BreadcrumbStepsTwo from '../../components/breadcrumbSteps/index-2';
import BannerFour from '../../components/banner/index-4';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';

function OurClients({
    bannerFourItems,
    bannerSection,
    bannerTwoItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Materna - Quintal de Gaya</title>
                <meta
                    name="description"
                    content="Quintal de Gaya - Escola Montessori"
                />
            </Head>
            <BreadcrumbSteps title="Materna" />
            <BannerStep bannerTwoItems={bannerTwoItems} />
            <BannerFour
                bannerFourItems={bannerFourItems}
                bannerSection={bannerSection}
            />

            <BreadcrumbStepsTwo />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const bannerFourItems = getAllItems('banner-4');
    const bannerSection = getAllItems('banner-section');
    const bannerTwoItems = [
        {
            slug: 'banner-01',
            id: 'banner-02',
            image: '/images/banner/medium-size/2-1-939x666.jpg',
            alt: 'Banner Image',
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem ipsum dolor sit amet. Et tempora officiis hic consequatur autem qui numquam perferendis ut earum consequatur eum accusamus explicabo qui tenetur nisi quo doloremque atque.',
            stickerImage: '/images/banner/sticker/1.png',
            stickerAlt: 'Banner Sticker',
            content: '',
        },
    ];
    const footerItems = getAllItems('footer');

    return {
        props: {
            bannerFourItems,
            bannerSection,
            bannerTwoItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    bannerFourItems: PropTypes.instanceOf(Object).isRequired,
    bannerSection: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
