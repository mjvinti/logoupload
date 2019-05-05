import { combineReducers } from 'redux';

const uploadedLogoReducer = (uploadedLogo = 'https://s3.amazonaws.com/images.clearviewsocial/CVSLogo.FullColor.RGB+(2).png', action) => {
  if (action.type === 'LOGO_UPLOADED') {
    return action.payload;
  }

  return uploadedLogo;
};

export default combineReducers({
  uploadedLogo: uploadedLogoReducer
});