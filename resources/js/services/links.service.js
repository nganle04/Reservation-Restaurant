import { pathPrefix } from "../config"

const LS = {
    match : (id,ln,vn)=>{
        return pathPrefix+`matches/${id}/${encodeURIComponent((ln+"-vs-"+vn).replace("/",'').replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase())}`
    },
    player : (id,name)=>{
        return pathPrefix+`players/${id}/${encodeURIComponent(name.replace("/",'').replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase())}`
    },
    team : (id,name)=>{
        return pathPrefix+`teams/${id}/${encodeURIComponent(name.replace("/",'').replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase())}`
    },
    league : (id,name)=>{
        return pathPrefix+`leagues/${id}/${encodeURIComponent(name.replace("/",'').replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase())}`
    },
    news : (type = false)=>{
        if(type){
            return pathPrefix+`news/${encodeURIComponent(type)}`
        }else{
            return pathPrefix+`news`
        }
    },
    article : (type,id,name)=>{
        return pathPrefix+`news/${type}/${id}/${encodeURIComponent(name.replace("/",'').replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase())}`
    },
    homeTab : (name = false)=>{
        if(name){
            return pathPrefix+`tab/${name}`
        }else{
            return pathPrefix
        }
    }
}
export default LS