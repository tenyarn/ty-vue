export type UserInfo = {
    name:string,
    password:string,
    avater?:string,
    description?:string,
    email?:string
}

export type UserBlog = {
    name:string
    title:string,
    content:string,
    comments?:string[]
}

export class UserTodo{
    name:string
    title:string
    content:string
    done:boolean
    constructor(name:string,title:string,content:string,done:boolean){
        this.name = name
        this.title = title
        this.content = content
        this.done = done
    }
}


