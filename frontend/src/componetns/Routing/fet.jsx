const fetchname = async ({props, request}) => {
    const named = await fetch(`http://localhost:8000/api/OneProduct/${props.name}/`)
    return {named}
}

export default fetchname