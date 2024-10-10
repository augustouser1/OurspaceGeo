import {api} from "../../api"

export interface IMessage {
    title: string
    message: string
}

export interface IResponseMessage{
    id: number
    user_id: number
    title: string
    message: string
    created_at: string
}

class MessageData{
    index(){
        return api.get<IResponseMessage[]>("/message")
    }
}
export default new MessageData()