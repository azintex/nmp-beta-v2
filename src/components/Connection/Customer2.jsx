import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
            <Field name='phone' className={'form-control' + (errors.phone && touched.phone ? ' is-invalid': '')} />
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
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);