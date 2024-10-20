"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductCollection = () => {
  const [collections, setCollections] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const collectionHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://resortbookingdynamic-jureca2ir-udaykirans-projects-040e3fd3.vercel.app/api/admin/add-product`);
      const newData = await response.json();

      console.log("productData:", newData);

      setCollections(newData.data);
    } catch (error) {
      setError(error.message); // Updated to use error.message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    collectionHandler();
  }, []);

  return (
    <div className="productSection">
      <h1 align="center">Select your Stay</h1>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <p>{error}</p>
        </div>
      )}
      {collections ? (
        collections.map((item) => {
          return (
            <div key={item._id} className="proDetail">
              <div className="left">
                <div className="title">{item.title}</div>
                <br />
                <img src={item.image} alt={item.title} className="roomImage" />
              </div>
              <div className="center">
                <div className="pamen">
                  <h2 className="price">Rs. {item.price}</h2>
                  <div>
                    <h3>Amenities</h3>
                    {item.amen.map((serve, i) => {
                      return (
                        <div className="amenities" key={i}>
                          <div>*{serve}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="right">
                  <Link href={`/detail/${item._id}`}>
                    <button className="detail">Details </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        !loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <p>No collections found</p>
          </div>
        )
      )}
    </div>
  );
};

export default ProductCollection;
