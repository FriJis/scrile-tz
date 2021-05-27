export interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
}
export interface ICompany {
    name: string
    catchPhrase: string
    bs: string
}
export interface IPhoto {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
export interface IUser {
    readonly id: number
    name: string
    username: string
    photo?: string
    email?: string
    address?: IAddress
    phone?: string
    website?: string
    company?: ICompany
}
