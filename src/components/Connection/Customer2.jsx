import React from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/src/addons/phone-type-formatter.az';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {IdOldCleave} from './_inputs/IdOld';

const SignupSchema = Yup.object().shape({
  idNumber: Yup.string()
    .required('Boş ola bilməz')
    .max(8, '8 rəqəm olmalıdır')
    .matches(/[0-9]$/, 'Yalnız rəqəm ola bilər'),
  firstName: Yup.string()
    .required('Boş ola bilməz')
    .matches(/^[A-ZÜİÖĞIƏÇŞ][a-züöğıəçş\s-]*$/g, 'Baş hərif boyük və qalanlar hərif olmalıdı'),
  lastName: Yup.string()
    .required('Boş ola bilməz')
    .matches(/^[A-ZÜİÖĞIƏÇŞ][a-züöğıəçş\s-]*$/g, 'Baş hərif boyük və qalanlar hərif olmalıdı'),
  patronymic: Yup.string()
    .required('Boş ola bilməz')
    .matches(/^[A-ZÜİÖĞIƏÇŞ][a-züöğıəçş\s-]*$/g, 'Baş hərif boyük və qalanlar hərif olmalıdı'),
  birthPlace: Yup.string()
    .required('Boş ola bilməz')
    .matches(/^[A-ZÜİÖĞIƏÇŞ][a-züöğıəçş\s-]*$/g, 'Baş hərif boyük və qalanlar hərif olmalıdı'),
  birthDate: Yup.date()
    .required('Boş ola bilməz'),
  phone: Yup.number()
    .required('Boş ola bilməz'),
  email: Yup.string()
    .email('Yalnış email'),
  rate: Yup.number()
    .required('Boş ola bilməz')
});

function CleaveInputDate({field, form, ...props}) {
  return <Cleave options={{date: true}} className='form-control' {...field} {...props} />;
}

function CleaveInputPhone({field, form, ...props}) {
  return <Cleave options={{phone: true, phoneRegionCode: 'AZ'}} className='form-control' {...field} {...props} />
}

export const Customer2 = () => (
  <div>
    <Formik
      initialValues={{
        idNumber: '',
        firstName: '',
        lastName: '',
        patronymic: '',
        birthPlace: '',
        birthDate: '',
        phone: '',
        email: '',
        rate: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='form-group'>
            <label htmlFor='idNumber'>ID number</label>
            <Field name='idNumber' className={'form-control' + (errors.idNumber && touched.idNumber ? ' is-invalid': '')} />
            <ErrorMessage name='idNumber' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='idOld'>Old ID series</label>
            <Field name='idOld' component={IdOldCleave} />
            <ErrorMessage name='idOld' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='firstName'>First name</label>
            <Field name='firstName' className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid': '')} />
            <ErrorMessage name='firstName' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last name</label>
            <Field name='lastName' className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid': '')} />
            <ErrorMessage name='lastName' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='patronymic'>Patronymic</label>
            <Field name='patronymic' className={'form-control' + (errors.patronymic && touched.patronymic ? ' is-invalid': '')} />
            <ErrorMessage name='patronymic' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='birthPlace'>Birth place</label>
            <Field name='birthPlace' className={'form-control' + (errors.birthPlace && touched.birthPlace ? ' is-invalid': '')} />
            <ErrorMessage name='birthPlace' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='birthDate'>Birth date</label>
            <Field name='birthDate' className={'form-control' + (errors.birthDate && touched.birthDate ? ' is-invalid': '')} />
            <ErrorMessage name='birthDate' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone number</label>
            <Field name='phone' component={CleaveInputPhone} />
            <ErrorMessage name='phone' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <Field name='email' className={'form-control' + (errors.email && touched.email ? ' is-invalid': '')} />
            <ErrorMessage name='email' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='rate'>Rate</label>
            <Field name='rate' className={'form-control' + (errors.rate && touched.rate ? ' is-invalid': '')} />
            <ErrorMessage name='rate' component='div' className='invalid-feedback' />
          </div>
          <div className='form-group'>
            <label htmlFor='rate'>Connection date</label>
            <Field name='connectionDate' component={CleaveInputDate} />
            <ErrorMessage name='rate' component='div' className='invalid-feedback' />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);