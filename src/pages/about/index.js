import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../../components/about';
import BannerThree from '../../components/banner/index-3';
import LatestProject from '../../components/home-page/latest-project';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import Team from '../../components/team';
import { getAllItems, getFeaturedItems } from '../../lib/items-util';
import AboutYears from '../../components/about/about-years';

function AboutPage({
    aboutYears,
    bannerThreeItems,
    projects,
    projectSectionItems,
    projectSectionItems2,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>About Us - Quintal de Gaya</title>
                <meta
                    name="description"
                    content="Quintal de Gaya - Escola Montessori"
                />
            </Head>
            <AboutYears aboutYears={aboutYears} />

            <BannerThree bannerThreeItems={bannerThreeItems} />
            <br />

            <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems}
            />
            <br />
            <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems2}
            />
            <br />

            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutYears = getAllItems('about-years');
    const bannerThreeItems = getAllItems('banner-3');
    const projectSectionItems = getAllItems('project-section');
    const projectSectionItems2 = getAllItems('project-section-2');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutYears,
            bannerThreeItems,
            projectSectionItems,
            projectSectionItems2,
            projects: LatestProject,
            newsletterItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    aboutYears: PropTypes.instanceOf(Object).isRequired,
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems2: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
