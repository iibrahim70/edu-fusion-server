export const UserSearchableFields = ['fullName', 'email'];

export const USER_ROLE = {
  student: 'student',
  tutor: 'tutor',
  admin: 'admin',
} as const;

// Type alias for the values of USER_ROLE
export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];
