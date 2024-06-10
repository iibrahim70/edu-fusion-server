export const COURSE_CATEGORY = {
  technology: 'technology',
  business: 'business',
  artsHumanities: 'artsHumanities',
  science: 'science',
  mathematics: 'mathematics',
  healthMedicine: 'healthMedicine',
  socialSciences: 'socialSciences',
  languageLearning: 'languageLearning',
  personalDevelopment: 'personalDevelopment',
} as const;

// Type alias for the values of COURSE_CATEGORY
export type CourseCategory =
  (typeof COURSE_CATEGORY)[keyof typeof COURSE_CATEGORY];

export const COURSE_LEVEL = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced',
} as const;

// Type alias for the values of COURSE_LEVEL
export type CourseLevel = (typeof COURSE_LEVEL)[keyof typeof COURSE_LEVEL];

export const COURSE_STATUS = {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected',
} as const;

// Type alias for the values of COURSE_STATUS
export type CourseStatus = (typeof COURSE_STATUS)[keyof typeof COURSE_STATUS];
