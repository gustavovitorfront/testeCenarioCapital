import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ avatarData }) => {
    return (
        <img src={avatarData.src} alt={avatarData.nome} />
    );
}

Avatar.propTypes = {
    avatarData: PropTypes.object,
}

export default memo(Avatar);