import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import classes from './breadcrump.module.scss';

function BreadcrumbSteps({ title }) {
    return (
        <div className={classes.page_banner__bg}>
            <Container>
                <div className={classes.page_content}>
                    <h1 className={classes.page_title}>{title}</h1>
                </div>
            </Container>
        </div>
    );
}

BreadcrumbSteps.propTypes = {
    title: PropTypes.string,
};

export default BreadcrumbSteps;
