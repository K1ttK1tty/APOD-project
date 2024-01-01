import { FC, useState, useEffect, useRef } from 'react';
import cl from './Preloader.module.scss'
import '../../../styles/index.scss'
import FOG from '../../../../node_modules/vanta/dist/vanta.fog.min.js'
import * as THREE from 'three'
import { stylesForFOG } from '../../../GlobalConsts/GlobalConsts';
import { getRemovePreloader } from '../../../Functions/getRemovePreloader';
//redux
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
const Preloader: FC = function () {
    const dispatch = useAppDispatch()
    const isPreloader = useAppSelector(state => state.MobileMenu.isPreloader)

    const [vantaEffect, setVantaEffect] = useState<any>(null); //for destroy VANTA effect
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const preloaderStyles = isPreloader ? cl.preloader : [cl.preloader, cl.remove].join(' ');

    useEffect(() => {
        if (!vantaEffect && isPreloader) setVantaEffect(FOG({ el: vantaRef.current, THREE, ...stylesForFOG }));

        return () => { if (vantaEffect) vantaEffect.destroy() }
    }, [vantaEffect]);

    function removePreloader(): void {
        getRemovePreloader(setVantaEffect, dispatch)
    };

    function onkeyDown(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            removePreloader()
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', removePreloader)
        document.addEventListener('keydown', onkeyDown)

        return () => {
            document.removeEventListener('keydown', onkeyDown)
            document.removeEventListener('scroll', removePreloader)
        }
    }, [])

    return (
        <div className={preloaderStyles}>
            <div className={cl.preloaderWrapper} ref={vantaRef} >
                <div className={cl.divContent}><span></span> Наши позёрства, наша воображаемая значимость,
                    иллюзия о нашем привилегированном положении во Вселенной пасуют перед этой точкой бледного света.
                    Наша планета — одинокая крупинка в огромной окружающей космической тьме.
                    В нашей безвестности, во всей этой бесконечности, нет и намёка на то, что помощь
                    придёт откуда-то извне, чтобы спасти нас от самих себя.
                </div>
                <button
                    autoFocus={true}
                    aria-label='Перейти к главной странице'
                    onClick={removePreloader}
                    className={cl.arrow}>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
};
export default Preloader;