import React, {memo} from 'react';
import PropTypes from 'prop-types';

const ResultadoForm = ({ useData }) => {

    return (
        <section className="resultadoSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="resultadoFormTitle">Resultado do Form acima</h5>

                        <p>Nome: {useData.nome}</p>
                        <p>Email: {useData.email}</p>
                        <p>Whatsapp: {useData.whatsapp}</p>
                        <p>Assunto: {useData.assunto}</p>
                        <p>Hobbys: {useData.hobbys && useData.hobbys.map((item, i) => useData.hobbys.length == i+1 ? item : item+", ")}</p>
                        <p>Gosto mais de atuar com: {useData.gosto}</p>
                        <p>Prefere contato por: {useData.prefercontato}</p>
                    </div>
                </div>
            </div>
        </section>
    );


}

ResultadoForm.propTypes = {
    useData: PropTypes.object,
}

export default memo(ResultadoForm);