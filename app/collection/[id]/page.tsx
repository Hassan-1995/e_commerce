import React from "react";

interface Props {
  params: { id: number };
}

const ContentDeatilPage = ({ params: { id } }: Props) => {
  return <div>ContentDeatilPage {id} </div>;
};

export default ContentDeatilPage;
