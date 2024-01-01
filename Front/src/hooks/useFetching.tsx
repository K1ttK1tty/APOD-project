import { useState } from 'react';
import { AxiosError } from 'axios';
export const useFetching = (callback: () => void) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>('');
    const [isRequestSuccess, setIsRequestSuccess] = useState<boolean>(false);

    const fetchData: () => void = async () => {
        try {
            setIsLoading(true);
            await callback(); // await только для индикации загрузки, возможно поменять
            setIsRequestSuccess(true);
        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
            setIsRequestSuccess(false)
            
        } finally {
            setIsLoading(false);
        }
    }
    return [fetchData, error, isLoading, setError, isRequestSuccess]
}