import PropTypes from 'prop-types';

export default function Header() {
  return (
    <>
      <Head title="sakshi" />
      <Head title="danej" />
    </>
  );
}

function Head({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
};
