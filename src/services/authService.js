export const mockAuthService = {
    register: async (data) => {
      // Simulating an API call for user registration
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data.email === "test@example.com") {
            reject({ message: "Email already exists" });
          } else {
            resolve({ message: "User registered successfully", user: data });
          }
        }, 1000);
      });
    },
    login: async (data) => {
      // Simulating an API call for user login
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data.email === "test@example.com" && data.password === "password") {
            resolve({ message: "Login successful", user: data });
          } else {
            reject({ message: "Invalid email or password" });
          }
        }, 1000);
      });
    },
  };