import { ApiService } from "./ApiService";

const endpoint = 'category';

export const CategoryService = {
    list(){
        return ApiService.get(endpoint);
    },
    create(category){
        return ApiService.post(endpoint, category);
    },
    delete(categoryId){
        return ApiService.delete(endpoint, categoryId);
    }
}