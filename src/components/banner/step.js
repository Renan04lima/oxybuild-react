import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './banner.step.module.scss';

function BannerStep({ bannerTwoItems, backgroundColor, invertImage }) {
    return (
        <div
            className={classes.bg}
            style={{
                backgroundColor,
            }}
        >
            <Container fluid className="px-0">
                {bannerTwoItems?.map((bannerTwoItem) => (
                    <Row
                        className={`${classes.wrap} g-0`}
                        key={bannerTwoItem.id}
                    >
                        {!invertImage && (
                            <Col lg={{ span: 6 }}>
                                <div className={classes.image}>
                                    <img
                                        src={bannerTwoItem?.image}
                                        alt={bannerTwoItem?.alt}
                                        className="img-full"
                                    />
                                </div>
                            </Col>
                        )}
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

                        {invertImage && (
                            <Col lg={{ span: 6 }}>
                                <div className={classes.image}>
                                    <img
                                        src={bannerTwoItem?.image}
                                        alt={bannerTwoItem?.alt}
                                        className="img-full"
                                    />
                                </div>
                            </Col>
                        )}
                    </Row>
                ))}
            </Container>
        </div>
    );
}

BannerStep.propTypes = {
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    backgroundColor: PropTypes.string,
    invertImage: PropTypes.bool,
};

export default BannerStep;
