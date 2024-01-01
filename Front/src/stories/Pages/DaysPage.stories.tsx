import { ComponentStory, ComponentMeta } from '@storybook/react';
import DaysPage from '../../pages/DayPage';
import { setupStore } from '../../store/store';
import { helper } from '../helper';
export default {
    title: 'Pages/DaysPage',
    component: DaysPage,
    parameters: {
        layout: 'fullscreen',
    },

} as ComponentMeta<typeof DaysPage>;

const StateWithvideo = {
    date: '2021-02-03',
    url: 'https://www.youtube.com/embed/V0UBZh6Hf-s?rel=0',
    explanation: 'Был ли самый старый известный камень на Земле найден на Луне? Вполне возможно. История начинается с лунной миссии Аполлона-14. Лунный образец 14321, большой камень, найденный в кратере Конуса астронавтом Аланом Шепардом, при анализе на Земле обнаружил фрагмент, который гораздо лучше соответствовал земным камням, чем другие лунные камни. Еще более удивительно, что возраст этого участка горной породы недавно был определен возрастом 4 миллиарда лет, что делает его старше, с точностью до неопределенности измерений, чем любая другая горная порода, когда-либо найденная на Земле. В настоящее время ведущая гипотеза гласит, что в результате удара древней кометы или астероида земные породы попали в Солнечную систему, некоторые из них упали обратно на Луну, смешались с нагретым лунным грунтом и другими породами, охладились и повторно фрагментировались. На видео показан внутренний рентгеновский снимок 14321, показывающий несколько срезов с заметно разным химическим составом. Лунные породы будут продолжать изучать, чтобы узнать более полную историю Луны, Земли и ранней Солнечной системы. В пятницу исполняется 50 лет со дня высадки космического корабля «Аполлон-14» на Луну.',
    title: 'Аполлон-14: вид с Антареса',
    copyright: '',
    media_type: 'video'
}
const StateWithImage = {
    date: '2023-03-29',
    url: 'https://apod.nasa.gov/apod/image/2303/DolphinReef_Roig_960.jpg',
    explanation: 'Какая  звезда создала этот пузырь? Это была не яркая звезда справа от пузыря. И это также не был гигантский космический дельфин. Это была звезда в центре синей туманности, знаменитая звезда Вольфа-Райе. Звезды Вольфа-Райе в целом имеют массу, более чем в 20 раз превышающую массу нашего Солнца, и излучают быстрые частицы ветра, которые могут создавать легендарные туманности. В этом случае получившийся звездный пузырь охватывает более 60 световых лет, ему около 70 000 лет, и он выглядит как голова дельфина. Названный Sh2-308 и получивший название Туманность Голова Дельфина, газовый шар находится на расстоянии около 5000 световых лет и покрывает столько же неба, сколько и полная Луна, хотя он намного тусклее. Близлежащие облака с красным оттенком в левой части показанного изображения могут быть обязаны своим свечением и формой энергичному свету, излучаемому той же звездой Вольфа-Райе.',
    title: 'Sh2-308: Звездный пузырь в форме дельфина',
    copyright: 'Aleix RoigAstroCatInfo',
    media_type: 'image'
}
const todayData = {
    fetchError: '',
    isTodayDate: true,
    data: StateWithImage
}
const Video = {
    fetchError: '',
    isTodayDate: true,
    data: StateWithvideo
}
const errorData = {
    fetchError: 'Произошла ошибка при запросе на сервер :(',
    isTodayDate: false,
    data: ''
}

const store = setupStore()
const storeTodayData = setupStore({ DaysPage: todayData })
const storeWithError = setupStore({ DaysPage: errorData })
const storeWithVideo = setupStore({ DaysPage: Video })

const Template: ComponentStory<typeof DaysPage> = () => helper(store, <DaysPage />)
export const withoutData = Template.bind({})


const TemplateWithTodayData: ComponentStory<typeof DaysPage> = () => helper(storeTodayData, <DaysPage />)
export const withTranslatedTodayData = TemplateWithTodayData.bind({})

const TemplateWithError: ComponentStory<typeof DaysPage> = () => helper(storeWithError, <DaysPage />)
export const dataWithError = TemplateWithError.bind({})

const TemplateWithVideo: ComponentStory<typeof DaysPage> = () => helper(storeWithVideo, <DaysPage />)
export const dataWithVideo = TemplateWithVideo.bind({})