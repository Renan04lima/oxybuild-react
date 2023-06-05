import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
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
                                    href="https://whatsa.me/5516996157676/?t=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20matr%C3%ADculas."
                                    target="_blank"
                                    className={`${classes.btn} ${classes.btn_whatsapp} ${classes.btn_hover__whatsapp}`}
                                >
                                    <FaWhatsapp className={classes.icon} />
                                    <span> </span>
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
