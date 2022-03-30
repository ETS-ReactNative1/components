export const initialState = {
  emails: [],
  subject: '',
  message: ''
};

export default (state, action) => {
  switch (action.type) {
    case 'ADD_EMAIL': {
      const emails = [...state.emails];
      const payload = action.payload;

      if (emails.indexOf(payload) === -1 && emails.length < 10) {
        emails.push(payload);
      }

      return { ...state, emails };
    }

    default: {
      return { ...state, ...action };
    }
  }
};
