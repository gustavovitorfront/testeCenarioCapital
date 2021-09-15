import React, { memo } from 'react';
import PropTypes, { func } from 'prop-types';
import BadgeTitle from '../../components/BadgeTitle'

const Contato = ({ submit }) => {

    function celMask(v) {
        let r = v.replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if (r.length > 11) {
            r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (r.length > 7) {
            r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
            r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else if (v.trim() !== "") {
            r = r.replace(/^(\d*)/, "($1");
        }
        return r;
    }

    return (
        <section className="contatoSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <BadgeTitle texto="Entre em contato"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <form onSubmit={submit}>

                            <div className="form-group">
                                <label htmlFor="nameField">Nome</label>
                                <input type="text" name="nome" id="nameField" required className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="emailField">Email</label>
                                <input type="email" name="email" id="emailField" required className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="whatsField">WhatsApp</label>
                                <input type="text" name="whatsapp" id="whatsField" required className="form-control" onChange={(e) => e.target.value =  celMask(e.target.value)}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="assuntoField">Assunto</label>
                                <textarea className="form-control" name="assunto" id="assuntoField" rows="3"></textarea>
                            </div>

                            <div className="form-linha">
                                <div className="col-4">
                                    <p>Hobbys</p>

                                    <div className="form-check">
                                        <input value="Netflix" className="form-check-input" name="hobbysName" type="checkbox" id="hobbyCheck1" />
                                        <label className="form-check-label" htmlFor="hobbyCheck1">
                                            Netflix
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input value="Churrasco" className="form-check-input" name="hobbysName" type="checkbox" id="hobbyCheck2" />
                                        <label className="form-check-label" htmlFor="hobbyCheck2">
                                            Churrasco
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input value="Sair com os Amigos" className="form-check-input" name="hobbysName" type="checkbox" id="hobbyCheck3" />
                                        <label className="form-check-label" htmlFor="hobbyCheck3">
                                            Sair com os Amigos
                                        </label>
                                    </div>

                                </div>

                                <div className="col-4">
                                    <p>Gosto mais de:</p>

                                    <div className="form-check">
                                        <input className="form-check-input" defaultChecked={"Front-end"} type="radio" name="gostoName" id="gostoRadio1" value="Front-end" />
                                        <label className="form-check-label" htmlFor="gostoRadio1">
                                            Front-end
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gostoName" id="gostoRadio2" value="Back-end" />
                                        <label className="form-check-label" htmlFor="gostoRadio2">
                                            Back-end
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gostoName" id="gostoRadio3" value="Design" />
                                        <label className="form-check-label" htmlFor="gostoRadio3">
                                            Design
                                        </label>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="labelPreferContatoPor" htmlFor="preferContatoPor">Prefere contato por?</label>
                                        <select name="prefercontato" className="form-control" id="preferContatoPor" defaultValue={""}>
                                            <option value="" disabled>Escolha</option>
                                            <option>Email</option>
                                            <option>WhatsApp</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-enviar">
                                Enviar
                                <i className="material-icons material-icons-outlined">arrow_forward_ios</i>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

Contato.propTypes = {
    submit: PropTypes.func,
}

export default memo(Contato);