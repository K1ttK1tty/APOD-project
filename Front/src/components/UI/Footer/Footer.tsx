import React, { FC } from 'react';
import cl from './Footer.module.scss'
import GitHubIcon from './Icon/GitHubIcon';
import NASAIcon from './Icon/NasaIcon';
const Footer: FC = function () {
    return (
        <footer className={cl.footer}>
            <div className={cl.footerWrapper}>

                <div className={cl.footerContent}>
                    <div className={cl.nasaOfficial}><NASAIcon /> Nasa Official website: <a target='_blank' href="https://www.nasa.gov/">https://www.nasa.gov/</a> </div>
                    <div className={cl.links}>
                        <a className={cl.gitIcon} href="#" target="_blank"><GitHubIcon /></a>
                        <div className={cl.email}> По вопросам обращаться: aaaaaaaaaaaaa@mail.ru</div>
                    </div>
                </div>

            </div>
            <p className={cl.authorship}>*Контент на данной странице не является объектом авторского права разработчика.
                Контент используется исключительно в качестве ознакомления и взят из открытых источников.
            </p>
        </footer>
    )
};
export default Footer;