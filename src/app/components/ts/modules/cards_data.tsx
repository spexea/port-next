// Card.js
import React from "react";
import Image from "next/image";

const Card = ({
  imageSrc,
  title,
  content,
  width,
  height,
}: {
  imageSrc: string;
  title: string;
  content: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="flex">
      <div className="">
        <div className="w-86 card card-bordered card-normal bg-base-100 shadow-xl lg:w-96">
          <figure>
            <Image
              className="fill"
              src={imageSrc}
              width={width}
              height={height}
              alt="just a -test."
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">
                Check it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
