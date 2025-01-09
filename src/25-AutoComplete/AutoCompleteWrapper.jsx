import AutoComplete from'./AutoComplete'

const AutoCompleteWrapper = ()=>{
    const suggestions = [
        'React',
        'Redux',
        'JavaScript',
        'TypeScript',
        'Next.js',
        'Node.js',
        'HTML',
        'CSS',
        'GraphQL',
        'REST API',
    ];
    return (
        <>
        <AutoComplete 
        suggestions={suggestions}
        />
        </>
    )
}

export default AutoCompleteWrapper