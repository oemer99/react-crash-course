<!-- What are Props? Props = Propertie
Props make components dynamic
Two parts of props:

Creating props
Using props

How to create a prop

Pass in the property name and value
<Todo propName="Prop Value"/> 
z.B.
<Todo title="Frontend Simpli"/>


Accept props in parameter
function Todo({propName}){
    ...
}


Use Props
function Todo({propName}){
return <div>{propName}</div>)
}

How to create multiple props
=> by a space

Pass in the property name and value
 <Todo propName="PropValue" propTwo="Second Prop Value"/>



Accept props in parameter
function Todo ({propName, propTwo}){
    ...
}

Use props
function Todo ({propName, propTwo}){
    return <div>{propName} {propTwo}</div>
}

![Alt text](image.png)
-->
