import { Formik, Field, Form } from 'formik';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Cookies from 'js-cookie';

type Props = {
  onLogin: () => void;
  username: string | undefined;
  password: string | undefined;
};

export default function LoginForm({ onLogin, username, password }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  // ... (rest of the code)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
        <Form className="bg-gray-700 p-8 rounded-md shadow-md">
          <h1 className="text-2xl font-medium text-white mb-4">Login</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 font-medium mb-2">
              Username
            </label>
            <Field
              id="username"
              name="username"
              placeholder="Username"
              className="border border-gray-600 p-2 rounded-md w-full bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="border border-gray-600 p-2 rounded-md w-full bg-gray-800 text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
