import content from '../assets/content.json';
import { Button } from '@/components/shadcn/ui/button';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/ui/select';

export default function Contact() {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log(data);
    }
  }, [data, isSubmitSuccessful]);

  const onSubmit = (data) => setData(data);

  return (
    <>
      <section className='container mx-auto text-center md:mb-32 mb-16'>
        <h1 className='mb-8 text-4xl sm:text-6xl'>Become a Member of Harmonia Connect</h1>
        <p>
          If you are committed to making a positive difference and wish to join our mission, we invite you to apply for
          membership. Please fill out the contact form below, and our team will review your application. We look forward
          to potentially welcoming you into our community of change-makers.
        </p>
      </section>
      <section className='md:grid grid-cols-2'>
        {content.app_process.map((section, index) => (
          <section key={index} className='container mx-auto mb-8'>
            <div className=''>
              <h4 className='mb-4'>
                <span className='mr-4 text-secondary text-5xl'>{index + 1}</span>
                {section.title}
              </h4>
            </div>
            <div className=''>
              {section.steps.map((step, index) => (
                <ul key={index} className='mb-4 list-disc ml-16'>
                  <li>{step}</li>
                </ul>
              ))}
            </div>
          </section>
        ))}
      </section>
      <section className='container mx-auto text-center my-16 border-t-[1px] pt-16'>
        <h2 className='mb-4'>Application Form</h2>
        <p className='md:w-3/4 container'>
          Please fill out the form below to apply for membership. Our team will review your application and get back to
          you as soon as possible. Please note that all fields are required unless stated otherwise.
        </p>
      </section>
      <section className='container mx-auto bg-primary text-white py-16 mb-16'>
        <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='md:grid grid-cols-2 gap-6'>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                {...register('name', { required: true })}
                type='text'
                id='name'
                name='name'
                className='w-full rounded-sm my-4 p-2 text-primary mb-8'
              />
              {errors.name && <span className='text-yellow-300'>This field is required</span>}
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                {...register('email', { required: true })}
                type='email'
                id='email'
                name='email'
                className='w-full rounded-sm my-4 p-2 text-primary mb-8'
              />
              {errors.email && <span className='text-yellow-300'>This field is required</span>}
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input
                {...register('phone', { required: true })}
                type='tel'
                id='phone'
                name='phone'
                className='w-full rounded-sm my-4 p-2 text-primary mb-8'
              />
              {errors.phone && <span className='text-yellow-300'>This field is required</span>}
            </div>
            <div>
              <label htmlFor='role'>Current Role/Occupation</label>
              <input
                {...register('role', { required: true })}
                type='text'
                id='role'
                name='role'
                className='w-full rounded-sm my-4 p-2 text-primary mb-8'
              />
              {errors.role && <span className='text-yellow-300'>This field is required</span>}
            </div>

            <div>
              <label htmlFor='message'>Why You Want to Join</label>
              <textarea
                {...register('message', { required: true })}
                id='message'
                name='message'
                className='w-full rounded-sm my-4 p-4 text-primary min-h-48'
              ></textarea>
              {errors.message && <span className='text-yellow-300'>This field is required</span>}
            </div>
            <div>
              <label htmlFor='message'>Area of Interest</label>
              <Select>
                <SelectTrigger className='my-4 rounded-sm text-primary mb-8'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent {...register('interest')}>
                  <SelectItem value='harmonia_academy'>Harmonia Academy</SelectItem>
                  <SelectItem value='harmonia_labs'>Harmonia Labs</SelectItem>
                  <SelectItem value='harmonia_grants'>Harmonia Grants</SelectItem>
                  <SelectItem value='harmonia_connect'>Harmonia Connect</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='pb-8'>
            <Button
              type='submit'
              className='text-white hover:bg-accent mt-8 w-full md:w-auto text-2xl md:text-xl p-8'
              variant='secondary'
            >
              Submit
            </Button>
          </div>
        </form>

        {isSubmitSuccessful && (
          <div className='container mx-auto text-center mt-8 border-t-[1px] border-secondary pt-16'>
            <p className='text-white text-2xl'>
              Thank you <span className='text-yellow-300 font-bold'>{`${data.name}`} </span>for submitting your
              application to join Harmonia Connect! We are thrilled that you share our passion for leveraging technology
              to foster community well-being and environmental stewardship.
            </p>
          </div>
        )}
      </section>
      <section className='container mx-auto text-center'>
        <h2 className='mb-8'>Additional Information</h2>
        <h3 className='mb-4'>Privacy Notice</h3>
        <p>
          Your personal information will be used solely for the purpose of reviewing your application and will not be
          shared with third parties. We appreciate your interest and look forward to working with you to create a
          sustainable and connected future. For more details, please review our
          <Link to='/privacy' className='hover:text-blue-700'>
            {' '}
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </>
  );
}
