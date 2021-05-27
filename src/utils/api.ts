import axios, { AxiosResponse } from 'axios'

export const user = {
    get(): Promise<AxiosResponse> {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    },
    photos(): Promise<AxiosResponse> {
        return axios.get('https://jsonplaceholder.typicode.com/photos')
    },
}
