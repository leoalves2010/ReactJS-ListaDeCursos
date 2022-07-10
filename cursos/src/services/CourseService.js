import { ApiService } from "./ApiService";

const endpoint = 'courses';

export const CourseService = {
    list(){
        return ApiService.get(endpoint);
    },
    create(course){
        return ApiService.post(endpoint, course);
    },
    delete(courseId){
        return ApiService.delete(endpoint, courseId);
    }
}