import { types } from "mobx-state-tree"
import { SettingsModel } from "./settings.model"
import { UserModel } from "./user.model"


export const RootModel = types.model('rootStore', {
    settings: types.optional(SettingsModel, {}),
    currentUser: types.optional(UserModel, {})
}).actions((self) => ({
    setUser(user) {
        self.currentUser.email_verified_at = user.email_verified_at
        self.currentUser.setId(user.id)
        self.currentUser.setName(user.name)
        self.currentUser.setEmail(user.email)
        self.currentUser.setToken(user.token)
        user.roles.map(role=>self.currentUser.roles.set(role.name,role))
    }
})).views((self) => ({
    isLoggedIn() {
        if(self.currentUser && self.currentUser.token){
            return true
        }else{
            return false
        }
    }
}))