import Head from 'next/head';
import PropTypes from 'prop-types';
import { Gallery } from 'react-grid-gallery';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import { getAllItems } from '../../lib/items-util';
import Team from '../../components/team';
import BreadcrumbUnit from '../../components/breadcrumbUnit';

const images = [
    {
        src: '/images/matriz/estrutura01.jpg',
        width: 500,
        height: 500,
    },
    {
        src: '/images/matriz/estrutura05.jpg',
        width: 500,
        height: 500,
    },

    {
        src: '/images/matriz/estrutura03.jpg',
        width: 500,
        height: 500,
    },
    {
        src: '/images/matriz/estrutura06.jpg',
        width: 500,
        height: 500,
    },
    {
        src: '/images/matriz/estrutura02.jpg',
        width: 500,
        height: 500,
    },
    {
        src: '/images/matriz/estrutura04.jpg',
        width: 500,
        height: 500,
    },
];
function OurClients({ teamSectionItems, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Matriz - Quintal de Gaya</title>
                <meta
                    name="description"
                    content="Quintal de Gaya - Escola Montessori"
                />
            </Head>
            <BreadcrumbUnit
                subTitle="Infantil Fundamental"
                title="Matriz"
                desc="Lorem ipsum dolor sit amet. Et tempora officiis hic consequatur autem qui numquam perferendis ut earum consequatur eum."
            />
            <Team teamSectionItems={teamSectionItems} />
            <Gallery images={images} rowHeight={450} />
            <br />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const teamSectionItems = [
        {
            slug: 'team-info',
            id: 'team-section-01',
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem ipsum dolor sit amet. Et tempora officiis hic consequatur autem qui numquam perferendis ut earum consequatur eum accusamus explicabo qui tenetur nisi quo doloremque atque.',
        },
    ];
    const newsletterItems = [
        {
            slug: 'newsletter-01',
            id: 'newsletter-01',
            title: 'Matrículas Abertas',
            btnPrimaryText: 'WhatsApp',
            content: 'Dê ao seu filho o melhor começo possível',
        },
    ];
    const footerItems = getAllItems('footer');

    return {
        props: {
            teamSectionItems,
            newsletterItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
