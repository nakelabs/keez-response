import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (email && password) {
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        toast.error('Please enter both email and password.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-keez-lightBlue via-white to-keez-teal p-4">
      <div className="w-full max-w-md animate-fade-in shadow-xl rounded-2xl bg-white/80 backdrop-blur-md">
        <div className="mb-8 text-center">
          <div className="h-16 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-keez-teal tracking-tight">Keez Response</h1>
          </div>
        </div>
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-center text-keez-teal text-2xl font-semibold">Login to your account</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit} autoComplete="off">
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-keez-teal">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="keez-input mt-1"
                  required
                  autoFocus
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-keez-teal">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-keez-teal hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Password reset functionality would be implemented here.");
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
              <div className="text-center pt-2">
                <span className="text-sm text-gray-600">
                  Don&apos;t have an account?{' '}
                  <a
                    href="#"
                    className="text-keez-teal hover:underline font-medium"
                    onClick={e => {
                      e.preventDefault();
                      navigate('/signup');
                    }}
                  >
                    Sign up
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

export default LoginPage;
