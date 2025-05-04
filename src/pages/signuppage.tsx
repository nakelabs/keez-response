import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const SignUpPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (Object.values(form).every((v) => v.trim() !== '')) {
        toast.success('Account created! Please log in.');
        navigate('/login');
      } else {
        toast.error('Please fill in all fields.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-keez-lightBlue via-white to-keez-teal p-4">
      <div className="w-full max-w-lg animate-fade-in shadow-xl rounded-2xl bg-white/80 backdrop-blur-md">
        <div className="mb-8 text-center">
          <div className="h-16 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-keez-teal tracking-tight">Keez Response</h1>
          </div>
        </div>
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-center text-keez-teal text-2xl font-semibold">Create your account</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit} autoComplete="off">
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-sm font-medium text-keez-teal">First Name</label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="keez-input mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-medium text-keez-teal">Last Name</label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="keez-input mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="age" className="text-sm font-medium text-keez-teal">Age</label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Age"
                  value={form.age}
                  onChange={handleChange}
                  className="keez-input mt-1"
                  required
                  min={1}
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-keez-teal">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="keez-input mt-1"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-keez-teal">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="keez-input mt-1"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="text-sm font-medium text-keez-teal">Address</label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  className="keez-input mt-1"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="password" className="text-sm font-medium text-keez-teal">Password</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="keez-input mt-1"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                type="submit"
                className="w-full bg-keez-teal text-white hover:bg-keez-teal/90 rounded-lg py-2 text-lg font-semibold transition-all duration-150"
                disabled={isLoading}
              >
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
              <div className="text-center pt-2">
                <span className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <a
                    href="#"
                    className="text-keez-teal hover:underline font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/login');
                    }}
                  >
                    Log in
                  </a>
                </span>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;