export default function SeriesPage() {
    return (
        <div className="home w-screen overflow-x-hidden p-6">
            <h1>series page</h1>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    const {id} = ctx.props;
    const res = '';
}