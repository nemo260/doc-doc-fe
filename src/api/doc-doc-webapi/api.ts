/* tslint:disable */
/* eslint-disable */
/**
 * Ambulance documentation Api
 * Ambulance documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xnemecm1@stuba.sk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Document
 */
export interface Document {
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    'patient': string;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    'date': string;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    'report': string;
}

/**
 * DocsApi - axios parameter creator
 * @export
 */
export const DocsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new document
         * @param {Document} document Document to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDocument: async (document: Document, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'document' is not null or undefined
            assertParamExists('addDocument', 'document', document)
            const localVarPath = `/doc`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(document, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a document
         * @param {number} id ID of document to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDocument: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteDocument', 'id', id)
            const localVarPath = `/doc/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a document by ID
         * @param {number} id ID of document to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocumentById: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDocumentById', 'id', id)
            const localVarPath = `/doc/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocuments: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/docs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a document
         * @param {number} id ID of document to update
         * @param {Document} document Document to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDocument: async (id: number, document: Document, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateDocument', 'id', id)
            // verify required parameter 'document' is not null or undefined
            assertParamExists('updateDocument', 'document', document)
            const localVarPath = `/doc/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(document, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocsApi - functional programming interface
 * @export
 */
export const DocsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add a new document
         * @param {Document} document Document to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addDocument(document: Document, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addDocument(document, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete a document
         * @param {number} id ID of document to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDocument(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDocument(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a document by ID
         * @param {number} id ID of document to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDocumentById(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDocumentById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDocuments(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Document>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDocuments(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a document
         * @param {number} id ID of document to update
         * @param {Document} document Document to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDocument(id: number, document: Document, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDocument(id, document, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DocsApi - factory interface
 * @export
 */
export const DocsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocsApiFp(configuration)
    return {
        /**
         * 
         * @summary Add a new document
         * @param {Document} document Document to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDocument(document: Document, options?: any): AxiosPromise<Document> {
            return localVarFp.addDocument(document, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a document
         * @param {number} id ID of document to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDocument(id: number, options?: any): AxiosPromise<Document> {
            return localVarFp.deleteDocument(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a document by ID
         * @param {number} id ID of document to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocumentById(id: number, options?: any): AxiosPromise<Document> {
            return localVarFp.getDocumentById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocuments(options?: any): AxiosPromise<Array<Document>> {
            return localVarFp.getDocuments(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a document
         * @param {number} id ID of document to update
         * @param {Document} document Document to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDocument(id: number, document: Document, options?: any): AxiosPromise<Document> {
            return localVarFp.updateDocument(id, document, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DocsApi - interface
 * @export
 * @interface DocsApi
 */
export interface DocsApiInterface {
    /**
     * 
     * @summary Add a new document
     * @param {Document} document Document to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApiInterface
     */
    addDocument(document: Document, options?: AxiosRequestConfig): AxiosPromise<Document>;

    /**
     * 
     * @summary Delete a document
     * @param {number} id ID of document to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApiInterface
     */
    deleteDocument(id: number, options?: AxiosRequestConfig): AxiosPromise<Document>;

    /**
     * 
     * @summary Get a document by ID
     * @param {number} id ID of document to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApiInterface
     */
    getDocumentById(id: number, options?: AxiosRequestConfig): AxiosPromise<Document>;

    /**
     * 
     * @summary Get all documents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApiInterface
     */
    getDocuments(options?: AxiosRequestConfig): AxiosPromise<Array<Document>>;

    /**
     * 
     * @summary Update a document
     * @param {number} id ID of document to update
     * @param {Document} document Document to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApiInterface
     */
    updateDocument(id: number, document: Document, options?: AxiosRequestConfig): AxiosPromise<Document>;

}

/**
 * DocsApi - object-oriented interface
 * @export
 * @class DocsApi
 * @extends {BaseAPI}
 */
export class DocsApi extends BaseAPI implements DocsApiInterface {
    /**
     * 
     * @summary Add a new document
     * @param {Document} document Document to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApi
     */
    public addDocument(document: Document, options?: AxiosRequestConfig) {
        return DocsApiFp(this.configuration).addDocument(document, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a document
     * @param {number} id ID of document to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApi
     */
    public deleteDocument(id: number, options?: AxiosRequestConfig) {
        return DocsApiFp(this.configuration).deleteDocument(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a document by ID
     * @param {number} id ID of document to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApi
     */
    public getDocumentById(id: number, options?: AxiosRequestConfig) {
        return DocsApiFp(this.configuration).getDocumentById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all documents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApi
     */
    public getDocuments(options?: AxiosRequestConfig) {
        return DocsApiFp(this.configuration).getDocuments(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a document
     * @param {number} id ID of document to update
     * @param {Document} document Document to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApi
     */
    public updateDocument(id: number, document: Document, options?: AxiosRequestConfig) {
        return DocsApiFp(this.configuration).updateDocument(id, document, options).then((request) => request(this.axios, this.basePath));
    }
}


