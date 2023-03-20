import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Contact() {
  const initialValues = { name: '', email: '', message: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here
    console.log(values);
    alert('Message sent successfully!');
    resetForm();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-heading">Contact</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <Field name="message" as="textarea" className="form-control" />
                    <ErrorMessage name="message" component="div" className="error-message" />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
