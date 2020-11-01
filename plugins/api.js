export default function ({ $axios }) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'application/json',
          'Content-Type' : 'application/json',
        }
      }
    })
  
    // Set baseURL to something different
    api.setBaseURL(process.env.baseUrl)
}