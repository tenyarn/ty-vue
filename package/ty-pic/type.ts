import { Url } from "url"
import type {DefineComponent }from 'vue'
export type piccomponent = {
    name:string,
    props:{
        url:Url[]
    },
    template:string
}