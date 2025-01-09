

import AutoCompleteII from'./AutoCompleteII'

const AutoCompleteWrapperII = ()=>{
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
        <AutoCompleteII
        suggestions={suggestions}
        />
        </>
    )
}

export default AutoCompleteWrapperII