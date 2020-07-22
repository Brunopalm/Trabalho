export var settings = {
  centerTeacher: {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1154,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
        },
      },
    ],
  },
  centerAdmin: {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  },
  centerDiscentes: {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    autoplay: true,
  },
};
export default { settings };
