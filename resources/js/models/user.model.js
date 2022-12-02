import { types } from "mobx-state-tree"

export const UserRoleModel = types.model('user_role',{
    id: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    display_name: types.maybeNull(types.string)
}) 

export const UserModel = types.model('user',{
    id: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    email_verified_at: types.maybeNull(types.string),
    roles: types.optional(types.map(UserRoleModel),{}),
    fav_fixtures: types.optional(types.array(types.number),[]),
    token: types.maybeNull(types.string)
}).actions((self) => ({
    logout() {
		self.id = null
		self.name = null
		self.email = null
		self.email_verified_at = null
		self.roles = {}
		self.token = null
    },
	setId(id) {
		self.id = id
	},
	setName(name) {
		self.name = name
	},
	setEmail(email) {
		self.email = email
	},
	setToken(token) {
		self.token = token
	},
	toggleFavFixture(fixture_id) {
		const index = self.fav_fixtures.indexOf(fixture_id)
		if(index > -1){
			self.fav_fixtures.splice(index,1)
		}else{
			self.fav_fixtures.push(fixture_id)
		}
	}
})).views((self) => ({
	isAdmin() {
		const roleIterator = self.roles.values()
		for (let role = roleIterator.next();!role.done;role = roleIterator.next()) {
			if(role.value.id == 2){
				return true
			}
		}
		return false
	},
	isSuperAdmin() {
		const roleIterator = self.roles.values()
		for (let role = roleIterator.next();!role.done;role = roleIterator.next()) {
			if(role.value.id == 1){
				return true
			}
		}
		return false
	}
}))