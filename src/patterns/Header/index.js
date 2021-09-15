import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar'

const Header = ({ nomeCompleto, fotoPerfil }) => {

    return (
        <header>
            <div className="cabecalho">
                Seja Bem Vindo a Minha Página!
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="imageProfile">
                            <Avatar avatarData={{src:fotoPerfil.src, nome: nomeCompleto}}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h1 className="txtName">{nomeCompleto}</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    nomeCompleto: PropTypes.string.isRequired,
    fotoPerfil: PropTypes.object
}

export default memo(Header);