import { AxiosError } from "axios";

export interface ErrorResponse {
  message: string;
  code?: string;
  status?: number;
}

// Base App Error
export class AppError extends Error {
  public code?: string;
  public status?: number;

  constructor(message: string, code?: string, status?: number) {
    super(message);
    this.code = code;
    this.status = status;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

// API / Network errors (Axios)
export class ApiError extends AppError {
  constructor(axiosError: AxiosError<ErrorResponse>) {
    const message =
      axiosError.response?.data?.message ||
      axiosError.message ||
      "API request failed";

    const status = axiosError.response?.status;
    const code = axiosError.code;

    super(message, code, status);
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

// Validation errors (e.g. form validation)
export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR", 400);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

// Auth errors
export class AuthError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, "AUTH_ERROR", 401);
    Object.setPrototypeOf(this, AuthError.prototype);
  }
}

// Utility: Parse any unknown error safely
export const parseError = (err: unknown): AppError => {
  if (err instanceof AppError) return err;

  if ((err as AxiosError).isAxiosError) {
    return new ApiError(err as AxiosError<ErrorResponse>);
  }

  if (err instanceof Error) {
    return new AppError(err.message);
  }

  return new AppError("Unknown error occurred");
};
