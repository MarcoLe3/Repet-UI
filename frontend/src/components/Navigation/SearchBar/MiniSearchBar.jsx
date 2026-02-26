import { useRef, useCallback } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { FactoryPath } from '@/scripts/FactoryPath';

export default function MiniSearchBar({Content}) {
    const refToInput = useRef();

    const searchResult = useCallback (async () => {
        const queryValueFromInput = refToInput.current.value;
        const ContentPath = FactoryPath({fileOrigin: `/${Content}`});
        try{
            const res = await fetch(`${ContentPath.OrganizePath()}?search=${queryValueFromInput}`);
        } catch (error) {
            console.error(`Error fetching from MiniSearchBar, Please check MiniSearchBar: ${error}`);
        }
    },  [Content])

    const debouncedSearchResult = useDebounce({fn: searchResult, delay: 500});

    return (
        <div>
            <input 
                type='text' 
                alt='Search for documentation'
                ref={refToInput}
                onChange={debouncedSearchResult}
            />
        </div>
            
    );
}
