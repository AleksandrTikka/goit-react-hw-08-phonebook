const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUserEmail = state => state.auth.user.email;

const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = { selectIsLoggedIn, selectUserEmail, selectIsRefreshing };

export default authSelectors;
