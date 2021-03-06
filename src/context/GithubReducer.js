const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case 'GET_REPOSITORY':
      return {
        ...state,
        repository: action.payload,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default GithubReducer;