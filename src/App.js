import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3ZGRlMTAyMDAyMGI3OGZiODc2ZDdiMjVlZDhmMGE5Y2UwNmRiNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ2h1ZGR5IiwiYXVkIjoiZ2h1ZGR5IiwiYXV0aF90aW1lIjoxNjQ1MDM2MDk5LCJ1c2VyX2lkIjoiZzlHTThVckhhQ1NXUFJ2QmRQTTEwcDdzUTI3MyIsInN1YiI6Imc5R004VXJIYUNTV1BSdkJkUE0xMHA3c1EyNzMiLCJpYXQiOjE2NDUwMzYwOTksImV4cCI6MTY0NTAzOTY5OSwicGhvbmVfbnVtYmVyIjoiKzg4MDE3NjI3NDYzMzMiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4ODAxNzYyNzQ2MzMzIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.SkBXCBn-vqec4n9WmxJkWn5cBN9Ik5PthVxttKIXyFX2BZIZvPpyFxmeLmkj5UvFhZk7Yxc91Stf5IYIDcXCPEgkzYwUhGB3jxJHfVAN9w-1cX9S9mtPFeRrXqWcOqNhv51FIWT5pJqcO70hft0T46WvaWOKL8JUBS3SxiHF1VHRBXClCetr9WCY_YIOz9ezToZ53EaNMulGRcWpKhVQoPuYe7vICdkcdSezEZkajnZaz0wlihM2smzkC4aW3giwBMpeW-BHa4IHEymSasoEn8suwheY2TLS7yIwFChNQ7Kr6Zjr3DBA5e0jHSAuvvHRh-xskhwWWHh4Om3_YpNBAQ'
    }
    
    axios.put("https://ghuddy.link/api/user/owner/6", {
      "dateOfBirth": "2022-02-16T17:59:45.493Z",
      "firstName": "string",
      "lastName": "string",
      "middleName": "string",
      "nid": "string",
      "requestId": "string",
      "tin": "string",
      "title": "string",
      "website": "string"
    }, {
        headers: headers
      })
      .then((response) => {
        console.log(response)
        console.log("success")
      })
      .catch((error) => {
        console.log(error)
        console.log("error")
      })
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
