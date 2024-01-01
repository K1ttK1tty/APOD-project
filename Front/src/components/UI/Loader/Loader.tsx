import { FC } from 'react';
import style from './Loader.module.scss'
import Server from './Images/Server';
import PC from './Images/PC';
const Loader: FC = function () {

    return (
        <div className={style.LoaderWrapper}>
            <div className={style.Loader}>
                <Server/>
                <div className={style.dot1}></div><div className={style.dot2}></div><div className={style.dot3}></div>
                <PC/>
            </div>
        </div>
    )
};
export default Loader;