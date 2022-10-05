import styled from "styled-components";

const VideoPreview = () => {
  const embedId = "M7lc1UVf-VE";
  return (
    <VideoPrevDiv>
      <div style={{ background: "white" }}>
        <iframe
          style={{ background: "white" }}
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </VideoPrevDiv>
  );
};
export default VideoPreview;

const VideoPrevDiv = styled.div`
  height: 415px;
  width: 737px;
  left: 345px;
  top: 866px;
  margin-top: 26px;
  margin-bottom: 6px;
  border-radius: 6px;
  background: #fff;
`;
