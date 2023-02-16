import { Question } from '@prisma/client';
import axios from 'axios';
import qs from 'qs';

type ListQuestionsQueries = {
  title?: string;
  cursor?: string;
};

export async function listQuestionsAPI(queries: ListQuestionsQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Question[]>(`/api/questions?${queryString}`);
  return response.data;
}

export async function readQuestionAPI(id: string) {
  const response = await axios.get<Question>(`/api/questions/${id}`);
  return response.data;
}

type AddQuestionPayload = {
  username: string;
  password: string;
  title: string;
  body: string;
  phone: string;
  email: string;
};

export async function addQuestionAPI(payload: AddQuestionPayload) {
  const response = await axios.post<Question>('/api/questions/add', payload);
  return response.data;
}

type UpdateQuestionPayload = {
  id: string;
} & AddQuestionPayload;

export async function updateQuestionAPI(payload: UpdateQuestionPayload) {
  const { id, username, password, title, body, phone, email } = payload;
  const response = await axios.put(`/api/questions/update/${id}`, {
    username,
    password,
    title,
    body,
    phone,
    email,
  });
  return response.data;
}

type ValidPasswordPayload = {
  password: string;
  questionId: string;
};

export async function validPasswordAPI(payload: ValidPasswordPayload) {
  const response = await axios.post(`/api/questions/valid`, payload);
  return response.data;
}

type RemoveQuestionPayload = {
  id: string;
  password?: string;
};

export async function removeQuestionAPI(payload: RemoveQuestionPayload) {
  const { id, password } = payload;
  const response = await axios.patch(`/api/questions/remove/${id}`, {
    password,
  });
  return response.data;
}

type AddReplyPayload = {
  reply: string;
  questionId: string;
};

export async function addReplyAPI(payload: AddReplyPayload) {
  const { reply: body, questionId } = payload;
  const response = await axios.post(`/api/reply/add`, { body, questionId });
  return response.data;
}

export async function removeReplyAPI(id: string) {
  const response = await axios.delete(`/api/reply/remove/${id}`);
  return response.data;
}
