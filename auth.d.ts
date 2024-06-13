declare module '#auth-utils' {
  interface User {
    id: string
    avatar_url: string
    login: string
    // Add your own fields
  }

  interface UserSession {
    // Add your own fields
  }
}

export {}
