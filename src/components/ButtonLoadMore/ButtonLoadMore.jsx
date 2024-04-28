import PropTypes from 'prop-types';
import css from './ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ label, handleLoadMore }) => (
  <button type="button" className={css.ButtonLoadMore} onClick={handleLoadMore}>
    {label}
  </button>
);

ButtonLoadMore.propTypes = {
  label: PropTypes.string,
  handleLoadMore: PropTypes.func,
};
