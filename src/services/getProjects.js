/* eslint-disable no-unused-vars */
export default async function getProjects() {
    try {
        const API = await fetch(
          "https://portfolio-backend1-xh2e.onrender.com/projects"
        );
        const response = await API.json()
        return response.data
        
    } catch (error) {
        return false
    }
}