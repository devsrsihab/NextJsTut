import React from 'react';

const PricingPerPage = ({params}) => {
    return (
        <h1 className="font-[900] text-center text-3xl capitalize text-gray-900 lg:text-5xl lg:leading-snug">
        Dynamic Routing price: {params.perpricing}
      </h1>
    );
};

export default PricingPerPage;