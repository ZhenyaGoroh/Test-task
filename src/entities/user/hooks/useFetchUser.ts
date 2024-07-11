import { userAtom } from '@/entities';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useFetch } from 'use-http';

export function useFetchUser() {
    const { get, response } = useFetch('https://dummyjson.com');

    const setUser = useSetAtom(userAtom);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        const userData = await get('/users/1');
        if (response.ok) setUser({ ...userData, authorized: true });
    }
    
}
