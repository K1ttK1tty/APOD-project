import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavMenu from '../../components/UI/NavMenu/NavMenu';
import { setupStore } from '../../store/store';
import { helper } from '../helper';

const store = setupStore()

export default {
    title: 'Components/Menu',
    component: NavMenu,
    parameters: {
        layout: 'fullscreen',
    },

} as ComponentMeta<typeof NavMenu>;

const Template: ComponentStory<typeof NavMenu> = () => helper(store, <NavMenu />)
export const Menu = Template.bind({})