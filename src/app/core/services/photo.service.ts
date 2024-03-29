import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Photo } from '../models/photo.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PhotoService {
    url = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getCategoriesFullList(): Observable<any> {
        const url = this.url + '/category/fulllist';
        return this.http
            .get<any>(url)
            .pipe(
                catchError((error) =>
                    this.handleError('getCategoriesFullList', error)
                )
            );
    }

    getCategoriesPartialList(): Observable<any> {
        const url = this.url + '/category/partiallist';
        return this.http
            .get<any>(url)
            .pipe(
                catchError((error) =>
                    this.handleError('getCategoriesPartialList', error)
                )
            );
    }

    updateCategoriesList(category: string): Observable<any> {
        const headers = new HttpHeaders({ 'content-type': 'application/json' });
        const url = this.url + '/category/update';
        const body = JSON.stringify({ category: category });
        return this.http
            .post<any>(url, body, {
                headers: headers,
            })
            .pipe(
                catchError((error) =>
                    this.handleError('updateCategoriesList', error)
                )
            );
    }

    getPhotoBlob(id: number): Observable<ArrayBuffer> {
        const url = this.url + '/getPhotoBlob';
        const headers = new HttpHeaders();
        const params = new HttpParams().set('id', id);
        return this.http
            .get<any>(url, {
                headers: headers,
                responseType: 'blob' as 'json',
                params: params,
            })
            .pipe(
                catchError((error) => this.handleError('getPhotoBlob', error))
            );
    }

    getPhotoAttributes(id: number) {
        const url = this.url + '/getPhotoAttributes';
        const headers = new HttpHeaders();
        const params = new HttpParams().set('id', id);
        return this.http
            .get<any>(url, {
                headers: headers,
                params: params,
            })
            .pipe(
                catchError((error) =>
                    this.handleError('getPhotoAttributes', error)
                )
            );
    }

    getHeroPhotoByCategory(category: string): Observable<any> {
        const url = this.url + '/getHeroPhotoByCategory';
        const headers = new HttpHeaders();
        const params = new HttpParams().set('category', category);
        return this.http
            .get<any>(url, {
                headers: headers,
                responseType: 'blob' as 'json',
                params: params,
            })
            .pipe(
                catchError((error) =>
                    this.handleError('getHeroPhotoByCategory', error)
                )
            );
    }

    getPhotoListByCategory(category: string): Observable<Photo[] | any> {
        const url = this.url + '/getPhotoListByCategory';
        const headers = new HttpHeaders();
        const params = new HttpParams().set('category', category);

        return this.http
            .get<any>(url, {
                headers: headers,
                params: params,
            })
            .pipe(
                catchError((error) =>
                    this.handleError('getPhotoListByCategory', error)
                )
            );
    }

    uploadPhoto(file: File, photoAttributes: Photo) {
        const headers = new HttpHeaders({ enctype: 'multipart/form-data' });
        const params = new HttpParams().set(
            'category',
            photoAttributes.category
        );
        let filecategory = 'file';
        const formData = new FormData();
        formData.append(filecategory, file, file.name);
        formData.append('photoAttributes', JSON.stringify(photoAttributes));
        return this.http
            .post<any>(this.url + '/upload', formData, {
                headers: headers,
                params: params,
            })
            .pipe(
                catchError((error) => this.handleError('uploadPhoto', error))
            );
    }

    private handleError(operation: string, error: HttpErrorResponse) {
        console.log(
            'Error occured on PhotoService.' +
                operation +
                ': ' +
                '\n' +
                error.message
        );
        return of();
    }

    showTables() {
        const url = this.url + '/showTables';
        const headers = new HttpHeaders();

        return this.http
            .get<any>(url, {
                headers: headers,
            })
            .pipe(catchError((error) => this.handleError('showTables', error)));
    }

    getTableRows(tableName: string) {
        const url = this.url + '/getTableRows';
        const headers = new HttpHeaders();
        const params = new HttpParams().set('tableName', tableName);

        return this.http
            .get<any>(url, {
                headers: headers,
                params: params,
            })
            .pipe(
                catchError((error) => this.handleError('getTableRows', error))
            );
    }

    postTableNames(tableNames: string[]): Observable<any> {
        const url = this.url + '/postTableNames';
        const headers = new HttpHeaders();
        const body = tableNames;

        return this.http
            .post<any>(url, body, {
                headers: headers,
            })
            .pipe(
                catchError((error) => this.handleError('postTableNames', error))
            );
    }

    postTableRows(tableName: string, rows: any[]): Observable<any> {
        const url = this.url + '/postTableRows';
        const headers = new HttpHeaders();
        const body = {tableName, rows};

        return this.http
            .post<any>(url, body, {
                headers: headers,
            })
            .pipe(
                catchError((error) => this.handleError('postTableRows', error))
            );
    }

    saveFileLocally(file: File, photoAttributes: Photo) {
        const headers = new HttpHeaders({ enctype: 'multipart/form-data' });

        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http
            .post<any>(this.url + '/saveFileLocally', formData, {
                headers: headers,
            })
            .pipe(
                catchError((error) => this.handleError('saveFileLocally', error))
            );
    }
}
