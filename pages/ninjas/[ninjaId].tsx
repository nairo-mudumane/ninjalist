export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((ninja) => {
        return { params: { ninjaId: ninja.id.toString() } };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${context.params.ninjaId}`
    );
    const data = await res.json();

    return {
        props: {
            ninja: data,
        },
    };
};

const NinjaDetails = ({ ninja }) => {
    return (
        <div>
            <h1>{ninja.name}</h1>

            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
        </div>
    );
};

export default NinjaDetails;
