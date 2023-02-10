import type { Story } from '@prisma/client';
import axios from 'axios';
import qs from 'qs';

type ListStoriesQueries = {
  title?: string;
  tag?: string;
  cursor?: string;
};

export async function listStoriesAPI(queries: ListStoriesQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Story[]>(`/api/stories?${queryString}`);
  return response.data;
}

export async function readStoryAPI(id: string) {
  const response = await axios.get<Story>(`/api/stories/${id}`);
  return response.data;
}

type AddStoryPayload = {
  title: string;
  body: string;
  thumbnail: string;
  tags: string[];
};

export async function addStoryAPI(payload: AddStoryPayload) {
  const response = await axios.post<Story>('/api/stories/add', payload);
  return response.data;
}

export async function removeStoryAPI(id: string) {
  const response = await axios.delete(`/api/stories/remove/${id}`);
  return response.data;
}

type UpdateStoryPayload = {
  id: string;
} & AddStoryPayload;

export async function updateStoryAPI(payload: UpdateStoryPayload) {
  const { id, title, body, thumbnail, tags } = payload;
  const response = await axios.put<Story>(`/api/stories/update/${id}`, {
    title,
    body,
    thumbnail,
    tags,
  });
  return response.data;
}
