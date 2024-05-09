"use client"
import Link from 'next/link';
import styles from '../styles/page.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Home() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {

    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/status');
        const { authenticated } = response.data;
        console.log('Authenticated:', authenticated); // Add this console.log
        setAuthenticated(authenticated);
      } catch (error) {
        console.error('Error checking authentication status:', error);
      }
    };

    checkAuthentication();
  }, []);


  const signInWithGoogle = () => {
    window.open(`http://localhost:5000/auth/google/`)
  };

  return (
    <main>
      
      {!authenticated && (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}

      {!authenticated && (
        <div>
          <Link href='/signIn'>
            <button>Sign In</button>
          </Link>
        </div>
      )}

      <div className='container'>
        <h1>Quiz App</h1>
        <div>
          <Link href='/historyQuiz'>
            <button>Start Quiz on History</button>
          </Link>
        </div>

        <div>
          <Link href='/geographyQuiz'>
            <button>Start Quiz on Geography</button>
          </Link>
        </div>

        <div>
          <Link href='/generalKnowledgeQuiz'>
            <button>Start Quiz on General Knowledge</button>
          </Link>
        </div>

        <div>
          <Link href='/sportsQuiz'>
            <button>Start Quiz on Sports</button>
          </Link>
        </div>

        <br></br>
        <br></br>
        <div>
          <Link href='/createQuiz'>
            <button>Create a Quiz</button>
          </Link>
        </div>

      </div>
    </main>
  );
}