import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  apiBaseUrl = 'https://nest-backend-production-ca73.up.railway.app';

  GetQuestionsByPostId(id: string) {
    return this.http.get(this.apiBaseUrl + '/question/post/' + id);
  }

  GetQuestionById(id: string) {
    return this.http.get(this.apiBaseUrl + '/question/' + id);
  }

  CreateQuestion(data: any) {
    return this.http.post(this.apiBaseUrl + '/question', data);
  }

  UpdateQuestion(id: string, data: any) {
    return this.http.patch(this.apiBaseUrl + '/question/' + id, data);
  }

  DeleteQuestion(id: string) {
    return this.http.delete(this.apiBaseUrl + '/question/' + id);
  }
}
