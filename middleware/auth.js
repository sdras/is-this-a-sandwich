export default function ({ store, error }) {
  if (!store.state.playerScore.ingredient === 0) {
    error({
      message: "Page not found",
      statusCode: 404,
    });
  }
}
