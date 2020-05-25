import React from 'react';
import Cleave from 'cleave.js/react';
import idPhoto from '../_assets/img/user.jpg';
import gerb from '../_assets/img/gerb.svg';

export default function OldId(props) {
    return(
        <div className="row">
            <div className="col-3 col-sm-2 col-md-2">
            <img src={gerb} className="img-fluid" alt="Azərbaycan Respublikasının Dövlət Gerbi" />
            </div>
            <div className="col-9 col-sm-10 col-md-10"><h3 className="text-right id-card-header1">AZƏRBAYCAN RESPUBLİKASI</h3><h5 className="text-right id-card-header2">VƏTANDAŞININ ŞƏXSİYYƏT VƏSİQƏSİ</h5>
            <div className="no-gutters row">
            <div className="text-right align-self-center col-8 col-sm-8 col-md-8">
            <span className="text-danger">Seriya</span> <b>AZE</b> <span className="text-danger mr-1">№</span>
            </div>
            <div className="col-4 col-sm-4 col-md-4">
                
                <Cleave className='form-control-sm form-control' name='idSerialNumber' options={{blocks: [8]}} required />
            </div>
            </div>
            </div>
            <div className="col-sm-12">
                <hr></hr>
            </div>
            <div className="col-3 col-sm-4 col-md-4">
                <br></br>
            <img src={idPhoto} className="img-fluid" alt="ID card holder" />
            </div>
            <div className="col-9 col-sm-8 col-md-8">
            <label htmlFor="lastName" className="id-card-label">Soyadı <span className="text-danger">*</span></label>
            <input id="lastName" name="idLastName" placeholder="m.ü. Uzdenov" required type="text" className="form-control-sm form-control" />
            <label htmlFor="firstName" className="id-card-label">Adı <span className="text-danger">*</span></label>
            <input id="firstName" name="idFirstName" placeholder="m.ü. Hacı" type="text" className="form-control-sm form-control" />
            <label htmlFor="idPatronimic" className="id-card-label">Atasının adı <span className="text-danger">*</span></label>
            <input id="idPatronimic" name="idPatronimic" placeholder="m.ü. Balamirzəyeviç" required type="text" className="form-control-sm form-control" />
            <label htmlFor="idBirthPlaceAndDate" className="id-card-label">Doğulduğu yer və tarix <span className="text-danger">*</span></label>
            <div id="idBirthPlaceAndDate" className="input-group">
            <input name="idBirthPlace" placeholder="m.ü. Azərbaycan, Bakı şəh." required type="text" className="form-control-sm form-control" />
            <input name="idBirthDate" placeholder="" required type="date" className="form-control-sm form-control" />
            </div>
            </div>
            </div>
    )
    }