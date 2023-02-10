import type { Notice } from '@prisma/client';
import axios from 'axios';
import qs from 'qs';

type ListNoticesQueries = {
  title?: string;
  cursor?: string;
};

export async function listNoticesAPI(queries: ListNoticesQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Notice[]>(`/api/notices?${queryString}`);
  return response.data;
}

export async function readNoticeAPI(id: string) {
  const response = await axios.get<Notice>(`/api/notices/${id}`);
  return response.data;
}

type AddNoticePayload = {
  title: string;
  body: string;
};

export async function addNoticeAPI(payload: AddNoticePayload) {
  const response = await axios.post('/api/notices/add', payload);
  return response.data;
}

export async function removeNoticeAPI(id: string) {
  const response = await axios.delete(`/api/notices/${id}`);
  return response.data;
}

type UpdateNoticePayload = {
  id: string;
  title: string;
  body: string;
};

export async function updateNoticeAPI(payload: UpdateNoticePayload) {
  const { id, title, body } = payload;
  const response = await axios.put(`/api/notices/${id}`, { title, body });
  return response.data;
}
