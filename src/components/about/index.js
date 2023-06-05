import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import classes from './about.module.scss';

function AboutOne({ aboutItems }) {
    return (
        <div className={classes.area}>
            {aboutItems?.map((aboutItem) => {
                const CheckIcon = FaIcons[aboutItem?.checkIcon];
                return (
                    <Container key={aboutItem.id}>
                        <div className={classes.section}>
                            <div className={classes.section__wrap}>
                                <div className={classes.section__title}>
                                    <span>{aboutItem?.sectionSubtitle}</span>
                                    <h2>{aboutItem?.sectionTitle}</h2>
                                </div>
                                <p
                                    className={classes.section__desc}
                                    dangerouslySetInnerHTML={{
                                        __html: aboutItem.sectionDesc,
                                    }}
                                />
                            </div>
                        </div>
                    </Container>
                );
            })}
        </div>
    );
}

AboutOne.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutOne;
