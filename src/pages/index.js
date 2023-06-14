import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../components/about';
import BannerTwo from '../components/banner/index-2';
import Hero from '../components/home-page/hero';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import Team from '../components/team';
import Testimonial from '../components/testimonial';
import { getAllItems, getFeaturedItems } from '../lib/items-util';

function HomePage({
    heroItems,

    homeItems,

    bannerTwoItems,
    teamItems,
    teamSectionItems,
    testimonialItems,
    testimonialSectionItems,

    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Home - Quintal de Gaya</title>
                <meta
                    name="description"
                    content="Quinta de Gaya - Desenvolvimento integral e humano da criança"
                />
            </Head>
            <Hero heroItems={heroItems} />
            <Newsletter newsletterItems={newsletterItems} />
            <AboutOne aboutItems={homeItems} />
            <BannerTwo bannerTwoItems={bannerTwoItems} />
            <Team teamItems={teamItems} teamSectionItems={teamSectionItems} />
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            />

            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const bannerItems = getAllItems('banner');
    const homeItems = getAllItems('home');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const brandItems = getAllItems('brand');
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const bannerTwoItems = getAllItems('banner-2');
    const teamItems = getAllItems('team');
    const teamSectionItems = getAllItems('team-section');
    const testimonialItems = getAllItems('testimonial');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const blogSectionItems = getAllItems('blog-section');
    const blogs = getAllItems('blogs');
    const LatestBlog = getFeaturedItems(blogs);
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            heroItems,
            bannerItems,
            homeItems,
            projectSectionItems,
            projects: LatestProject,
            brandItems,
            services: HomePageServices,
            serviceSectionItems,
            bannerTwoItems,
            teamItems,
            teamSectionItems,
            testimonialItems,
            testimonialSectionItems,
            blogSectionItems,
            blogs: LatestBlog,
            newsletterItems,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    homeItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
