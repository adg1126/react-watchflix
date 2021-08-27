import TextField from '@material-ui/core/TextField';

const Textfield = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    variant='outlined'
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    margin='dense'
  />
);

export default Textfield;
