export default function ({ store, redirect }) {
  if (store.state.playerScore.ingredient < 1) {
    return redirect("/");
  }
}
