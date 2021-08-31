import { useEffect, RefObject} from 'react';

const useOutsideAlerter = (ref:RefObject<HTMLInputElement>, afterClickFunction:Function, id:string) => {
    useEffect(
        () => {
            /**
             * Alert if clicked on outside of element
             */

            function handleClickOutside(event:Event) {
                const target = event.target as Element;
                if (ref.current && !ref.current.contains(target)) {
                    if (target.id !== id) {
                        if (target.id !== id) afterClickFunction(false);
                    }
                }
            }

            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        },
        [ref,afterClickFunction,id]
    );
};

export default useOutsideAlerter;
