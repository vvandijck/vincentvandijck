export default function(context) {
  context.store.commit('updateActivePage', context.route.name)
  context.store.commit('updateMenuState', false)
}
