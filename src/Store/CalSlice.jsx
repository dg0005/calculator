import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previous: "",
  current: "",
  operation: "",
  history: [],
};

export const calSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    allClear: (state) => {
      state.current = "";
      state.previous = "";
      state.operation = "";
    },
    del: (state) => {
      if (state.current == "") {
        state;
      } else if (state.current.length == 1) {
        state.current = "";
      } else {
        state.current = state?.current?.slice(0, -1);
      }
    },
    addDigit: (state, { payload }) => {
      if (
        (payload === "0" && state.current === "0") ||
        (payload === "." && state.current.includes("."))
      ) {
        state;
      } else {
        state.current = `${state.current}${payload}`;
      }
    },
    addOperator: (state, { payload }) => {
      if (state.current == "" && state.previous == "") {
        state;
      } else if (state.current == "") {
        state.operation = payload;
      } else if (state.previous == "") {
        state.operation = payload;
        state.previous = state.current;
        state.current = "";
      } else {
        state.history = [
          ...state.history,
          `${state.previous} ${state.operation} ${state.current} = ${evals(
            state
          )}`,
        ];
        state.previous = evals(state);
        state.operation = payload;
        state.current = "";
      }
    },

    evaluate: (state) => {
      if (
        state.operation == "" ||
        state.current == "" ||
        state.previous == ""
      ) {
        state;
      } else {
        state.history = [
          ...state.history,
          `${state.previous} ${state.operation} ${state.current} = ${evals(
            state
          )}`,
        ];
        state.current = evals(state);
        state.previous = "";
        state.operation = "";
      }
    },
  },
});

function evals({ current, previous, operation }) {
  const curr = parseFloat(current);
  const prev = parseFloat(previous);
  let result;
  if (isNaN(curr) || isNaN(prev)) return "";
  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
  }
  return result?.toString();
}

export const { addDigit, addOperator, del, allClear, evaluate, history } =
  calSlice.actions;

export default calSlice.reducer;
