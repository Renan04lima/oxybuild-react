import Head from 'next/head';
import PropTypes from 'prop-types';
import Error404 from '../components/error-404';
import Breadcrumb from '../components/breadcrumb';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';
import Footer from '../components/layout/footer';

function Error404Page({ newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Error 404 - Quintal de Gaya</title>
                <meta
                    name="description"
                    content="Quintal de Gaya - Escola Montessori"
                />
            </Head>
            <Breadcrumb
                subTitle="Página não encontrada"
                title="404"
                desc="Quintal de Gaya - Escola Montessori"
            />
            <Error404 />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            newsletterItems,
            footerItems,
        },
    };
}

Error404Page.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Error404Page;
