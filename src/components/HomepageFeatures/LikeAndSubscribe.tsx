"use client";
import React, { SyntheticEvent, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase-config"; 

const LikeAndSubscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e : SyntheticEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await addDoc(collection(db, 'mailingList'), {
        email,
        timestamp: new Date()
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full lg:py-16 lg:px-6">
      <div className="w-full text-center">
        <h2 className="text-3xl font-semibold mb-6">Join the mailing list</h2>
        <p className="mb-8 mx-auto font-regular text-gray-500 sm:text-xl dark:text-gray-400">
          Get notified when stuff happens! Like releases, updates, features, etc.
        </p>

        <form onSubmit={handleSubmit} className="items-center mx-auto mt-6 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>

            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>

            <input
              type="email"
              id="email"
              className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="text-white font-bold py-3 px-5 w-full text-sm text-center bg-teal-600 rounded-lg border cursor-pointer border-primary-600 sm:rounded-none sm:rounded-r-lg border-teal-700"
            >
              {status === 'loading' ? 'Submitting...' : 'Thanks!'}
            </button>
          </div>
        </form>

        {status === 'success' && <p className="text-green-600 mt-2">Added your email!</p>}
        {status === 'error' && <p className="text-red-600 mt-2">Please enter a valid email or try again.</p>}

        <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 mt-2">
          Data exists lol. <a href="/privacy" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">There is a Privacy Policy, yay.</a>
        </div>
      </div>
    </div>
  );
};

export default LikeAndSubscribe;
