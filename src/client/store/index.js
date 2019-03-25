export const state = () => ({
  activePage: 'index',
  showMenu: false,
})

export const mutations = {
  updateActivePage(state, pageName) {
    state.activePage = pageName
  },
  updateMenuState(state, menuState) {
    state.showMenu = menuState
  },
}
