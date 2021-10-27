import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private _http: HttpClient,
    private _envService: EnvService
  ) { }

  // Profile
  getLoggedInProfile() {
    return this._http.get(this._envService.API_URL + '/profile/me', this.httpOptions);
  }
  
  createUpdateProfile(company, website, location, bio, status,githubusername, skills, youtube, facebook, twitter, instagram, linkedin) {
    return this._http.post(this._envService.API_URL+'/profile', {company, website, location, bio, status, githubusername, skills, youtube, facebook, twitter, instagram, linkedin}, this.httpOptions);
  }

  getAllProfile() {
    return this._http.get(this._envService.API_URL + '/profile', this.httpOptions);
  }

  getProfileById(user_id) {
    return this._http.get(this._envService.API_URL + `/profile/user/${user_id}`, this.httpOptions);
  }

  addUpdateExperience(title, company, location, from, to, current, description){
    return this._http.put(this._envService.API_URL+ '/profile/experience' , {title, company, location, from, to, current, description}, this.httpOptions); 
  }

  deleteExperience(exp_id) {
    return this._http.delete(this._envService.API_URL + `/profile/experience/${exp_id}`, this.httpOptions);
  }

  addUpdateEducation(school, degree, fieldofstudy, from, to, current, description){
    return this._http.put(this._envService.API_URL+ '/profile/education' , {school, degree, fieldofstudy, from, to, current, description}, this.httpOptions); 
  }

  deleteEducation(edu_id) {
    return this._http.delete(this._envService.API_URL + `/profile/education/${edu_id}`, this.httpOptions);
  }

  // Github Username

  getGithubProfile(username) {
    return this._http.get(this._envService.API_URL + `/profile/github/${username}`, this.httpOptions);
  }  

  // Posts

  getAllPosts() {
    return this._http.get(this._envService.API_URL + '/posts', this.httpOptions)
  }

  createPost(text) {
    return this._http.post(this._envService.API_URL + '/posts', {text}, this.httpOptions);
  }
  
  getPostById(id) {
    return this._http.get(this._envService.API_URL + `/posts/${id}`, this.httpOptions)
  }

  deletePostById(id) {
    return this._http.delete(this._envService.API_URL + `/posts/${id}`, this.httpOptions)
  }

  likePostBydId(id) {
    return this._http.put(this._envService.API_URL + `/posts/like/${id}`, this.httpOptions)
  }

  unlikePostBydId(id) {
    return this._http.put(this._envService.API_URL + `/posts/unlike/${id}`, this.httpOptions)
  }

  commentById(id, text) {
    return this._http.post(this._envService.API_URL + `/posts/comment/${id}`, {text}, this.httpOptions);
  }

  deleteComment(id, comment_id) {
    return this._http.delete(this._envService.API_URL + `/posts/comment/${id}/${comment_id}`, this.httpOptions)
  }

  // Delete Account
  deleteAccount() {
    return this._http.delete(this._envService.API_URL + '/profile', this.httpOptions);
  }
}
