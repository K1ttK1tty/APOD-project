import { ComponentStory, ComponentMeta } from '@storybook/react';
import Archive from '../../pages/Archive';
import { setupStore } from '../../store/store';
import { helper } from '../helper';

export default {
    title: 'Pages/Archive',
    component: Archive,
    parameters: {
        layout: 'fullscreen',
        screenshot: {
            delay: 200,
        }
    },
} as ComponentMeta<typeof Archive>;

const video = {
    date: '2021-02-03',
    url: 'https://www.youtube.com/embed/V0UBZh6Hf-s?rel=0',
    explanation: 'Был ли самый старый известный камень на Земле найден на Луне? Вполне возможно. История начинается с лунной миссии Аполлона-14. Лунный образец 14321, большой камень, найденный в кратере Конуса астронавтом Аланом Шепардом, при анализе на Земле обнаружил фрагмент, который гораздо лучше соответствовал земным камням, чем другие лунные камни. Еще более удивительно, что возраст этого участка горной породы недавно был определен возрастом 4 миллиарда лет, что делает его старше, с точностью до неопределенности измерений, чем любая другая горная порода, когда-либо найденная на Земле. В настоящее время ведущая гипотеза гласит, что в результате удара древней кометы или астероида земные породы попали в Солнечную систему, некоторые из них упали обратно на Луну, смешались с нагретым лунным грунтом и другими породами, охладились и повторно фрагментировались. На видео показан внутренний рентгеновский снимок 14321, показывающий несколько срезов с заметно разным химическим составом. Лунные породы будут продолжать изучать, чтобы узнать более полную историю Луны, Земли и ранней Солнечной системы. В пятницу исполняется 50 лет со дня высадки космического корабля «Аполлон-14» на Луну.',
    title: 'Аполлон-14: вид с Антареса',
    copyright: '',
    media_type: 'video'
}

const data = { //
    isFormHandlerError: false,
    ChosenYear: '2023',
    ChosenMonth: '3',
    ChosenDay: '29',
    isLoading: false,
    error: '',
    chosenData: {
        date: '2023-03-29',
        url: 'https://apod.nasa.gov/apod/image/2303/DolphinReef_Roig_960.jpg',
        explanation: 'Какая  звезда создала этот пузырь? Это была не яркая звезда справа от пузыря. И это также не был гигантский космический дельфин. Это была звезда в центре синей туманности, знаменитая звезда Вольфа-Райе. Звезды Вольфа-Райе в целом имеют массу, более чем в 20 раз превышающую массу нашего Солнца, и излучают быстрые частицы ветра, которые могут создавать легендарные туманности. В этом случае получившийся звездный пузырь охватывает более 60 световых лет, ему около 70 000 лет, и он выглядит как голова дельфина. Названный Sh2-308 и получивший название Туманность Голова Дельфина, газовый шар находится на расстоянии около 5000 световых лет и покрывает столько же неба, сколько и полная Луна, хотя он намного тусклее. Близлежащие облака с красным оттенком в левой части показанного изображения могут быть обязаны своим свечением и формой энергичному свету, излучаемому той же звездой Вольфа-Райе.',
        title: 'Sh2-308: Звездный пузырь в форме дельфина',
        copyright: 'Aleix RoigAstroCatInfo',
        media_type: 'image'
    }
}
const videoState = { //
    isFormHandlerError: false,
    ChosenYear: '2021',
    ChosenMonth: '2',
    ChosenDay: '3',
    isLoading: false,
    error: '',
    chosenData: video
}

const storeWithoutData = setupStore()
const storeWithData = setupStore({ ArchiveReducer: data })
const storeWithVideo = setupStore({ ArchiveReducer: videoState })

const TemplateWithoutData: ComponentStory<typeof Archive> = () => helper(storeWithoutData, <Archive />)
export const withoutData = TemplateWithoutData.bind({})

const TemplateWithData: ComponentStory<typeof Archive> = () => helper(storeWithData, <Archive />)
export const withData = TemplateWithData.bind({})

const TemplateWithVideo: ComponentStory<typeof Archive> = () => helper(storeWithVideo, <Archive />)
export const withVideo = TemplateWithVideo.bind({})