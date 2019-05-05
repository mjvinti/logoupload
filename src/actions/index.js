// action creator
export const uploadLogo = logo => {
  // return an action
  return {
    type: 'LOGO_UPLOADED',
    payload: logo
  };
};