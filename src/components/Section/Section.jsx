import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

export default Section;

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
