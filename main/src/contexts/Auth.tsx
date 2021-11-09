/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Provider, Session, User } from '@supabase/supabase-js';
import React, { useContext, useState, useEffect, createContext } from 'react';

import { supabase } from '../supabase';

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextProps {
  user: User | null | undefined;
  signUp(
    credentials: SignInCredentials,
  ): Promise<{
    user: User | null;
    session: Session | null;
    error: Error | null;
    data: User | Session | null;
  }>;
  signIn(
    credentials: SignInCredentials,
  ): Promise<{
    session: Session | null;
    user: User | null;
    provider?: Provider | undefined;
    url?: string | null | undefined;
    error: Error | null;
    data: Session | null;
  }>;
  signOut(): void;
}
interface PropsAuth {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }: PropsAuth) {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);

    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      },
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signUp: (data: any) => supabase.auth.signUp(data),
    signIn: (data: any) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
