<!-- 

What is routing in React?

Routing lets you navigate around your website

Lässt die Seite sehr schnell wächsen ohne lange ladezeit
Z.B bei frontendsimplified.com links die Spalte kann man schnell von week 5 video auf ein anderes video switchen ohne lange ladezeit


<Route path="/users/:username" element={<Users />}></Route>

in Users.jsx
=>
function Users(){

    const { username } = useParams()

    return <h1>{username}</h1>
}


 -->