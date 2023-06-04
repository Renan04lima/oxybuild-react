import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Contact - Quintal de Gaya</title>
                <meta
                    name="description"
                    content="Quintal de Gaya - Escola Montessori"
                />
            </Head>
            <Breadcrumb
                subTitle="Contact us"
                title="Get in Touch"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <Contact contactItems={contactItems} />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            newsletterItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
