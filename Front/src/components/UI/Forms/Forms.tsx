import { FC } from 'react';
import { Input, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { selectStyles, MenuProps, menuItemStyle } from '../../../MaterialStyleConsts/Consts'
import { IFormsProps } from '../../../Types/Types';
import { useAppDispatch } from '../../../hooks/redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import '../../../styles/App.scss'
const Forms: FC<IFormsProps> = function ({ item }) {
    const dispatch = useAppDispatch()

    const dateHandler = (event: SelectChangeEvent<string>, setDate: ActionCreatorWithPayload<string>) => {
        const element = event as React.ChangeEvent<HTMLInputElement>
        dispatch(setDate(element.target.value))
    }

    return (
        <FormControl>
            <InputLabel style={selectStyles} id={item.id}>{item.name}</InputLabel>
            <Select
                style={selectStyles}
                MenuProps={MenuProps}
                labelId={item.id}
                value={item.state}
                input={<Input />}
                onChange={(event: SelectChangeEvent<string>) => dateHandler(event, item.handler)}
            >
                {item.array.map(dateItem => <MenuItem style={menuItemStyle} key={dateItem} value={dateItem}>{dateItem}</MenuItem>)}
            </Select>
        </FormControl>
    )
};
export default Forms;