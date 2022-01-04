import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { world } from "../../../Redux/actions/worldAction";
import moment from "moment";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const badgeStyle = {
  display: "inlineBlock",
  position: "absolute",
  top: "5px",
  right: "15px",
  backgroundColor: "red",
  color: "#fff",
  borderRadius: "15px",
  fontWeight: "bolder",
  wordSpacing: "1px",
};

const World = () => {
  const dispatch = useDispatch();
  const { worldPost } = useSelector((state) => state.world);
  useEffect(() => {
    dispatch(world());
  }, []);

  const data = worldPost.length ? (
    worldPost.map((post, i) => {
      return (
        <div className="col l3 m4 s6" key={i}>
          <div className="card">
            <div className="card-image">
              <a href={post.url}>
                <img
                  src={post.urlToImage}
                  height="150"
                  width="100"
                  alt="business-news-img"
                />
              </a>
              <span className=" badge" style={badgeStyle}>
                world
              </span>
            </div>

            <div className="card-content">
              <a href={post.url} style={{ color: "black" }}>
                {post.title.slice(0, 50) + "..."}
              </a>
              <a href={post.url} style={{ color: "black" }}>
                <p style={{ color: "orange", fontWeight: "bolder" }}>
                  {moment(post.publishedAt).fromNow()}
                </p>
              </a>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <SkeletonTheme baseColor="#fff" highlightColor="#A3DA8D">
      <p>
        <Skeleton count={10} />
      </p>
    </SkeletonTheme>
  );
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div
          className="fluid-container #eceff1 blue-grey lighten-5"
          style={{ height: "", padding: "10px 0 20px" }}
        >
          <div className="container">
            <div className="row">{data}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default World;
