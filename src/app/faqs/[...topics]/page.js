
const Topics = ({params}) => {
    return (
        <h1 className="font-[900] text-center text-3xl capitalize text-gray-900 lg:text-5xl lg:leading-snug">
        Cach All Segemnt Routing : {params.topics}
      </h1>
    );
};

export default Topics;