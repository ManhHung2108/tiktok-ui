//import React from 'react';
import './GlobalStyle.scss';
import PropTypes from 'prop-types';

function GlobalStyle({ children }) {
    return children;
    // return React.Children.only(children); //chỉ nhận 1 children
}

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyle;
