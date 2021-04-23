import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const responseData = await res.json();

  const paths = responseData.data.map((ninja) => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const responseData = await res.json();

  return {
    props: {
      ninja: responseData.data,
    },
  };
};

const Details = ({ ninja }) => {
  console.log(ninja);
  return (
    <div>
      <h1>Details Page</h1>
      <Image
        src={`${ninja.avatar}`}
        alt={`${ninja.first_name}'s avatar`}
        width={100}
        height={100}
      />
      <h1>
        {ninja.first_name} {ninja.last_name}
      </h1>
      <p>{ninja.email}</p>
    </div>
  );
};

export default Details;
