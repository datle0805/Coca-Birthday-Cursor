import axios, { AxiosError, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
    }
    
    // Handle 403 Forbidden
    if (error.response?.status === 403) {
      console.error('Access forbidden');
    }

    return Promise.reject(error);
  }
);

export const get = async (url: string) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url: string, data: any) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (url: string, data: any) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const del = async (url: string) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;