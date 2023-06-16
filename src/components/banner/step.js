import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './banner.step.module.scss';

function BannerStep({ bannerTwoItems }) {
    return (
        <div className={classes.bg}>
            <Container fluid className="px-0">
                {bannerTwoItems?.map((bannerTwoItem) => (
                    <Row
                        className={`${classes.wrap} g-0`}
                        key={bannerTwoItem.id}
                    >
                        <Col lg={{ span: 6 }}>
                            <div className={classes.with__sticker}>
                                <div className={classes.content}>
                                    <h2
                                        className={classes.title}
                                        dangerouslySetInnerHTML={{
                                            __html: bannerTwoItem.title,
                                        }}
                                    />
                                    <p className={classes.desc}>
                                        {bannerTwoItem?.desc}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.image}>
                                <img
                                    src={bannerTwoItem?.image}
                                    alt={bannerTwoItem?.alt}
                                    className="img-full"
                                />
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

BannerStep.propTypes = {
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerStep;
