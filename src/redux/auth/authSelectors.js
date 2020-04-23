const isAuthenticated = state => state.auth.token;

const getName = state => state.auth.user.name;
const getLoading = state => state.auth.loading;
export default { isAuthenticated, getName, getLoading };
