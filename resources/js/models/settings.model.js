import { types } from "mobx-state-tree"

export const SettingsModel = types.model('settings',{
    dark_mode: types.optional(types.boolean,false),
    left_sidebar_open: types.optional(types.boolean,false),
    featured_fixtures: types.optional(types.array(types.number),[]),
    language: types.optional(types.string,"English"),
}).actions((self) => ({
	setLanguage(language) {
		self.language = language
	},
	toggleDarkMode() {
		self.dark_mode = !self.dark_mode
	},
	toggleSidebar() {
		self.left_sidebar_open = !self.left_sidebar_open
	},
	toggleFeaturedFixture(fixture_id) {
		const index = self.featured_fixtures.indexOf(fixture_id)
		if(index > -1){
			self.featured_fixtures.splice(index,1)
		}else{
			self.featured_fixtures.push(fixture_id)
		}
	}
}))