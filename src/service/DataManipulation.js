import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}`

class DataManipulation {

    retrieveAllCourses(name) {
        console.log('executed service retrive')
        return axios.get(`${INSTRUCTOR_API_URL}/addresshistory`);
    }

    retrieveAllPhone(name) {
        console.log('executed service phone retrive')
        return axios.get(`${INSTRUCTOR_API_URL}/phonehistory`);
    }
    
    retrieveAllContr(name) {
        console.log('executed service contr retrive')
        return axios.get(`${INSTRUCTOR_API_URL}/contrhistory`);
    }
    
    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    updateCourse(course) {
        console.log('executed service update')
        return axios.put(`${INSTRUCTOR_API_URL}/addresshistory/`, course);
    }
    
    updatePhone(course) {
        console.log('executed service phone update')
        return axios.put(`${INSTRUCTOR_API_URL}/phonehistory/`, course);
    }
    
    updateContrOrg(course) {
        console.log('executed service contr update')
        return axios.put(`${INSTRUCTOR_API_URL}/contrhistory/`, course);
    }
    
    createCourse(course) {
        console.log('executed service create')
        return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
    }
}

export default new DataManipulation()