const LANGUAGES = [
  'C',
  'C++',
  'C#',
  'CSS',
  'Elm',
  'Elixir',
  'Emacs Lisp',
  'Erlang',
  'Fortran',
  'Go',
  'Haskell',
  'HTML',
  'Java',
  'JavaScript',
  'Lisp',
  'Matlab',
  'Objective-C',
  'OCaml',
  'Pascal',
  'Perl',
  'PHP',
  'PowerShell',
  'Python',
  'R',
  'Ruby',
  'Rust',
  'Scala',
  'Shell',
  'SQL',
  'Swift',
  'TypeScript',
  'Visual Basic',
].map((value) => {
  return { value, label: value }
})

const LABELS = [
  'bug',
  'critical',
  'easy',
  'enhancement',
  'difficulty: easy',
  'difficulty: medium',
  'difficulty: hard',
  'discussion',
  'docs',
  'documentation',
  'feature',
  'first-timers-only',
  'good first issue',
  'hard',
  'help wanted',
  'new feature',
  'priority: low',
  'priority: medium',
  'priority: high',
  'type: bug',
].map((value) => {
  return { value, label: value }
})

const CONSTANTS = {
  SEARCH_FILTER: {
    LANGUAGES,
    LABELS,
  },
  SITE_TITLE: 'Issues Must Close!',
}

export default CONSTANTS
