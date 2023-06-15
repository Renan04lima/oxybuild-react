import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './banner-3.module.scss';

function BannerThree({ bannerThreeItems }) {
    return (
        <div className="banner_area">
            <Container>
                <Row className="g-30">
                    {bannerThreeItems?.map((bannerThreeItem) => (
                        <Col
                            lg={{ span: 4 }}
                            md={{ span: 6 }}
                            key={bannerThreeItem.id}
                        >
                            <div
                                className={bannerThreeItem.dynamicClassName
                                    .split(' ')
                                    .map((item) => classes[item])
                                    .join(' ')}
                            >
                                <div
                                    className={classes.content}
                                >
                                    <h2 className={classes.title}>
                                        {bannerThreeItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {bannerThreeItem?.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

BannerThree.propTypes = {
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerThree;
