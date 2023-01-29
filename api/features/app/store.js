import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidePanel: null,
  modal: null,
  alert: null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload ?? {};
    },
    setSidePanel: (state, action) => {
      state.sidePanel = action.payload ?? null;
    },
    setModal: (state, action) => {
      state.modal = action.payload ?? null;
    }
  }
});

export const {
  setAlert,
  setSidePanel,
  setModal,
} = appSlice.actions;

export default appSlice.reducer;
