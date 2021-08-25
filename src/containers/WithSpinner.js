import Spinner from '../components/Spinner';

const WithSpinner =
  WrappedComponent =>
  ({ isFetched, ...otherProps }) =>
    isFetched ? <WrappedComponent {...otherProps} /> : <Spinner />;

export default WithSpinner;
