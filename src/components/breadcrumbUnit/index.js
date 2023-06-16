import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import classes from './breadcrump.module.scss';

function BreadcrumbUnit({ subTitle, title, desc }) {
    return (
        <div className={classes.page_banner__bg}>
            <Container>
                <div className={classes.page_content}>
                    <span className={classes.page_subtitle}>{subTitle}</span>
                    <h1 className={classes.page_title}>{title}</h1>
                    <p className={classes.page_desc}>{desc}</p>
                </div>
            </Container>
        </div>
    );
}

BreadcrumbUnit.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default BreadcrumbUnit;
