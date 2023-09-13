<!-- There are multiple react hooks, but the most important ones are

useState

useState is how we define variables in React

Conditional Rendering What is that?

rendering a component when a certain condition is met
also nur etwas aufzeigen WENN etwas passiert

![Alt text](image.png)

    // 1. Use callback to get the previous value
        // 2. Spread out all the properties of the prev states
        // 3. Only change the property that you need to change

Numbers
    setNum(10)
    setNum(prevNum => prevNum + 10)   [ergibt 20]

Booleans
    setBool(true)
    setBool(prevBool => !prevBool)    [false]

Strings
    setStr("Hello")
    setStr(prevStr => prevStr + "Simplified) [Frontend Simplified]

Objects
    setObj(newObj)
    setObj(prevObj => ({...prevObj, quantity: prevObj.quantity +1}))

Arrays
    setArr(newArr)
    setArr(prevArr => ([...prevArr, 5]))


!(Parent_Child.png)



UseEffect 

Wird gleichzeitig mit der Seite geladen

useEffect(() => {
    console.log("ONLY on mount)
    }, [])
also erscheint nur EINMAL wenn die Seite geladen wird 


useEffect(() => {
    console.log("on mound AND on ${showModal} change")
    }, [showModal, x, y, etc....])
Rendert wenn die Seite neu lädt und wenn es änderung der angegeben Objekte gibt


useEffect(() => {
    console.log("Every render)
    }) ohne Array[] klammern
Rendert wenn die Seite neu lädt und wenn es änderung der aller Objekte gibt


-->