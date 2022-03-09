import React from "react";
import { Grid } from "@material-ui/core";
import ImagesCarousel from "../ImagesCarousel";

const CAROUSEL_DATA = [
  {
    thumbnail_url:
      "http://s3.amazonaws.com/babylon_development/property_images/pictures/000/227/295/large/0019018-1.jpg?1438776806",
    media_type: "image",
  },
  {
    thumbnail_url:
      "http://s3.amazonaws.com/babylon_development/property_images/pictures/000/373/375/large/0019018-2.jpg?1414966322",
    media_type: "image",
  },
  {
    embeddable: true,
    id: 1896,
    media_id: "nAkQxjwszmc",
    media_type: "tour",
    media_type_label: "3D Floorplan",
    source: null,
    source_id: null,
    supported_type: "matterport",
    thumbnail_url:
      "https://my.matterport.com/api/v1/player/models/nAkQxjwszmc/thumb",
    url: "https://my.matterport.com/show/?m=84wuTo9GF6m",
  },
  {
    embeddable: true,
    id: 1895,
    media_id: "197539789",
    media_type: "video",
    media_type_label: "Video",
    source: null,
    source_id: null,
    supported_type: "vimeo",
    thumbnail_url: "http://i.vimeocdn.com/video/610292861_640.jpg",
    url: "https://vimeo.com/197539789",
  },
  {
    embeddable: true,
    id: 1894,
    media_id: "BHACKCNDMW8",
    media_type: "video",
    media_type_label: "Video",
    source: null,
    source_id: null,
    supported_type: "youtube",
    thumbnail_url: "https://img.youtube.com/vi/BHACKCNDMW8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=BHACKCNDMW8",
  },
];

const Carousel = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ImagesCarousel images={CAROUSEL_DATA} />
      </Grid>
    </Grid>
  );
};

export default Carousel;
