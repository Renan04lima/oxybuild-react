import PropTypes from 'prop-types';
import Link from 'next/link';

function ProjectSlider({ project }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;
    const linkPath = `/projects/${project?.slug}`;

    return (
        <div className="project-item">
            <Link href={linkPath} className="project-img">
                <img src={imagePath} alt={project?.title} />
            </Link>
        </div>
    );
}

ProjectSlider.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSlider;
