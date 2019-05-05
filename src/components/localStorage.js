export const loadState = () => {
  try {
    const sterializedState = localStorage.getItem('state');
    if (!sterializedState) {
      return undefined;
    }
    return JSON.parse(sterializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ignore write errors
  }
}