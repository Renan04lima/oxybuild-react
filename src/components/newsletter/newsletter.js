import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './newsletter.module.scss';

function Newsletter({ newsletterItems }) {
    return (
        <div className={`${classes.bg}`}>
            <Container>
                <Row>
                    {newsletterItems?.map((newsletterItem) => (
                        <Col lg={{ span: 12 }} key={newsletterItem.id}>
                            <div className={classes.item}>
                                <h2 className={classes.title}>
                                    {newsletterItem?.title}
                                </h2>
                                <Link
                                    href="/contact"
                                    className={`${classes.btn} ${classes.btn_whatsapp} ${classes.btn_hover__whatsapp}`}
                                >
                                    {newsletterItem?.btnPrimaryText}
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

Newsletter.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
};

export default Newsletter;
