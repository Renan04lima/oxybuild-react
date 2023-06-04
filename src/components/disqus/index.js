import { DiscussionEmbed } from 'disqus-react';
import classes from './index.module.scss';

function DisqusForm() {
    const disqusShortname = 'Quinta de Gaya';

    const disqusConfig = {
        url: 'https://quintaldegaya.com/',
        identifier: '123',
        title: 'quintal-post',
    };
    return (
        <div className={classes.area}>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    );
}

export default DisqusForm;
