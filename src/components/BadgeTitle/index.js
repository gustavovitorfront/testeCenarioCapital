import React, { memo } from 'react';
import PropTypes from 'prop-types';

const BadgeTitle = ({ texto }) => {
    return (
        <div className="titleContato">
            {texto}
        </div>
    );
}

BadgeTitle.propTypes = {
    texto: PropTypes.string.isRequired,
}

export default memo(BadgeTitle);