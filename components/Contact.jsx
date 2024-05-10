import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xayrkyzq");

  if (state.succeeded) {
    return <p className='text-center text-2xl font-bold'>Dziękujemy za wysłanie wiadomości!</p>;
  }

  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold text-center p-4'>Wyślij wiadomość</h1>
      <form onSubmit={handleSubmit} className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3' type="text" placeholder='Nazwa' name="name" />
          <input className='border shadow-lg p-3' type="email" placeholder='Email' name="email" />
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Temat' name="subject" />
        <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Wiadomość' name="message"></textarea>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" className='border shadow-lg text-black p-3 w-full mt-2' disabled={state.submitting}>
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Contact;