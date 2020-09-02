export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finished developing // if you wants to enter apps not online
  // token:
  // "BQCJr5N_mgqPfB7zG7abuL1xdimxoiHx6nQd9e6weL8G_q4J8qSZbnrN-PYx-CEUAV-UHGt95ay73XnRev6piiT8lBm3gVrY5sa7Ad8FTpgjGm4QEkml76sdVRtp_TRSej3yX6pnl4c-HDfyCFFU4pDJsYMbfSGv3xWyZ7jicLmXIGeq",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
