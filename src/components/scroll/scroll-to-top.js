import { useEffect, useState } from 'react';
import { FaArrowUp, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import classes from './scroll-to-top.module.scss';

export function ScrollToTop() {
    const [isVisable, setIsVisable] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisable(true);
        } else {
            setIsVisable(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    const openWhatsAppChat = () => {
        window.open('https://wa.me/5516996157676', '_blank');
    };

    const openInstagramProfile = () => {
        window.open('https://www.instagram.com/quintaldegaya/', '_blank');
    };

    const openYoutubeProfile = () => {
        window.open('https://www.youtube.com/@quintaldegaya1333', '_blank');
    };

    return (
        <div>
            <button
                type="button"
                onClick={scrollToTop}
                className={`${classes.scroll_to__top} ${
                    isVisable ? 'opacity-1' : 'opacity-0 '
                }`}
                aria-label="Right Align"
            >
                <FaArrowUp aria-hidden="true" />
            </button>
            <button
                type="button"
                onClick={openWhatsAppChat}
                className={`${classes.clickzap} ${
                    isVisable ? 'opacity-1' : 'opacity-0 '
                }`}
            >
                <FaWhatsapp aria-hidden="true" />
            </button>

            <button
                type="button"
                onClick={openInstagramProfile}
                className={`${classes.clickinsta} ${
                    isVisable ? 'opacity-1' : 'opacity-0 '
                }`}
            >
                <FaInstagram aria-hidden="true" />
            </button>

            <button
                type="button"
                onClick={openYoutubeProfile}
                className={`${classes.clicktube} ${
                    isVisable ? 'opacity-1' : 'opacity-0 '
                }`}
            >
                <FaYoutube aria-hidden="true" />
            </button>
        </div>
    );
}
