import { Form } from 'react-reform';
import defaultValidators from 'react-reform/opt/validations';
import Wrapper from './Wrapper';
import Inline from './Theme';
import './style.scss';

Object.assign(Form, {
  ...Wrapper,
  themes: {
    ...Inline,
  },
  validations: {
    ...defaultValidators,
    selection: () => ({
      isValid: (val, args, askAgain) => {
        askAgain();
        return true;
      },
      errorMessage: (val, { name }) => `'${name}' need have selected some value. '${val}' isn't`,
    }),
  },
});

export default Form;
