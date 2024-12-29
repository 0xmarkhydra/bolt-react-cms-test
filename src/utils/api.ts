import { useAuthStore } from '../store/authStore';

interface ApiOptions extends RequestInit {
  requiresAuth?: boolean;
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

  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}${endpoint}`, {
    headers: {
      ...baseHeaders,
      ...headers,
    },
    ...rest,
  });

  const data = await response.json();

  if (data.status_code !== 200) {
    throw new Error(data.messages || 'Something went wrong');
  }

  return data;
};