import configureStore from '../store/configureStore';
import { toggleLoading } from '../actions/loading';

const API_ENDPOINT = 'http://localhost:3100/api/';
const COD_002 = 'Error to connect with the server, please check your internet connection or contact the support. COD: 002'

function COD_001(error){
	return 'There has been a problem with your fetch operation: ' + error.message + ', COD: 001';
}

const {dispatch} = configureStore();

export default class Request {
	static get(endpoint){
		return new Promise((resolve, reject)=> {
			dispatch(toggleLoading({ status: true }));
			
			fetch(API_ENDPOINT + endpoint, {
				method: "GET"
			}).then(response => {
                console.log(response);
                if(!response.ok) return reject(COD_002);
                
    			dispatch(toggleLoading({ status: false }));
				
				response.json().then(data => resolve(data));
			}).catch(error => reject(COD_001(error)));
		});
	}
	
	static update(endpoint, formData){
		return Request.sendFormData(endpoint, formData, "PUT");
	}
	
	static post(endpoint, formData){
		return Request.sendFormData(endpoint, formData, "POST");
	}
	
	static sendFormData(endpoint, formData, method){
		dispatch(toggleLoading({ status: true }));

		return new Promise((resolve, reject)=>{
			fetch(API_ENDPOINT + endpoint, {
				method: method,
				...Request.setHeaders(formData)
			}).then(response => {
				dispatch(toggleLoading({ status: false }));

				if(response.status == 500) {
					response.json().then(reject);
				}else {
					response.json().then(resolve);
				}
				
			}).catch(error => reject(COD_001(error)));
		});
	}
	
	static setHeaders(formData){
		return {
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify(formData)
		};
	}
	
	static hasError(errorMessage){
		alert(errorMessage);
	}
}