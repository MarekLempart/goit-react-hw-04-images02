import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children }) => (
  <section className={css.Section}>{children}</section>
);

Section.propTypes = {
  children: PropTypes.node,
};
