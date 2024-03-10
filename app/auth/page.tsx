'use client';
import React, { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { getFirebaseAuth } from '@/lib/firebase/auth';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createUser, getUser } from '@/lib/app/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createHash } from 'crypto';

// TODO: make everything simple and organized, current there are multiple states and much more bad code
const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const auth = getFirebaseAuth();
  const [currentUser, setCurrentUser] = React.useState(getUser());
  let [userEmailHash, setUserEmailHash] = React.useState(`https://github.com/avatar/${currentUser.email}`)

  onAuthStateChanged(getFirebaseAuth(), (user) => {
    let newUser = getUser()
    setCurrentUser(newUser)
    setUserEmailHash(createHash('sha256').update(newUser.email).digest('hex'))
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignUp) {
      if (password === confirmPassword) {
        createUser(email, password, name);
      } else {
        // Handle password mismatch error
        console.error('Passwords do not match');
      }
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Handle successful sign-out
      auth.signOut();
      console.log('Sign-out successful');
    } catch (error) {
      // Handle sign-out error
      console.error('Sign-out error:', error);
    }
  };

  const handleEditProfile = async () => {}

  if (currentUser.id === 'guest') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4"
              />
            )}
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            {isSignUp && (
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mb-6"
              />
            )}
            <Button type="submit" className="w-full mb-4">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>
          <Separator className="my-6">or</Separator>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              Sign In with Google
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <GitHubLogoIcon /> Sign In with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </button>
              </p>
            ) : (
              <p>
               {"Don't have an account?"}{' '}
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-6">
          <Avatar className="w-16 h-auto">
            <AvatarImage src={`https://gravatar.com/avatar/${userEmailHash}/?d=""`} />
            <AvatarFallback>{currentUser.nameInitials}</AvatarFallback>
          </Avatar>
            <div className='ml-4'>
              <h2 className="text-xl font-bold">{currentUser.name}</h2>
              <p className="text-gray-600">{currentUser.email}</p>
              <p className="text-gray-600">User ID: {currentUser.id}</p>
            </div>
          </div>
          <Button onClick={handleEditProfile} className="w-full mb-1" variant={"outline"}>
            Edit Profile
          </Button>
          <Button onClick={handleSignOut} className="w-full">
            Sign Out
          </Button>
        </div>
      </div>
    );
  }
};

export default AuthPage;