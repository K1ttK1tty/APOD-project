import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../../components/UI/Footer/Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Footer>;

const TemplateFooter: ComponentStory<typeof Footer> = () => <Footer />
export const footer = TemplateFooter.bind({})