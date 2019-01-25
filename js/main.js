// Animate Smoth Scroll

$("#view-work").on("click", function() {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scollTops: images
    },
    900
  );
});
