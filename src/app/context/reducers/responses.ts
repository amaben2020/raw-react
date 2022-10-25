
export const responsesReducer = (state: any, action: any) => {

  const { type, payload } = action
  switch (type) {
    case "ADD_RESPONSE":
      return {
        ...state,
        response: payload
      }

    // you have to pass in  the question id to remove it from the response array
    // when you skip, this is the intended functionality
    case "REMOVE_RESPONSE":
      return {
        ...state,
        response: state.response.filter((response: any) => response.id === payload)
      }


    default:
      throw new Error("You must pass a value to the reducer")
  }


}