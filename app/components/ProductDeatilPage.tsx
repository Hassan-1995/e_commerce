import React from "react";

interface Props {
  params: { id: number };
}

const ProductDeatilPage = ({ params: { id } }: Props) => {
  return <div>ProductDeatilPage {id} </div>;
};

export default ProductDeatilPage;
