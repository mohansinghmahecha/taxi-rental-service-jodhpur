import React from "react";
import { Helmet } from "react-helmet";
import img404 from "../../assets/404.jpg";

export default function NotFound() {
  return (
    <div className="w-full block relative flex justify-center">
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <img src={img404} alt="404 Page Not Found" width={512} height={700} />
    </div>
  );
}
