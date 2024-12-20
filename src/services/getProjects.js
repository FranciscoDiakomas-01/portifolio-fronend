/* eslint-disable no-unused-vars */
export default async function getProjects() {
    try {
        const API = await fetch("http://localhost:8000/projects");
        const response = await API.json()
        return response.data
        
    } catch (error) {
        return false
    }
}