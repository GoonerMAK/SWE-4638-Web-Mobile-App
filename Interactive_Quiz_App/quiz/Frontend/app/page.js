import Link from 'next/link';
import styles from '../styles/page.css';

export default function Home() {
  return (
    <main>
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

        
      </div>
    </main>
  );
}