
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
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      
      // Placeholder logic - in a real app, this would be an API call
      if (email && password) {
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        toast.error('Please enter both email and password.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-keez-lightBlue to-white p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="mb-8 text-center">
          {/* Placeholder for logo */}
          <div className="h-16 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-keez-teal">Keez Response</h1>
          </div>
        </div>
        
        <Card className="border-keez-teal/20">
          <CardHeader>
            <CardTitle className="text-center text-keez-teal">Login</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="keez-input"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
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
                  className="keez-input"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit"
                className="w-full bg-keez-teal text-white hover:bg-keez-teal/90"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
