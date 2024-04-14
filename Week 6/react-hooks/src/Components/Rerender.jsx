import PropTypes from 'prop-types';

export default function Rerender() {
    return (
        <div> 
            <Header title="Title1"></Header>  
            <Header title="Title2"></Header>  
        </div>
    );
}

function Header({ title }) {
    return (
        <div>
            {title}
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};
