import { useAuthStore } from '../store/authStore';

interface ApiOptions extends RequestInit {
  requiresAuth?: boolean;
}

interface ApiError {
  timestamp: string;
  error: string;
  message: string;
  statusCode: number;
}

export const api = async (endpoint: string, options: ApiOptions = {}) => {
  const { accessToken } = useAuthStore.getState();
  const { requiresAuth = true, headers = {}, ...rest } = options;

  const baseHeaders: Record<string, string> = {
    'Accept': '*/*',
  };

  if (requiresAuth && accessToken) {
    baseHeaders['Authorization'] = `Bearer ${accessToken}`;
  }

  if (options.body && !(options.body instanceof FormData)) {
    baseHeaders['Content-Type'] = 'application/json';
  }

  const url = import.meta.env.VITE_API_ENDPOINT || 'https://api.hsabook.vn';
  console.log('url api: ', url);
  
  const response = await fetch(`${url}${endpoint}`, {
    headers: {
      ...baseHeaders,
      ...headers,
    },
    ...rest,
  });

  const data = await response.json();

  if (!response.ok) {
    const error = data as ApiError;
    throw new Error(error.message || 'Có lỗi xảy ra');
  }

  return data;
};