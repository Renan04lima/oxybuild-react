import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import classes from './team.module.scss';

function Team({ teamSectionItems, settings }) {
    settings = {
        spaceBetween: 30,
        pagination: false,
        slidesPerView: 4,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <div className={classes.area}>
            <Container>
                {teamSectionItems?.map((item) => (
                    <div className={classes.section} key={item.id}>
                        <div className={classes.section__wrap}>
                            <div className={classes.section_title}>
                                <span>{item?.subTitle}</span>
                                <h2>{item?.title}</h2>
                            </div>
                            <div className={classes.section_desc}>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.desc,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
}

Team.propTypes = {
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default Team;
