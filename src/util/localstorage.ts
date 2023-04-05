export const loadState = () => {
  try {
    // Gets the state from the browser's local storage
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    // If there is a serialized string of the state, returns it as an object
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {}
};
