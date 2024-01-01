import { ComponentStory, ComponentMeta } from '@storybook/react';
import SnackbarComp from '../../components/UI/Snackbar/SnackbarComp';
import { IState } from '../../Types/Types';

const errorMessage: IState = {
    open: true,
    vertical: 'top',
    horizontal: 'center',
}
const setErrorMessage: (a: IState) => void = () => {}
export default {
    title: 'Components/Snackbar',
    component: SnackbarComp,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SnackbarComp>;

const Template: ComponentStory<typeof SnackbarComp> = (args) => <SnackbarComp {...args} />

export const DateError = Template.bind({})
DateError.args = {
    error: '',
    errorMessage: errorMessage,
    setErrorMessage: setErrorMessage
}

export const FetchError = Template.bind({})
FetchError.args = {
    error: 'Некорректная дата',
    errorMessage: errorMessage,
    setErrorMessage: setErrorMessage
}