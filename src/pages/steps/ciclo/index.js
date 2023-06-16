import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerStep from '../../../components/banner/step';
import BreadcrumbSteps from '../../../components/breadcrumbSteps';
import BreadcrumbStepsTwo from '../../../components/breadcrumbSteps/index-2';
import BannerFour from '../../../components/banner/index-4';
import Footer from '../../../components/layout/footer';
import { getAllItems } from '../../../lib/items-util';

function Ciclo({
    bannerFourItems,
    bannerSection,
    bannerTwoItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Ciclo - Quintal de Gaya</title>
                <meta
                    name="description"
                    content="Quintal de Gaya - Escola Montessori"
                />
            </Head>
            <BreadcrumbSteps title="Ciclo" />
            <BannerStep
                bannerTwoItems={bannerTwoItems}
                backgroundColor="#4c99f0"
                invertImage
            />
            <BannerFour
                bannerFourItems={bannerFourItems}
                bannerSection={bannerSection}
            />

            <BreadcrumbStepsTwo />
            <br />
            <br />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const bannerFourItems = [
        {
            slug: 'banner-01',
            id: 'banner-01',
            title: 'Meeting with <br/> our Clients',
            excerpt:
                'Meeting with our clients for all requirements for this project we start now',
            path: '/projects',
            dataCount: '01',
            dynamicClassName: 'item senary__bg',
            content: '',
        },
        {
            slug: 'banner-02',
            id: 'banner-02',
            title: 'Project <br/> Planning',
            excerpt:
                'Meeting with our clients for all requirements for this project we start now',
            path: '/projects',
            dataCount: '02',
            dynamicClassName: 'item secondary__bg',
            content: '',
        },
        {
            slug: 'banner-03',
            id: 'banner-03',
            title: 'Construction <br/> & Finalize',
            excerpt:
                'Meeting with our clients for all requirements for this project we start now',
            path: '/projects',
            dataCount: '03',
            dynamicClassName: 'item quinary__bg',
            content: '',
        },
        {
            slug: 'banner-04',
            id: 'banner-04',
            title: 'Hand over <br/> Project',
            excerpt:
                'Meeting with our clients for all requirements for this project we start now',
            path: '/projects',
            dataCount: '04',
            dynamicClassName: 'item primary__bg',
            content: '',
        },
    ];
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

Ciclo.propTypes = {
    bannerFourItems: PropTypes.instanceOf(Object).isRequired,
    bannerSection: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Ciclo;
