import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Historia = ({ historia }) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-s12">
                        <h4 className="historiaTitle">Minha História Profissional</h4>
                        <p className="historiaConteudo">{historia}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

Historia.propTypes = {
    historia: PropTypes.string.isRequired,
}

export default memo(Historia);