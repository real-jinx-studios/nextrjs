import Entry from './entry';
function Entries({ entries }) {
    if (entries) {
        return (
            <div>
                {entries.map((e, i) => (
                    <div key={i} className="py-2">
                        <Entry id={e.prID} title={e.prName} content={e.prText}/>
                    </div>
                ))}
            </div>
        )
    } else {
        return null;
    }
}
export default Entries;