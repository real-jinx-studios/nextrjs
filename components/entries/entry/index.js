import Link from 'next/link';
import { mutate } from 'swr';

function Entry({ id, title, content }) {

    async function deleteEntry() {

        let res = await fetch(`/api/delete-entry?id=${id}`, { method: 'DELETE' });
        let json = await res.json();
        if (!res.ok)
            throw Error(json.message);
        mutate('/api/get-entries');

    }
    return (
        <><br/>
        <div className='db_fetch'>
            <span>
                {id}
                <br/>
                {title}
                <br/>
                {content}
            </span>
        </div>
            <br/>
        </>
    )
}
export default Entry;