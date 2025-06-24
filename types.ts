
export enum AppTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface Task {
  id: string;
  text: string;
  dueDate?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  subject?: string;
  needsReview: boolean;
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  TRUE_FALSE = 'true_false',
  SHORT_ANSWER = 'short_answer',
}

export interface QuizQuestionOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  questionText: string;
  options?: QuizQuestionOption[];
  correctAnswer: string | boolean; // boolean for true/false, string (option id or text) for others
  userAnswer?: string | boolean;
  feedback?: string;
  subject?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  imagePreview?: string; // base64 image data for user uploads preview
  isLoading?: boolean;
  isError?: boolean;
  sources?: GroundingChunk[];
}

export interface StudyStat {
  date: string; // YYYY-MM-DD
  studyTimeMinutes: number;
  quizzesCompleted: number;
  quizAverageScore: number; // percentage
}

export interface PomodoroSettings {
  workDuration: number; // minutes
  shortBreakDuration: number; // minutes
  longBreakDuration: number; // minutes
  cyclesBeforeLongBreak: number;
}

// For grounding chunks from Google Search grounding
export interface WebGroundingChunk {
  uri?: string; // Made optional to match @google/genai
  title?: string; // Made optional to match @google/genai
}

export interface GroundingChunk {
  web?: WebGroundingChunk;
  // other types of chunks if applicable
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
  // other metadata fields
}